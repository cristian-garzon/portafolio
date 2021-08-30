import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: any;
  fullpage_api: any;
  faCoffee = faCoffee;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      anchors: ['welcome', 'about-me', 'projects', 'contact-me', 'contact to me'],
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
