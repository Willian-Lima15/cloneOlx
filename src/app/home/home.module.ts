import { NgModule } from "@angular/core";
import { AnunciosRecentesComponent } from "../pages/anuncios/anuncios-recentes/anuncios-recentes.component";
import { SeachComponent } from "../shared/components/seach/seach.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations:[
    HomeComponent,
    SeachComponent,
    AnunciosRecentesComponent
  ],
  imports:[]
})

export class HomeModule {}
