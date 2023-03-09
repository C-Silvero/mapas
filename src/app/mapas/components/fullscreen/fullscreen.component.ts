import { Component, OnInit} from '@angular/core';
import { MapaService } from '../../services/mapa.service';
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.css']
})
export class FullscreenComponent implements OnInit {

  constructor(private mapService: MapaService){

  }

  ngOnInit(): void {
   
    var map = new mapboxgl.Map({
    container: 'mapa',
    center: [-58.853723,-27.469717],
    zoom: 16,
    style: 'mapbox://styles/mapbox/streets-v11'    
  });
  }

}
