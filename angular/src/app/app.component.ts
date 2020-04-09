import { Component } from '@angular/core'
import { LoadParams } from '@zup-it/beagle-web'
import { getUrlParams } from './utils/url'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'beagle-forms'
  loadParams: LoadParams

  constructor() {
    const { step = '' } = getUrlParams(window.location.href)
    this.loadParams = { path: `/${step}` }
  }
}
