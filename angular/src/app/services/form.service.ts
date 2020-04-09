import { Injectable, ElementRef } from '@angular/core'
import { values, find, mapValues, pull, forEach } from 'lodash'
import { BeagleView } from '@zup-it/beagle-web'
import { FormComponentEvent, XhrEvent, NavigationEvent } from '../components/form/form.component'
import { NetworkService } from './network.service'

interface Field {
  value: any,
  hasError: boolean,
}

interface FormProps {
  id: string,
  onSubmit?: FormComponentEvent,
  onSuccess?: FormComponentEvent,
  beagleView: BeagleView,
}

type Listener = (...args: any) => void

export const createForm = (
  { onSubmit, onSuccess, beagleView }: FormProps,
  network: NetworkService,
) => {
  const fields: Record<string, Field> = {}
  const resetListeners: Array<Listener> = []
  const submitListeners: Array<Listener> = []
  const loadingListeners: Array<Listener> = []

  const setField = (name: string, field: Field) => fields[name] = field
  const setFieldValue = (name: string, value: any) => fields[name].value = value
  const setFieldError = (name: string, value: boolean) => fields[name].hasError = value
  const hasError = () => !!find(values(fields), { hasError: true })
  const getValue = () => mapValues(fields, 'value')
  const reset = () => forEach(resetListeners, listener => listener())
  const setLoading = (value: boolean) => forEach(loadingListeners, listener => listener(value))

  const addListener = (listenerArray: Array<Listener>) => (listener: Listener) => {
    listenerArray.push(listener)
    return () => {
      pull(listenerArray, listener)
    }
  }

  const handleNavigationEvent = async ({ target, url }: NavigationEvent) => {
    if (target === 'app') {
      window.location.href = url.startsWith('/') ? `${location.origin}${url}` : url
      return
    }

    if (target === 'beagle') {
      setLoading(true)
      const step = encodeURIComponent(url.replace(/^\//, ''))
      window.history.pushState({}, '', window.location.href.replace(/(\?.*)?$/, `?step=${step}`))
      await beagleView.updateWithFetch({ path: url, shouldShowLoading: false })
      setLoading(false)
      return
    }

    console.error(`Invalid navigation target: ${target}`)
  }

  const handleXhrEvent = async ({ method, url }: XhrEvent, data?: Record<string, any>) => {
    try {
      setLoading(true)
      return await network.sendRequest({ url, method, data })
    } catch (error) {
      window.alert(error.message)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const handleFormEvent = async (event: FormComponentEvent, data?: Record<string, any>) => {
    if (event.name === 'navigation') return handleNavigationEvent(event)
    if (event.name === 'xhr') return handleXhrEvent(event, data)
    console.error(`Unsupported event ${JSON.stringify(event)}`)
  }

  const submit = async (event: any) => {
    event.preventDefault()
    forEach(submitListeners, listener => listener())
    if (hasError()) return

    if (!onSubmit) return
    await handleFormEvent(onSubmit, getValue())
    if (onSuccess) await handleFormEvent(onSuccess, getValue())
  }

  return {
    setField,
    setFieldValue,
    setFieldError,
    hasError,
    getValue,
    addResetListener: addListener(resetListeners),
    addSubmitListener: addListener(submitListeners),
    addLoadingListener: addListener(loadingListeners),
    reset,
    submit,
    handleFormEvent,
  }
}

export type FormContext = ReturnType<typeof createForm>
const forms: Record<string, FormContext> = {}

@Injectable({ providedIn: 'root' })
export class FormService {
  constructor(private network: NetworkService) {}

  register(props: FormProps) {
    forms[props.id] = createForm(props, this.network)
    return forms[props.id]
  }

  unregister(id: string) {
    delete forms[id]
  }

  getForm(id: string) {
    return forms[id]
  }

  getFormInContext(element: ElementRef) {
    const closestForm = element.nativeElement.closest('app-form') as HTMLElement
    if (!closestForm) throw new Error('There\'s no form in the current context')
    if (!closestForm.id) throw new Error('The closest form has no id')
    if (!forms[closestForm.id]) throw new Error('The closest form has not been registered')
    return forms[closestForm.id]
  }
}
