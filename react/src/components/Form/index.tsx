import React, { FC, useState, useMemo, useEffect } from 'react'
import { BeagleComponent } from '@zup-it/beagle-react'
import { useHistory } from 'react-router-dom'
import Loader from '../Loader'
import { createForm, FormProvider } from './context'
import { LoadingPanel, StyledForm } from './styled'
import { FormProps, NavigationEvent } from './types'

type Props = FormProps & BeagleComponent

const Form: FC<Props> = ({ onSubmit, onSuccess, style, children, beagleContext }) => {
  const [isLoading, setLoading] = useState(false)
  const history = useHistory()

  const form = useMemo(() => {
    const handleSubmit = async (
      formContext: ReturnType<typeof createForm>,
      values: Record<string, any>,
    ) => {
      if (!onSubmit) return
      await formContext.handleFormEvent(onSubmit, values)
      if (onSuccess) await formContext.handleFormEvent(onSuccess, values)
    }

    const handleNavigation = ({ target, url }: NavigationEvent) => {
      if (target === 'app') {
        if (url.startsWith('/')) history.push(url)
        else window.location.href = url
        return Promise.resolve()
      }

      if (target === 'beagle') {
        const step = encodeURIComponent(url.replace(/^\//, ''))
        window.history.pushState({}, '', window.location.href.replace(/(\?.*)?$/, `?step=${step}`))
        return beagleContext.getView().updateWithFetch({ path: url, shouldShowLoading: false })
      }

      return Promise.reject(`Invalid navigation target: ${target}`)
    }

    const formContext = createForm({
      onSubmit: values => handleSubmit(formContext, values),
      onNavigate: handleNavigation,
    })
  
    setLoading(false)
    return formContext
  }, [onSubmit])

  useEffect(() => form.addLoadingListener(setLoading), [form])

  return (
    <FormProvider value={form}>
      <StyledForm
        style={style}
        onSubmit={form.submit}
        onReset={form.reset}
      >
        {children}
        <LoadingPanel isVisible={isLoading}><Loader /></LoadingPanel>
      </StyledForm>
    </FormProvider>
  )
}

export default Form
