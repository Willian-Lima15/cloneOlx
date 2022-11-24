import { AnunciosService } from 'src/app/core/services/anuncios.service';
import { Observable, of } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { AnunciosModel } from 'src/app/shared/models/anuncios/anuncios';
import { catchError, tap } from 'rxjs/operators';

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
    this.anuncios$ = this.anunciosService.getAnuncios().pipe(tap(res => console.log(res)
    ))
  }

  ngOnInit(){}

  onErro(){}

  excluir(id: number){
     this.anunciosService.delete(id).subscribe()
  }
}
