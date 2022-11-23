import { AnunciosService } from 'src/app/core/services/anuncios.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AnunciosModel } from 'src/app/shared/models/anuncios/anuncios';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  anuncios$: Observable<AnunciosModel[]>

  constructor(
    private anunciosService: AnunciosService
  ) {
    this.anuncios$ = this.anunciosService.getAnuncios().pipe(
      catchError(error => {
        return of([])
      }))
  }

  ngOnInit() {

  }

  onErro(){}

}
