import { Component, Input, AfterViewInit, ElementRef } from '@angular/core'
import { FormComponentEvent } from '../form/form.component'
import { FormService, FormContext } from '../../services/form.service'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements AfterViewInit {
  @Input() onClick?: any
  @Input() event?: FormComponentEvent
  @Input() value: string
  @Input() disabled?: boolean
  @Input() type?: 'event' | 'submit' | 'reset' | 'button' | 'link'
  @Input() url?: string
  @Input() style?: Record<string, string>
  form: FormContext

  constructor(private formService: FormService, private element: ElementRef) {}

  handleClick() {
    if (this.onClick) this.onClick()
    if (this.type === 'event' && this.event && this.form) this.form.handleFormEvent(this.event)
    if (this.type === 'link' && this.url) {
      if (this.url.startsWith('/')) location.href = `${location.origin}${this.url}`
      else location.href = this.url
    }
  }

  ngAfterViewInit() {
    try {
      this.form = this.formService.getFormInContext(this.element)
    } catch {}
  }
}
