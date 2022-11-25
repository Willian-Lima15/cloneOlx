import { AnunciosService } from 'src/app/core/services/anuncios.service';
import { Observable, of } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { AnunciosModel } from 'src/app/shared/models/anuncios/anuncios';
import { catchError, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  anuncios$: Observable<AnunciosModel[]>
  id!:number;

  constructor(
    private anunciosService: AnunciosService,
    private route: ActivatedRoute
  ) {
    this.anuncios$ = this.anunciosService.getAnuncios().pipe()
  }

  ngOnInit(){


  }


  localiza(){
    debugger
    const id = this.route.snapshot.paramMap.get('id')
    this.anuncios$ = this.anunciosService.getAnuncioById(this.id)
  }

}
