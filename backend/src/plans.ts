import { Plan } from './types'

const basic: Plan = {
  id: 'basic',
  name: 'Basic',
  description: 'O plano básico oferece...',
  price: 9.99,
}

const silver: Plan = {
  id: 'silver',
  name: 'Silver',
  description: 'O plano silver oferece...',
  price: 29.99,
}

const premium: Plan = {
  id: 'premium',
  name: 'Premium',
  description: 'O plano premium oferece...',
  price: 59.99,
}

export default [basic, silver, premium]
