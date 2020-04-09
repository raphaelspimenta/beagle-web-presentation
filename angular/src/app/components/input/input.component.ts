import { Component, Input, ElementRef, AfterViewInit } from '@angular/core'
import { FormService, FormContext } from '../../services/form.service'
import { convertStyleToString } from '../../utils/style'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements AfterViewInit {
  @Input() name: string
  @Input() label?: string
  @Input() type?: string
  @Input() value?: string
  @Input() disabled?: boolean
  @Input() autocomplete?: string
  @Input() placeholder?: string
  @Input() style?: Record<string, string>
  form: FormContext

  constructor(private formService: FormService, private element: ElementRef) {}

  setHostStyle() {
    const nativeElement = this.element.nativeElement as HTMLElement
    nativeElement.setAttribute('style', convertStyleToString(this.style))
  }

  initializeFormField() {
    this.form = this.formService.getFormInContext(this.element)
    this.form.setField(this.name, { value: this.value, hasError: false })
  }

  ngAfterViewInit() {
    this.setHostStyle()
    this.initializeFormField()
  }

  onChange() {
    this.form.setFieldValue(this.name, this.value)
  }
}
