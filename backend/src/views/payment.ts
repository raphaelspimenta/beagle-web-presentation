import { createFormPage } from './utils'
import userData from '../user-data'

const number = () => ({
  _beagleType_: 'input',
  id: 'card-number-field',
  label: 'número',
  name: 'number',
  type: 'number',
  maxlength: 16,
  autocomplete: 'cc-number',
  value: userData.payment?.number,
})

const name = () => ({
  _beagleType_: 'input',
  id: 'card-name-field',
  autocomplete: 'cc-name',
  label: 'Nome como escrito no catão',
  name: 'name',
  value: userData.payment?.name,
})

const expiry = () => ({
  _beagleType_: 'input',
  id: 'card-expiry-field',
  label: 'validade',
  name: 'expiry',
  placeholder: '01-2020',
  autocomplete: 'cc-exp',
  value: userData.payment?.expiry,
})

const cvv = () => ({
  _beagleType_: 'input',
  id: 'card-cvv-field',
  label: 'cvv',
  name: 'cvv',
  type: 'number',
  autocomplete: 'cc-csc',
  value: userData.payment?.cvv,
})

const terms = () => {
  const price = userData.plan
    ? userData.plan.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : ''

  return {
    _beagleType_: 'checkbox',
    id: 'terms-field',
    name: 'terms',
    value: userData.payment?.terms,
    position: 'left',
    style: {
      margin: '10px 0',
      flex: 1,
    },
    children: [
      {
        _beagleType_: 'text',
        style: {
          margin: '0 10px',
          'font-size': '14px',
        },
        value: `Aceito que será cobrado um valor mensal de ${price} no cartão cujo os dados foram inseridos acima.`,
      },
    ],
  }
}

export default function getPaymentView() {
  const inputGroups = [
    [name(), number()],
    [expiry(), cvv()],
    terms(),
  ]

  return createFormPage({
    title: 'pagamento por cartão de crédito',
    activePage: 5,
    previousUrl: 'plan',
    nextUrl: 'success',
    saveUrl: 'payment',
    inputGroups,
  })
}
