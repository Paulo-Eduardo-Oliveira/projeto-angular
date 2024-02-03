import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  // com a (?) pode ou não vir o dado
  @Input() name?: string
  // com a (!) eu inicio o dado
  @Input() dadosUsuario!: {email: string, telefone: string, endereco: string}
  constructor() { }

  ngOnInit(): void {
  }

}
