import { createFormPage } from './utils'
import userData from '../user-data'

const name = () => ({
  _beagleType_: 'input',
  id: 'name-field',
  label: 'nome',
  name: 'name',
  value: userData.personalData?.name,
})

const lastName = () => ({
  _beagleType_: 'input',
  id: 'lastname-field',
  label: 'sobrenome',
  name: 'lastname',
  value: userData.personalData?.lastname,
})

const email = () => ({
  _beagleType_: 'input',
  id: 'email-field',
  type: 'email',
  label: 'e-mail',
  name: 'email',
  value: userData.personalData?.email,
})

const sex = () => ({
  _beagleType_: 'select',
  id: 'sex-field',
  label: 'sexo',
  name: 'sex',
  value: userData.personalData?.sex,
  options: [
    {
      name: 'masculino',
      value: 'm'
    },
    {
      name: 'feminino',
      value: 'f'
    },
    {
      name: 'outro',
      value: 'x'
    }
  ],
})

const age = () => ({
  _beagleType_: 'input',
  id: 'age-field',
  label: 'idade',
  name: 'age',
  type: 'number',
  value: userData.personalData?.age,
})

const cpf = () => ({
  _beagleType_: 'input',
  id: 'cpf-field',
  type: 'cpf',
  label: 'cpf',
  name: 'cpf',
  value: userData.personalData?.cpf,
})

const id = () => ({
  _beagleType_: 'input',
  id: 'id-field',
  label: 'identidade',
  name: 'id',
  value: userData.personalData?.id,
})

export default function getPersonalDataView() {
  const inputGroups = [
    [name(), lastName()],
    [email(), [sex(), age()]],
    [cpf(), id()]
  ]

  return createFormPage({
    title: 'dados pessoais',
    activePage: 1,
    nextUrl: 'professional-data',
    saveUrl: 'personal-data',
    inputGroups,
  })
}
