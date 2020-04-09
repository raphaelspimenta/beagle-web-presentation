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

export interface FormProps {
  onSubmit?: FormComponentEvent,
  onSuccess?: FormComponentEvent,
  style?: Record<string, string>,
}
