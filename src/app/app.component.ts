import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapaService } from './mapas/services/mapa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Hola Mundo';
  
  constructor(private mapService: MapaService) {

  }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = this.mapService.token;
  }
}
