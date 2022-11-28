import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("nome") nome!: ElementRef;
  @ViewChild("senha") senha!:ElementRef;

  userform!: FormGroup

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
    console.log(this.userform.value);

  }

}
