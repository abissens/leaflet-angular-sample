import {Component} from '@angular/core';
import {LeafletDirective} from '../../base/directives/leaflet.directive';

@Component({
  selector: 'app-leaflet-directive-page',
  standalone: true,
  imports: [
    LeafletDirective
  ],
  templateUrl: './leaflet-directive-page.component.html',
  styleUrl: './leaflet-directive-page.component.less'
})
export class LeafletDirectivePageComponent {

}
