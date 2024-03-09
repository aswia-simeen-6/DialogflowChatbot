
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images: string[] = [
    'https://www.gprec.ac.in/wp-content/uploads/2019/07/gprec-banner1.jpg',
    'https://www.gprec.ac.in//wp-content/uploads/2022/09/dataquest-2022-ranking.jpeg',
    'https://www.gprec.ac.in/wp-content/uploads/2022/06/2022-placements1.jpg',
    'https://www.gprec.ac.in/wp-content/uploads/2022/06/2022-placements2.jpg',
    'https://www.gprec.ac.in/wp-content/uploads/2022/06/Agnipath_Yojana.jpg',
    'https://www.gprec.ac.in/wp-content/uploads/2019/08/orange-1-1024x482@2x.jpg',
    'https://www.gprec.ac.in/wp-content/uploads/2019/07/gprec-banner3.jpg',
    'https://www.gprec.ac.in/wp-content/uploads/2019/04/GPREC_3.jpg',
    'https://www.gprec.ac.in/wp-content/uploads/2019/06/Girls-Hostel.jpg',
    'https://www.gprec.ac.in/wp-content/uploads/2019/07/gprec-banner4.jpg'
  ];
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    setInterval(() => {
      this.nextImage();
    }, 3000); // Change slide every 5 seconds (adjust as needed)
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

