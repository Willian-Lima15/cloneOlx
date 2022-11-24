import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AnunciosService } from 'src/app/core/services/anuncios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anucio-form',
  templateUrl: './anuncios-form.component.html',
  styleUrls: ['./anuncios-form.component.css']
})
export class AnunciosFormComponent implements OnInit {

  anuncioForm!:FormGroup

  constructor(
    private fb: FormBuilder,
    private anunciosSerice: AnunciosService,
    private router:Router
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

  salvar(){
    this.anunciosSerice.create(this.anuncioForm.value).subscribe(()=> {
      this.router.navigate([''])
    })
  }

  excluir(){

  }


}
