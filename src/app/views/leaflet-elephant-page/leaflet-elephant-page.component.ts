import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {LeafletDirectiveDirective} from '../../base/directives/leaflet-directive.directive';
import {NgIf, NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-leaflet-elephant-page',
  standalone: true,
  imports: [
    LeafletDirectiveDirective,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './leaflet-elephant-page.component.html',
  styleUrl: './leaflet-elephant-page.component.less'
})
export class LeafletElephantPageComponent implements AfterViewInit {

  @ViewChild(LeafletDirectiveDirective) appMap!: LeafletDirectiveDirective;
  elephantInTheRoom: boolean = false;

  ngAfterViewInit(): void {

  }

  travelToElephant() {
    this.appMap.map.flyTo([48.81939979925635, 2.2883000971252505],  18, {
      duration: 1,
      easeLinearity: 10,
    }).on('zoomend', () => this.elephantInTheRoom = true);

  }



}
