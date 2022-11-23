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

}
