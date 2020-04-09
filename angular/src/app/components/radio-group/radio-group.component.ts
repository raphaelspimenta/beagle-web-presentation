import { Component, Input, ElementRef, OnInit, AfterViewInit } from '@angular/core'
import { convertStyleToString } from '../../utils/style'
import { FormService, FormContext } from '../../services/form.service'

@Component({
  selector: 'app-radio-group',
  template: '<ng-content></ng-content>',
})
export class RadioGroupComponent implements AfterViewInit, OnInit {
  @Input() name: string
  @Input() value?: string
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

  ngOnInit() {
    const nativeElement = this.element.nativeElement as HTMLElement
    nativeElement.setAttribute('name', this.name)
    nativeElement.setAttribute('initial-value', this.value || '')
  }

  ngAfterViewInit() {
    this.setHostStyle()
    this.initializeFormField()
  }
}
