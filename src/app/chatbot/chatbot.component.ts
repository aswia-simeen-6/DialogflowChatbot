import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  openChatbotUrl() {
    const chatbotUrl = 'https://bot.dialogflow.com/3e013554-3cb3-4294-b4bd-56d2605f8009'; // Replace with the actual chatbot URL
    window.open(chatbotUrl, '_blank');
  }
}
