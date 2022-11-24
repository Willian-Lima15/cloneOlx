import { AnunciosModel } from 'src/app/shared/models/anuncios/anuncios';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-anuncios',
  templateUrl: './lista-anuncios.component.html',
  styleUrls: ['./lista-anuncios.component.css']
})
export class ListaAnunciosComponent implements OnInit {

  @Input() listaAnucios: AnunciosModel[]=[]
  @Output() delete = new EventEmitter(false)
  constructor() { }

  ngOnInit() {
  }

  excluir(){
    this.delete.emit(true)
  }

}
