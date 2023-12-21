import { Component } from '@angular/core';



@Component({
  selector: 'app-paying',
  templateUrl: './paying.component.html',
  styleUrls: ['./paying.component.css']
})
export class PayingComponent {
  processPayment() {
    // In a real payment gateway, you'd send the payment data to a secure server for processing.
    // For this example, we'll just display a success message.
    alert('Payment successful!');
    // Optionally, you can reset the form
    const form = document.getElementById('payment-form') as HTMLFormElement;
    form.reset();
  }
}

