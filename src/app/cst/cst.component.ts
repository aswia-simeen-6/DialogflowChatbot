import { Component } from '@angular/core';

@Component({
  selector: 'app-cst',
  templateUrl: './cst.component.html',
  styleUrls: ['./cst.component.css']
})
export class CstComponent {
  showDiv1: boolean = true;
showDiv2: boolean = false;
showDiv3: boolean = false;
showDiv4: boolean = false;
showDiv5: boolean = false;
showDiv6: boolean = false;
showDiv7: boolean = false;

toggleDiv1() {
  this.showDiv1 = true;
  this.showDiv2 = false;
  this.showDiv3 = false;
  this.showDiv4 = false;
  this.showDiv5 = false;
  this.showDiv6 = false;
  this.showDiv7 = false;
}

toggleDiv2() {
  this.showDiv1 = false;
  this.showDiv2 = true;
  this.showDiv3 = false;
  this.showDiv4 = false;
  this.showDiv5 = false;
  this.showDiv6 = false;
  this.showDiv7 = false;
}

toggleDiv3() {
  this.showDiv1 = false;
  this.showDiv2 = false;
  this.showDiv3 = true;
  this.showDiv4 = false;
  this.showDiv5 = false;
  this.showDiv6 = false;
  this.showDiv7 = false;
}

toggleDiv4() {
  this.showDiv1 = false;
  this.showDiv2 = false;
  this.showDiv3 = false;
  this.showDiv4 = true;
  this.showDiv5 = false;
  this.showDiv6 = false;
  this.showDiv7 = false;
}

toggleDiv5() {
  this.showDiv1 = false;
  this.showDiv2 = false;
  this.showDiv3 = false;
  this.showDiv4 = false;
  this.showDiv5 = true;
  this.showDiv6 = false;
  this.showDiv7 = false;
}

toggleDiv6() {
  this.showDiv1 = false;
  this.showDiv2 = false;
  this.showDiv3 = false;
  this.showDiv4 = false;
  this.showDiv5 = false;
  this.showDiv6 = true;
  this.showDiv7 = false;
}

toggleDiv7() {
  this.showDiv1 = false;
  this.showDiv2 = false;
  this.showDiv3 = false;
  this.showDiv4 = false;
  this.showDiv5 = false;
  this.showDiv6 = false;
  this.showDiv7 = true;
}
}
