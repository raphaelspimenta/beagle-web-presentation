import { createFormPage } from './utils'
import userData from '../user-data'
import plans from '../plans'
import { Plan } from '../types'

const subtitle = {
  _beagleType_: 'text',
  id: 'form-subtitle',
  value: 'selecione um plano para sua conta',
  style: {
    color: '#8f8f96',
    margin: '0 0 30px',
  },
}

const createPlanOption = ({ id, name, description, price }: Plan) => ({
  _beagleType_: 'radio',
  id: `option-plan-${id}`,
  value: id,
  children: [
    {
      _beagleType_: 'text',
      value: name,
      style: {
        color: '#001A25',
        margin: '0 0 5px 0'
      }
    },
    {
      _beagleType_: 'text',
      value: `${description}. Por apenas ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}!`,
      style: {
        color: '#8f8f96',
        margin: '0',
      }
    }
  ]
})

const radioGroup = () => ({
  _beagleType_: 'radio-group',
  id: 'plan-field',
  name: 'id',
  value: userData.plan?.id,
  children: plans.map(createPlanOption)
})


export default function getPlanView() {
  return createFormPage({
    title: 'plano',
    titleStyle: { margin: '0 0 5px 0' },
    activePage: 4,
    previousUrl: 'address',
    nextUrl: 'payment',
    saveUrl: 'plan',
    content: [
      subtitle,
      radioGroup(),
    ],
  })
}
