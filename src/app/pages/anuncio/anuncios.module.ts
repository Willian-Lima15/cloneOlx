import { ReactiveFormsModule } from '@angular/forms';
import { AnunciosService } from 'src/app/core/services/anuncios.service';
import { ListaAnunciosComponent } from './lista-anuncios/lista-anuncios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { Routes, RouterModule } from '@angular/router';
import { SeachComponent } from 'src/app/shared/components/seach/seach.component';
import { AnunciosFormComponent } from './anuncios-form/anuncios-form.component';

const routes: Routes = [
  {path:'', component:AnunciosComponent},
  {path:'novo', component:AnunciosFormComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    AnunciosComponent,
    ListaAnunciosComponent,
    SeachComponent,
    AnunciosFormComponent
  ],
  providers:[AnunciosService],
  exports:[AnunciosComponent]
})
export class AnunciosModule { }
