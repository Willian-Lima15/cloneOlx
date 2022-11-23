import { AnunciosModel } from 'src/app/shared/models/anuncios/anuncios';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-anuncios',
  templateUrl: './lista-anuncios.component.html',
  styleUrls: ['./lista-anuncios.component.css']
})
export class ListaAnunciosComponent implements OnInit {

  @Input() listaAnucios: AnunciosModel[]=[]
  constructor() { }

  ngOnInit() {
  }

}
