import { UsuariosService } from './../../core/services/usuarios.service';
import { UsuariosModel } from './../../shared/models/usuarios/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios:UsuariosModel[]=[]

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.usuariosService.getUsers().subscribe((res:any) => {
      this.usuarios = res
    })
  }

}
