import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CancionesComponent } from './Canciones/Canciones.component';
import { CancionesModule } from './Canciones/Canciones.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CancionesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
