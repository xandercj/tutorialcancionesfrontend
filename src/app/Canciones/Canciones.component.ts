import { Component, OnInit } from '@angular/core';
import { Cancion } from './cancion';

@Component({
  selector: 'app-Canciones',
  templateUrl: './Canciones.component.html',
  styleUrls: ['./Canciones.component.css']
})
export class CancionesComponent implements OnInit {

  canciones: Array<Cancion>;
  constructor() { }

  ngOnInit() {
    this.canciones = [new Cancion("cancion 1", 1, 10, "Xander")]
  }

}
