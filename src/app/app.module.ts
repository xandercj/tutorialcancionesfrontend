import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { CancionesComponent } from './Canciones/Canciones.component';
import { CancionesModule } from './Canciones/Canciones.module';
import { HttpClientModule } from '@angular/common/http';
import { CancionesService } from './Canciones/canciones.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CancionesModule,
    HttpClientModule
  ],
  providers: [
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
