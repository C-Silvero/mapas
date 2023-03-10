import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface Marcador {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}


@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef

  mapa!: mapboxgl.Map
  zoom: number = 10;
  marcadores: Marcador[] = []
  center: [number, number] = [-58.821180,-27.467424];

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
    container: this.divMapa.nativeElement,
    center: this.center,
    zoom: 16,
    style: 'mapbox://styles/mapbox/streets-v11'    
    });

    this.leerLocalStorage()
  }

  agregarMarcador(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const marker = new mapboxgl.Marker({
      draggable: true,
      color
    }).setLngLat(this.center).addTo(this.mapa)

    this.marcadores.push({
      color,
      marker
    })

    this.guardarMarcadores()
  }

  guardarMarcadores(){
    const lngLat: Marcador[] = []

    this.marcadores.forEach( m => {

      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLat.push({
        color: color,
        centro: [lng, lat]
      })
    })

    localStorage.setItem('Marcadores', JSON.stringify(lngLat))

  }

  leerLocalStorage(){
     if (!localStorage.getItem('marcadores')){ return }

     const lngLat: Marcador[] = JSON.parse(localStorage.getItem('marcadores')!)
  }


  irLugar( marker: mapboxgl.Marker) {
    this.mapa.flyTo({
      center: marker.getLngLat(),
      zoom: 18
    })
  }

}
