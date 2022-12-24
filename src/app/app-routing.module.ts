import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from "./clientes/clientes.component";
import { LoginComponent } from "./login/login.component";
import { InicialComponent } from "./page/inicial/inicial.component";


const routes: Routes = [
  {path:'',component:InicialComponent},
  {path:'pageInicial',component:InicialComponent},
  {path:'cliente',component:ClientesComponent},
  {path:'sesion', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
