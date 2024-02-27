import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
    this.getOutroAnimal();
  }

  ngOnInit(): void {}

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.listService
        .getItem(id)
        .subscribe((animal) => (this.animal = animal));
    }
  }

  getOutroAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.listService
        .getOutroItem(id)
        .subscribe((animal) => (this.animal = animal));
    }
  }
}
