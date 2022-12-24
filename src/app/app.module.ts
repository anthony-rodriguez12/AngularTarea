import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicialComponent } from './page/inicial/inicial.component';
import { AgregarClienteComponent } from './functions/agregar-cliente/agregar-cliente.component';
import { ClientesComponent } from './clientes/clientes.component';

import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { ModificarComponent } from './functions/modificar/modificar.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    InicialComponent,
    AgregarClienteComponent,
    ClientesComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, 
    MatButtonModule, ReactiveFormsModule, MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, MatTableModule
  ],
  entryComponents: [LoginComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})

export class AppModule { }
