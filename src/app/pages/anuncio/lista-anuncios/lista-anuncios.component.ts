import { Observable } from 'rxjs';
import { AnunciosService } from 'src/app/core/services/anuncios.service';
import { AnunciosModel } from 'src/app/shared/models/anuncios/anuncios';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-anuncios',
  templateUrl: './lista-anuncios.component.html',
  styleUrls: ['./lista-anuncios.component.css']
})
export class ListaAnunciosComponent implements OnInit {

  anuncios!: Observable<AnunciosModel[]>

  @Input() listaAnucios: AnunciosModel[]=[]
  @Output() loca = new EventEmitter(false)
  constructor(
    private AnunciosService:AnunciosService,
    ) { }

  ngOnInit() {

  }

  localizar(){
    this.loca.emit(true)
  }

}
