import { AnunciosModel } from './../../../shared/models/anuncios/anuncios';
import { AnunciosService } from './../../../core/services/anuncios.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncios-recentes',
  templateUrl: './anuncios-recentes.component.html',
  styleUrls: ['./anuncios-recentes.component.css']
})
export class AnunciosRecentesComponent implements OnInit {

  anuncios: AnunciosModel = new AnunciosModel();
  @Input()listaAnuncios: AnunciosModel[]=[]

  constructor(

    ) { }

  ngOnInit() {

  }





}
