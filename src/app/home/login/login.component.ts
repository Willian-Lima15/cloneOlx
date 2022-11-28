import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nome!: string;
  senha!:number;
  private userform!: FormGroup
  constructor(
    private router: Router,
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.userform = this.fb.group({
      nome:['',Validators.required],
      senha:['',Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])]
    })
  }

  logar() {
    if (this.nome === 'admin' && this.senha === 12){
      this.router.navigate(['/home'])
    }
  }

}
