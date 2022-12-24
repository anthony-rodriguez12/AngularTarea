import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {
  total:any;
  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarClienteComponent>,private cookies:CookieService) { 
    this.total = this.cookies.get("total")
  }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

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
          types: 'Agregar',
          info: {
            position: ++this.total,
            cedula: this.usuarioNuevo.value.cedula,
            nombres: this.usuarioNuevo.value.nombres,
            apellidos: this.usuarioNuevo.value.apellidos,
            direccion: this.usuarioNuevo.value.direccion,
            edad: this.usuarioNuevo.value.edad
        },
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

  cancelar(){
    this.dialogRef.close(); 
  }
}
