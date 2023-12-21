import pymysql.cursors
connection = pymysql.connect(host='localhost',
                             user='root',
                             password='G#06112002g',
                             database = 'FYP'            
                             )
cursor = connection.cursor()

# sql="insert into `students` values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
# l=list(map(str,input().split(",")))

sql="select * from `students`"
cursor.execute(sql)

for i in cursor:
    print(i)

connection.commit()
# cursor.execute(sql)


# sql="select * from `students`"
# cursor.execute(sql)
# for i in cursor:
#     print(i)

# DB & table creation
# sql='''create table `students`(
# `name` varchar(255),
# `roll` varchar(30),
# `sectioin` varchar(10),
# `pos` varchar(30),
# `scheme` varchar(30),
# `gmail` varchar(255),
# `phone` varchar(255),
# `cgpa` varchar(255),
# `password` varchar(255)
# )'''
# sql="create database `FYP`"



# inserting rows
