import { createFormPage } from './utils'
import userData from '../user-data'

const zip = () => ({
  _beagleType_: 'input',
  id: 'zip-field',
  label: 'cep',
  name: 'zip',
  value: userData.address?.zip,
})

const street = () => ({
  _beagleType_: 'input',
  id: 'street-field',
  label: 'rua ou avenida',
  name: 'street',
  value: userData.address?.street,
})

const number = () => ({
  _beagleType_: 'input',
  id: 'number-field',
  label: 'número',
  name: 'number',
  type: 'number',
  value: userData.address?.number,
})

const neighborhood = () => ({
  _beagleType_: 'input',
  id: 'neighborhood-field',
  label: 'bairro',
  name: 'neighborhood',
  value: userData.address?.neighborhood,
})

const telephone = () => ({
  _beagleType_: 'input',
  id: 'phone-field',
  label: 'telefone',
  name: 'phone',
  type: 'telephone',
  value: userData.address?.telephone,
})

const state = () => ({
  _beagleType_: 'select',
  id: 'state-field',
  label: 'Estado',
  name: 'state',
  value: userData.address?.state,
  options: [
    {
      name: 'Minas Gerais',
      value: 'mg'
    },
    {
      name: 'São Paulo',
      value: 'sp'
    },
    {
      name: 'Rio de Janeiro',
      value: 'rj'
    }
  ],
})

const city = () => ({
  _beagleType_: 'input',
  id: 'city-field',
  label: 'Cidade',
  name: 'city',
  value: userData.address?.city,
})

const complement = () => ({
  _beagleType_: 'input',
  id: 'complement-field',
  label: 'Complemento',
  name: 'complement',
  value: userData.address?.complement,
})

export default function getAddressView() {
  const inputGroups = [
    [zip(), street()],
    [[number(), neighborhood()], telephone()],
    [state(), city()],
    [complement()]
  ]

  return createFormPage({
    title: 'endereço',
    activePage: 3,
    previousUrl: 'professional-data',
    nextUrl: 'plan',
    saveUrl: 'address',
    inputGroups,
  })
}
