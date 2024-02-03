import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Paulo"
  idade: number = 38
  profissao: string = "Arquiteto de Software"
  hobbies = ["dormir", "comer", "academia"]
  carros = [
      {
      name: "Corsa",
      ano: "1995"
      },
      {
        name: "Polo",
        ano: "2009"
      },
      {
        name: "HB",
        ano: "2017"
      }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
