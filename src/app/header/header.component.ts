import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { InicialComponent } from '../page/inicial/inicial.component'
import {NavigationExtras, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ruta = '';
  dropdownMenu = false;
  user: any;
  constructor(private router: Router,private dialog:MatDialog, private cookies:CookieService) { 
    try {
      this.user = this.cookies.get("Data");
      this.user = JSON.parse(this.user);
    } catch (error) {
      this.user = {
        usuario:'Perfil',
      }
    }
    
    
  }

  openDialogSesion(){
    this.dialog.open(LoginComponent)
  }

  myRuta(){
    this.ruta = this.router.url;
    console.log(this.ruta)
    return this.ruta
  } 

  dropdown(){
    this.dropdownMenu = !this.dropdownMenu;    
    return this.dropdownMenu;
  }
  
  goHome(){
    this.router.navigate(['/']);
    this.myRuta();
  }
  signOut(){
    this.cookies.delete("Data")
    this.router.navigate(['/']);
    this.myRuta();
  }

  ngOnInit(): void {
    this.myRuta();
  }
}

