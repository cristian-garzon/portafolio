import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.css']
})
export class FullPageComponent {
config: any;
  fullpage_api: any;
  faCoffee = faCoffee;
  constructor() { 
        // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      anchors: ['welcome', 'about-me', 'projects', 'contact-me'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
      },
      afterLoad: (origin: any, destination: any, direction: any) => {
      }
    };
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }
}
