import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  name: string = '';
  exibirNome: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  mostrarNome(nome: string): void {
    if (nome !== '') {
      this.name = nome;
      this.exibirNome = true;
    } else {
      this.exibirNome = false;
    }
  }
}
