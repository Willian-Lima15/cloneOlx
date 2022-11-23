import { UsuariosService } from './../../core/services/usuarios.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {

  form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private usuariosService:UsuariosService,
    private router:Router
  ) { }

  ngOnInit() {
   this.form = this.fb.group({
      apelido: [''],
      email:[''],
      senha:['']
    })
  }

  add(){
    this.usuariosService.create(this.form.value).subscribe(()=>{//pipe com delay e mensagem de sucesso
      this.router.navigate([''])
    })
  }

}
