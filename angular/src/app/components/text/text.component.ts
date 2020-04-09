import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-text',
  template: '<p [ngStyle]="style">{{value}}</p>',
})
export class TextComponent {
  @Input() value: string
  @Input() style?: Record<string, string>
}
