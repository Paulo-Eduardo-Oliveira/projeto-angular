import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/interfaces/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animais: Animal[] = [];
  outrosAnimais: Animal[] = [];

  detalheAnimal = '';

  constructor(private listService: ListService) {
    this.getAnimais();
    this.getOutroAnimais();
  }

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.detalheAnimal = `O pet ${animal.name} tem ${animal.age} ano(s)`;
  }

  removeAnimal(animal: Animal) {
    this.animais = this.animais.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  removeOutroAnimal(animal: Animal) {
    this.outrosAnimais = this.outrosAnimais.filter(
      (a) => animal.name !== a.name
    );
    this.listService.removeOutroAnimal(animal.id).subscribe();
  }

  getAnimais(): void {
    this.listService
      .getAllAnimais()
      .subscribe((animais) => (this.animais = animais));
  }

  getOutroAnimais(): void {
    this.listService
      .getAllOutrosAnimais()
      .subscribe((outrosAnimais) => (this.outrosAnimais = outrosAnimais));
  }
}
