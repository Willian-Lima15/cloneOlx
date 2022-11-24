import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnunciosModel } from 'src/app/shared/models/anuncios/anuncios';

@Injectable()
export class AnunciosService {
  private  apiUrl = 'http://localhost:3000/anuncios';

  constructor(
    private http: HttpClient
  ) { }

  getAnuncios(): Observable<AnunciosModel[]> {
    return this.http.get<AnunciosModel[]>(this.apiUrl).pipe(first())
  }

  create(anuncios:AnunciosModel){
    return this.http.post<AnunciosModel[]>(this.apiUrl, anuncios).pipe(first())
  }
}
