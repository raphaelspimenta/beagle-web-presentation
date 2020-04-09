import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-card',
  template: '<div [ngStyle]="style" class="card"><ng-content></ng-content></div>',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() style
}
