import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnunciosRecentesComponent } from './anuncios-recentes/anuncios-recentes.component';
import { AnunciosComponent } from "./anuncios/anuncios.component";

const routes: Routes = [
  { path: '', component: AnunciosComponent }
]

@NgModule({
  declarations: [
    AnunciosComponent,
    AnunciosRecentesComponent
  ],
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class AnunciosModule { }
