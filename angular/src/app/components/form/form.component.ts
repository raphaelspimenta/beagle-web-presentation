import {
  Component,
  Input,
  OnDestroy,
  OnChanges,
  ElementRef,
  SimpleChanges,
} from '@angular/core'
import { uniqueId } from 'lodash'
import { BeagleComponent } from '@zup-it/beagle-angular'
import { FormService, FormContext } from '../../services/form.service'

export interface NavigationEvent {
  name: 'navigation',
  target: 'app' | 'beagle',
  url: string,
}

export interface XhrEvent {
  name: 'xhr',
  url: string,
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
}

export type FormComponentEvent = NavigationEvent | XhrEvent

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent extends BeagleComponent implements OnDestroy, OnChanges {
  id = uniqueId('form')
  formContext: FormContext
  @Input() onSubmit?: FormComponentEvent
  @Input() onSuccess?: FormComponentEvent

  constructor(private formService: FormService, private element: ElementRef) {
    super()
    element.nativeElement.id = this.id
  }

  createFormContext() {
    this.formContext = this.formService.register({
      id: this.id,
      onSubmit: this.onSubmit,
      onSuccess: this.onSuccess,
      beagleView: this.getBeagleContext().getView(),
    })
  }

  ngOnChanges({ onSubmit }: SimpleChanges) {
    if (onSubmit.currentValue !== onSubmit.previousValue) this.createFormContext()
  }

  ngOnDestroy() {
    this.formService.unregister(this.id)
  }
}
