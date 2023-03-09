import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomComponent } from './pages/zoom/zoom.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';


@NgModule({
  declarations: [
    MarcadoresComponent,
    ZoomComponent,
    PropiedadesComponent,
    MiniMapaComponent,
    FullscreenComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
