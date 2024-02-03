import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "Arthur"
  userData = {
    email: "arthur.martins@gmail.com",
    telefone: "61984857979",
    endereco: "QNO 04"

  }

  title = 'app';
}
