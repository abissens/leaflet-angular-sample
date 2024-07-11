import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {map, Map, tileLayer} from 'leaflet';

@Directive({
  selector: '[appMap]',
  standalone: true
})
export class LeafletDirectiveDirective implements AfterViewInit {
  @Input() lat: number = 39.8282;
  @Input() long: number = -98.5795;

  private leafletMap!: Map;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.style.height = '100%';
    this.leafletMap = map(this.el.nativeElement, {
      center: [this.lat, this.long],
      zoom: 3
    });
    console.dir([this.lat, this.long]);
    const tiles = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      minZoom: 18
    });

    tiles.addTo(this.leafletMap);
  }


  get map() {
    return this.leafletMap;
  }

}
