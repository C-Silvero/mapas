import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { ZoomComponent } from './pages/zoom/zoom.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {path: 'fullscreen', component: FullscreenComponent},
      {path: 'mini-mapa', component: MiniMapaComponent},
      {path: 'marcadores', component: MarcadoresComponent},
      {path: 'propiedades', component: PropiedadesComponent},
      {path: 'zoom', component: ZoomComponent},
      {path: '**', redirectTo: 'fullscreen'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
