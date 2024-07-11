import {Routes} from '@angular/router';
import {LeafletPageComponent} from './views/leaflet-page/leaflet-page.component';
import {LeafletDirectivePageComponent} from './views/leaflet-directive-page/leaflet-directive-page.component';
import {LeafletElephantPageComponent} from './views/leaflet-elephant-page/leaflet-elephant-page.component';

export const routes: Routes = [
  {path: 'basic-leaflet', component: LeafletPageComponent},
  {path: 'directive-leaflet', component: LeafletDirectivePageComponent},
  {path: 'elephant-leaflet', component: LeafletElephantPageComponent},
];
