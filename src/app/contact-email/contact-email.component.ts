import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-email',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-email.component.html',
  styleUrls: ['./contact-email.component.css']
})
export class ContactEmailComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  sendEmail() {
    const emailData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('http://localhost:4200', emailData)
      .subscribe(
        (response) => {
          alert('Mensaje enviado exitosamente');
          this.name = '';
          this.email = '';
          this.message = '';
        },
        (error) => {
          alert('Hubo un problema al enviar el mensaje');
          console.error(error);
        }
      );
  }
}

