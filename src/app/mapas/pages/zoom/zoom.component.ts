import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapaService } from '../../services/mapa.service';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef

  mapa!: mapboxgl.Map
  zoom: number = 10;
  center: [number, number] = [-58.853723,-27.469717];

  constructor(private mapService: MapaService){
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
    container: this.divMapa.nativeElement,
    center: this.center,
    zoom: 16,
    style: 'mapbox://styles/mapbox/streets-v11'    
  });

    this.mapa.on('zoom', () => {
      this.zoom = this.mapa.getZoom()
    })
  
    this.mapa.on('zoomend', () => {
      if ( this.mapa.getZoom() > 18) {
        this.mapa.zoomTo( 18 )
      }
    })

    this.mapa.on('move', (e) => {
      const target = e.target;
      const { lng, lat} = target.getCenter();
      this.center = [lng, lat]
    })

  }

  zoomIn(){
    this.mapa.zoomIn()
    this.zoom = this.mapa.getZoom()
  }

  zoomOut(){
    this.mapa.zoomOut()
    this.zoom = this.mapa.getZoom()
  }

}
