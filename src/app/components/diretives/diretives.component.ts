import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretives',
  templateUrl: './diretives.component.html',
  styleUrls: ['./diretives.component.css']
})
export class DiretivesComponent implements OnInit {

  size: number = 19
  color: string = "blue"
  classes = ['green-title', 'small-title', 'underline'];
  exibir: boolean = true;
  tipo: string = "mostrar"

  constructor() { }

  ngOnInit(): void {
  }

}
