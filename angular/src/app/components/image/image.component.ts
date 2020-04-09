import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-image',
  template: '<img [ngStyle]="style" [src]="src" />',
})
export class ImageComponent {
  @Input() src: string
  @Input() style: Record<string, string>
}
