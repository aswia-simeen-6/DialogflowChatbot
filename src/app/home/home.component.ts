import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showChatbot: boolean = false;

  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
  }
}
