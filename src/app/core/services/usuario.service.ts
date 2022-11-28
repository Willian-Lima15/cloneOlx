import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosModel } from 'src/app/shared/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly url = 'http://localhost:3000/usuarios'


  constructor(
    private http: HttpClient
  ) { }

  create(usuario: UsuariosModel):Observable<UsuariosModel[]>{
    return this.http.post<UsuariosModel[]>(this.url,usuario)
  }



}
