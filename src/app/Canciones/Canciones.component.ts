import { Component, OnInit } from '@angular/core';
import { Cancion } from './cancion';
import { CancionesService } from './canciones.service';


@Component({
  selector: 'app-Canciones',
  templateUrl: './Canciones.component.html',
  styleUrls: ['./Canciones.component.css']
})
export class CancionesComponent implements OnInit {

  canciones: Array<Cancion>;
  constructor( private cancionesService: CancionesService) { }

  getListaCanciones() {
    this.cancionesService.getCanciones('').subscribe(cs => {this.canciones = cs;} );
  }

  ngOnInit() {
    //this.canciones = [new Cancion("cancion 1", 1, 10, "Xander")]
    this.getListaCanciones();
  }

}
