import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {NavigationExtras, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  ruta = '';
  encrip: any;
  user:any;
  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private cookies:CookieService) { 
    
  }
  

  alert: boolean = false;
  
  admins = [
    { usuario:'Anthony',
      password: '111',
      img: 'https://imgs.search.brave.com/9I3Yub7c_zoccayRACNlCGAMzNtsyubakFjpvsunEhY/rs:fit:500:621:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VkL2Zh/LzU5L2VkZmE1OTdm/N2Q2NGRjNTY3ODI2/NjMxYTBiOTE2MWY0/LmpwZw'  
    },
    { usuario:'Nallely',
      password: '222',
      img: 'https://imgs.search.brave.com/DV22PKGSHEy-uWZxs0hWQgSyxlxhIzKFRt4K5p5tn5Q/rs:fit:474:474:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNDc0/eC9jMi82MS8xOC9j/MjYxMTgwMGYxMTQw/NzQ3YmFmZjExNDdl/MzM2Zjc0Mi5qcGc'
      },
    { usuario:'Ati', 
      password: '333',
      img: 'https://imgs.search.brave.com/UpKbTZ5p-sBI-a6bAABBGWon7eUW0V-yDOTpIxOaIkk/rs:fit:650:516:1/g:ce/aHR0cDovLzMuYnAu/YmxvZ3Nwb3QuY29t/Ly1Ba3RzT1dZWENB/MC9VQ1ROZDA5bjRD/SS9BQUFBQUFBQU1f/SS9oTlVvblVpY1hs/US9zMTYwMC9jaGlj/bytub3JtYWwuanBn'
      },
    { usuario:'Madelyne',
      password: '444',
      img: 'https://imgs.search.brave.com/BboZuhela0RefiP5W-neB_W3oXe7FHkP5NM7xJO4aCE/rs:fit:736:736:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC84Yi8zZi8xMy84/YjNmMTNhNGQ4Njc3/ODc3ZWYyZGMyNDdk/MmEyNjE3Yy5qcGc'
      },
  ]

  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  Users = {
    contador: 0
  };

  onSubmit(){
    const { usuario, password } = this.usuarioLogin.value;
    
    this.admins.some((user) => {
      if(user.usuario === usuario && user.password === password){
        this.router.navigate(['/cliente']);
        this.myRuta()
        this.dialogRef.close();
        this.Users.contador = 0

        this.encrip = JSON.stringify(user);
        this.cookies.set("Data",this.encrip);
      };
      this.Users.contador++; 
    });
    if(this.Users.contador === 4 ) {
      this.alert = true;
      setTimeout(() => this.alert=false, 4000);
    }


    
  }

  myRuta(){
    this.ruta = this.router.url;
    console.log(this.ruta)
    return this.ruta
  }
}
