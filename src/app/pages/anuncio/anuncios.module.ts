import { AnunciosService } from 'src/app/core/services/anuncios.service';
import { ListaAnunciosComponent } from './lista-anuncios/lista-anuncios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { Routes, RouterModule } from '@angular/router';
import { SeachComponent } from 'src/app/shared/components/seach/seach.component';

const routes: Routes = [
  {path:'', component:AnunciosComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AnunciosComponent,
    ListaAnunciosComponent,
    SeachComponent,
  ],
  providers:[AnunciosService],
  exports:[AnunciosComponent]
})
export class AnunciosModule { }
