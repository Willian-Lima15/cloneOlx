import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from './../../core/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userform!: FormGroup
  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.userform = this.fb.group({
      nome:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])]
    })
  }

  gravar(){
    this.usuarioService.create(this.userform.value).subscribe(()=>{
      this.router.navigate(['/login'])
    })
  }

}
