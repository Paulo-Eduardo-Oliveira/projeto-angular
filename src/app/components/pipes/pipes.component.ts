import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  texto: string = 'TEXTO DIGITADO EM CAIXA ALTA NO ARQUIVO TS';

  today = new Date();

  ngOnInit(): void {}
}
