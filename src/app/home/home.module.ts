import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AnunciosModule } from "../pages/anuncio/anuncios.module";

const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations:[
    HomeComponent,
  ],
  imports:[
    HttpClientModule,
    RouterModule.forChild(routes),
    CommonModule,
    AnunciosModule
  ],
})

export class HomeModule {}
