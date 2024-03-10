import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-button',
  templateUrl: './accordion-button.component.html',
  styleUrl: './accordion-button.component.css'
})
export class AccordionButtonComponent {
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;
  isCollapsed6 = true;
  isCollapsed7 = true;
    isCollapsed8 = true;
  
  toggleAccordion1() {
    this.isCollapsed1 = !this.isCollapsed1;
   
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
    this.isCollapsed6 = true;
  }


  toggleAccordion2() {
    this.isCollapsed2 = !this.isCollapsed2;
    this.isCollapsed1 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
    this.isCollapsed6 = true;
  }

  toggleAccordion3() {
    this.isCollapsed3 = !this.isCollapsed3;
    this.isCollapsed2 =true;
    this.isCollapsed1 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
    this.isCollapsed6 = true;
  }

  toggleAccordion4() {
    this.isCollapsed4 = !this.isCollapsed4;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed1 = true;
    this.isCollapsed5 = true;
    this.isCollapsed6 = true;
  }

  toggleAccordion5() {
    this.isCollapsed5 = !this.isCollapsed5;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed1 = true;
    this.isCollapsed6 = true;
  }
  toggleAccordion6() {
    this.isCollapsed6 = !this.isCollapsed6;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
    this.isCollapsed1 = true;
  }

  toggleAccordion7() {
    this.isCollapsed7 = !this.isCollapsed7;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
    this.isCollapsed1 = true;
    this.isCollapsed8 = true;
    this.isCollapsed6 = true;
  }

  toggleAccordion8() {
    this.isCollapsed8 = !this.isCollapsed8;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.isCollapsed4 = true;
    this.isCollapsed5 = true;
    this.isCollapsed1 = true;
    this.isCollapsed6 = true;
    this.isCollapsed7 = true;
  }
}
