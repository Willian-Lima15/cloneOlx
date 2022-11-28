import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from './../../core/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userform!: FormGroup
  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userform = this.fb.group({
      nome:[''],
      email:[''],
      senha:['']
    })
  }

}
