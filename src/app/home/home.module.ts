import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'create', component:CreateComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    CreateComponent
  ]
})
export class HomeModule { }
