import {AfterViewInit, Component} from '@angular/core';
import {Map, map, tileLayer} from 'leaflet';

@Component({
  selector: 'app-leaflet-page',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-page.component.html',
  styleUrl: './leaflet-page.component.less'
})
export class LeafletPageComponent implements AfterViewInit {
  private map!: Map;

  ngAfterViewInit(): void {
    this.map = map('map', {
      center: [36.83359606938916, 10.147116233476737],
      zoom: 3
    });

    const tiles = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      minZoom: 18
    });

    tiles.addTo(this.map);
  }

}
