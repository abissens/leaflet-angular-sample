import {Component} from '@angular/core';
import {LeafletDirectiveDirective} from '../../base/directives/leaflet-directive.directive';

@Component({
  selector: 'app-leaflet-directive-page',
  standalone: true,
  imports: [
    LeafletDirectiveDirective
  ],
  templateUrl: './leaflet-directive-page.component.html',
  styleUrl: './leaflet-directive-page.component.less'
})
export class LeafletDirectivePageComponent {

}
