import { AnunciosService } from 'src/app/core/services/anuncios.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AnunciosModel } from 'src/app/shared/models/anuncios/anuncios';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  anuncios$: Observable<AnunciosModel[]>

  constructor(
    private anunciosService: AnunciosService,
  ) {
    this.anuncios$ = this.anunciosService.getAnuncios().pipe()
  }

  ngOnInit(){

  }

  // localiza(event:any){
  //   debugger
  //   const id = this.route.snapshot.paramMap.get('id')
  //   this.anuncios$ = this.anunciosService.getAnuncioById(this.id)
  // }

}
