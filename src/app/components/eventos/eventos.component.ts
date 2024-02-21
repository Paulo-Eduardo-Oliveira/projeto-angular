import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // função para mostrar e esconder a msg, sempre o valor contrário do atual
  showMensage(): void{
    this.show = !this.show //toggle
  }
}
