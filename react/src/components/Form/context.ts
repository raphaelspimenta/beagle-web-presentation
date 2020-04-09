import { createContext } from 'react'
import { values, find, mapValues, pull, forEach } from 'lodash'
import api from 'core/api'
import { FormComponentEvent, XhrEvent, NavigationEvent } from './types'

interface Field {
  value: any,
  hasError: boolean,
}

interface ExternalHandlers {
  onSubmit: (value: Record<string, any>) => void,
  onNavigate: (event: NavigationEvent) => Promise<void>,
}

type Listener = (...args: any) => void

export const createForm = ({ onSubmit, onNavigate }: ExternalHandlers) => {
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

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    forEach(submitListeners, listener => listener())
    if (hasError()) return
    onSubmit(getValue())
  }

  const handleNavigationEvent = async (event: NavigationEvent) => {
    setLoading(true)
    try {
      await onNavigate(event)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleXhrEvent = async ({ method, url }: XhrEvent, data?: Record<string, any>) => {
    try {
      setLoading(true)
      return await api.request({ method, url, data })
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

const context = createContext<ReturnType<typeof createForm>>(createForm({
  onSubmit: () => {},
  onNavigate: () => Promise.resolve(),
}))

export const FormProvider = context.Provider
export default context
