import { CadastroUsuariosComponent } from './../cadastro-usuarios/cadastro-usuarios.component';
import { UsuariosService } from './../../core/services/usuarios.service';
import { UsuariosModel } from './../../shared/models/usuarios/usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios:UsuariosModel[]=[]
  @ViewChild(CadastroUsuariosComponent) login!: CadastroUsuariosComponent

  constructor(
    private usuariosService: UsuariosService,
    private authService:AuthService
  ) { }

  ngOnInit() {

  }

  logar() {
    this.authService.auth(
      this.login.form.get('email')?.value,
      this.login.form.get('senha')?.value
    )
  }
}
