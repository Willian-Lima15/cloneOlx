import { AnunciosModule } from './../pages/anuncios/anucios.module';
import { NgModule } from "@angular/core";
import { SeachComponent } from "../shared/components/seach/seach.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations:[
    HomeComponent,
    SeachComponent,
  ],
  imports:[
    AnunciosModule
  ]
})

export class HomeModule {}
