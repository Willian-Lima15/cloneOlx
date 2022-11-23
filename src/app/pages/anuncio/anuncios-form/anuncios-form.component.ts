import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anucio-form',
  templateUrl: './anuncios-form.component.html',
  styleUrls: ['./anuncios-form.component.css']
})
export class AnunciosFormComponent implements OnInit {

  anuncioForm!:FormGroup

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.anuncioForm = this.fb.group({
      titulo:[''],
      descricao:[''],
      categoria:[''],
      vendAluga:[''],
      localizacao:[''],
      endereco:[''],
      foto:[''],
      valor:['']
    })
  }

}
