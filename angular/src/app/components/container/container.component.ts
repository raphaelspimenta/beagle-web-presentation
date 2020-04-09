import { Component, Input, ElementRef, AfterViewInit } from '@angular/core'
import { convertStyleToString } from '../../utils/style'

@Component({
  selector: 'app-container',
  template: '<ng-content></ng-content>',
})
export class ContainerComponent implements AfterViewInit {
  @Input() style: Record<string, string>

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    const nativeElement = this.element.nativeElement as HTMLElement
    nativeElement.setAttribute('style', convertStyleToString(this.style))
  }
}
