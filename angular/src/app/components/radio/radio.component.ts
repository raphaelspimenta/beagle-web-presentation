import { Component, Input, AfterViewInit, ElementRef } from '@angular/core'
import { uniqueId } from 'lodash'
import { convertStyleToString } from '../../utils/style'
import { FormService, FormContext } from '../../services/form.service'

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
})
export class RadioComponent implements AfterViewInit {
  @Input() value: string
  @Input() position?: 'left' | 'right' | 'top' | 'bottom'
  @Input() style?: Record<string, string>
  form: FormContext
  id = uniqueId('radio')
  radioGroupName: string

  constructor(private formService: FormService, private element: ElementRef) {}

  onChange() {
    this.form.setFieldValue(this.radioGroupName, this.value)
  }

  setHostStyle() {
    const nativeElement = this.element.nativeElement as HTMLElement
    nativeElement.setAttribute('style', convertStyleToString(this.style))
  }

  setUpRadioGroupData() {
    this.form = this.formService.getFormInContext(this.element)
    const appRadio = this.element.nativeElement as HTMLElement
    const appRadioGroup = appRadio.closest('app-radio-group')
    const radioInput = appRadio.querySelector('input[type="radio"]')
    this.radioGroupName = appRadioGroup.getAttribute('name')
    const initialValue = appRadioGroup.getAttribute('initial-value')
    if (initialValue === this.value) radioInput.setAttribute('checked', 'checked')
  }

  ngAfterViewInit() {
    this.setHostStyle()
    this.setUpRadioGroupData()
  }
}
