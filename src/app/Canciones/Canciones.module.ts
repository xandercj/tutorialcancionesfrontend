import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionesComponent } from './Canciones.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CancionesComponent],
  exports: [CancionesComponent]
})
export class CancionesModule { }
