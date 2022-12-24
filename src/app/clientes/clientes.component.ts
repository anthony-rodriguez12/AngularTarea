import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AgregarClienteComponent } from '../functions/agregar-cliente/agregar-cliente.component';
import { ModificarComponent } from '../functions/modificar/modificar.component';
import { ClienteInterface } from '../interfaces/cliente-interface';

const data:ClienteInterface[] = [{
    position: 1,
    cedula: '0151245245',      
    nombres: 'Andrés Luis',
    apellidos: 'Carvajal Lozano',
    direccion: 'Quito, Ecuador',
    edad: 50,
    modificar: 'Editar',
  },
  {
    position: 2,
    cedula: '0954658913',      
    nombres: 'Jorge Luis',
    apellidos: 'Charco Aguirre',
    direccion: 'Guayaquil, Ecuador',
    edad: 36,
    modificar: 'Editar',
  },
  {
    position: 3,
    cedula: '0957962158',      
    nombres: 'Andrea Lisbeth',
    apellidos: 'Romero Haro',
    direccion: 'Guayaquil, Ecuador',
    edad: 45,
    modificar: 'Editar',
  }
];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent{
  displayedColumns: string[] = ['position','cedula','nombres', 'apellidos','direccion','edad', 'modificar'];
  dataToDisplay = [...data];
  
  dataSource = new DataSourceFound(this.dataToDisplay);

  nuevoCliente:any;
  nav: any;
  nposition: any;
  
  constructor(private router: Router, private dialog:MatDialog,private cookies:CookieService) { 
    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
    
    let counte = this.dataToDisplay.length
    this.cookies.set("total", counte.toString())

    if (this.nuevoCliente != null){      
      console.log(this.nuevoCliente.datosCliente.queryParams)
      let types = this.nuevoCliente.datosCliente.queryParams.types
      if(types === 'Agregar'){
        this.addData();
      }else if(types === 'Modificar'){
        this.editData();
      }
      console.log(this.nuevoCliente.datosCliente.queryParams);
    }

  };

  addData() {
    let newData = this.nuevoCliente.datosCliente.queryParams.info;
    this.dataToDisplay = [...this.dataToDisplay,newData];
    this.dataSource.setData(this.dataToDisplay)
  }

  editData(){
    let newData = this.nuevoCliente.datosCliente.queryParams;
    this.dataToDisplay = [...this.dataToDisplay];
    console.log(this.nposition)
    this.dataToDisplay.map((element) => {
      if(this.nposition === element.position){
        console.log('Entre')
        element.cedula = newData.cedula;     
        element.nombres = newData.nombres;
        element.apellidos = newData.apellidos;
        element.direccion = newData.direccion;
        element.edad = newData.edad;
      }
    })
    console.log(this.dataToDisplay)
    this.dataSource.setData(this.dataToDisplay)
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }

  openDialogEditRow(element:any){
    console.log(element)
    console.log(element.position)
    this.nposition = element.position;
    this.dialog.open(ModificarComponent, {
      width: '50%',
    })
  }

  openDialogAgregar(){
    this.dialog.open(AgregarClienteComponent, {
      width: '50%',
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


class DataSourceFound extends DataSource<ClienteInterface>{
  private _dataStream = new ReplaySubject<ClienteInterface[]>();

  constructor(initialData: ClienteInterface[], ) {
    super();
    this.setData(initialData);
  }
  
  connect(): Observable<ClienteInterface[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: ClienteInterface[]) {
    this._dataStream.next(data);
  }

} 
