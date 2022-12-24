import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent {

  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarComponent>,private cookies:CookieService) { }

  ngOnInit(): void {
  }

  usuarioNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required)
  })
  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        types: 'Modificar',
        info: {
          position: this.cookies.get("nposition"),
          cedula: this.usuarioNuevo.value.cedula,
          nombres: this.usuarioNuevo.value.nombres,
          apellidos: this.usuarioNuevo.value.apellidos,
          direccion: this.usuarioNuevo.value.direccion,
          edad: this.usuarioNuevo.value.edad
        }
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/cliente', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
