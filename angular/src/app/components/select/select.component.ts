import { Component, Input, ElementRef, AfterViewInit } from '@angular/core'
import { convertStyleToString } from '../../utils/style'
import { FormService, FormContext } from '../../services/form.service'

interface Option {
  name: string,
  value: string,
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements AfterViewInit {
  @Input() label: string
  @Input() name: string
  @Input() options: Option[]
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

  onChange() {
    this.form.setFieldValue(this.name, this.value)
  }
}
