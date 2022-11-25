
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { UsuariosService } from './../core/services/usuarios.service';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AnunciosModule } from "../pages/anuncio/anuncios.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from '../core/services/authGuard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthGuardService]},
  {path:'login', component:LoginComponent},
  {path: 'cadastro', component: CadastroUsuariosComponent}
]

@NgModule({
  declarations:[
    HomeComponent,
    LoginComponent,
    CadastroUsuariosComponent
  ],
  imports:[
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    AnunciosModule
  ],
  providers:[UsuariosService]
})

export class HomeModule {}
