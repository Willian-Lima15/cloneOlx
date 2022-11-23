import { first } from 'rxjs/operators';
import { UsuariosModel } from './../../shared/models/usuarios/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

 private readonly apiUrl = " http://localhost:3000/usuarios";

constructor(
  private HttpClient: HttpClient
  ) { }

  getUsers():Observable<UsuariosModel>{
    return this.HttpClient.get<UsuariosModel>(this.apiUrl)
  }

  getUser(id:number){
    return this.HttpClient.get<UsuariosModel>(`${this.apiUrl}/${id}`)
  }

  create(usuario: UsuariosModel){
    return this.HttpClient.post<UsuariosModel>(this.apiUrl, usuario).pipe(first())
  }

}
