import { AnunciosModel } from 'src/app/shared/models/anuncios/anuncios';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   anuncios: AnunciosModel[] = []
  constructor() { }

  ngOnInit() {
  }

}
