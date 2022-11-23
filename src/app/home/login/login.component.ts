import { CadastroUsuariosComponent } from './../cadastro-usuarios/cadastro-usuarios.component';
import { UsuariosService } from './../../core/services/usuarios.service';
import { UsuariosModel } from './../../shared/models/usuarios/usuario';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios:UsuariosModel[]=[]
  @ViewChild(CadastroUsuariosComponent) login!: CadastroUsuariosComponent

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {

  }

  logar() {
    if(this.usuarios){
      alert('eii')
    }
  }

  user(id:number){
    this.usuariosService.getUser(id).subscribe((res:any) => {
      console.log(res);

      this.usuarios = res
    })
  }

}
