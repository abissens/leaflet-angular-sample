import {Component} from '@angular/core';
import {Route, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf, NgIf, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    TitleCasePipe,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.less'
})
export class IndexPageComponent {

  routes: Route[] = [];

  constructor(router: Router) {
    this.routes = router.config;
  }
}
