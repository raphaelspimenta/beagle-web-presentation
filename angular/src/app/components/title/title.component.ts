import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-title',
  template: '<h2 [ngStyle]="style">{{value}}</h2>',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  @Input() value: string
  @Input() style?: Record<string, string>
}
