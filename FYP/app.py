from flask import Flask,render_template,request
import pymysql.cursors
connection = pymysql.connect(host='localhost',
                             user='root',
                             password='G#06112002g',
                             database = 'FYP'            
                             )
cursor = connection.cursor()

app=Flask(__name__)


@app.route('/',methods=['POST','GET'])
def home():
    if(request.method=="POST"):
        user=request.form['user']
        password=request.form['password']
        sql="select `roll` from `students`"
        l=[]
        cursor.execute(sql)
        for i in cursor:
            l.append(i[0])
        if user in l:
            sql1="select `password` from `students` where `roll`=(%s);"
            p=[user]
            cursor.execute(sql1,p)
            password1=cursor.fetchone()

            if(password==password1[0]):
                sql2="select * from `students` where `roll`=(%s)"
                d=[user]
                details=[]
                cursor.execute(sql2,d)
                for i in cursor:
                    details.append(i)
                return render_template("details.html",details=details[0])
            else:
                return render_template("login.html",msg="Incorrect Password ")
        else:
            return render_template("login.html",msg="User Not Exist")

    return render_template("login.html")

if __name__=="__main__":
    app.run(debug=True)