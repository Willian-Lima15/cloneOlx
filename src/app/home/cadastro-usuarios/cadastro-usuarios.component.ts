import { UsuariosService } from './../../core/services/usuarios.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {

  form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private usuariosService:UsuariosService
  ) { }

  ngOnInit() {
    this.fb.group({
      apelido: [''],
      email:[''],
      senha:['']
    })
  }

}
