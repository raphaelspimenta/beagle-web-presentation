import { Component, Input, ElementRef } from '@angular/core'
import { FormService, FormContext } from '../../services/form.service'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  @Input() id: string
  @Input() name: string
  @Input() value: boolean
  @Input() position?: 'left' | 'right'
  form: FormContext

  constructor(private formService: FormService, private element: ElementRef) {}

  ngAfterViewInit() {
    this.form = this.formService.getFormInContext(this.element)
    this.form.setField(this.name, { value: this.value, hasError: false })
  }

  onChange() {
    this.form.setFieldValue(this.name, this.value)
  }
}
