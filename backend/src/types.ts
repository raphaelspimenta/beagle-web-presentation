/* Data structures */

export type Sex = 'm' | 'f' | 'x'

export interface PersonalData {
  name: string,
  lastname: string,
  email: string,
  sex: Sex,
  age: number,
  cpf: string,
  id: string,
}

export interface ProfessionalData {
  education: number,
  company?: string,
  area: string,
  profession: string,
  income: number,
}

export interface Address {
  zip: string,
  street: string,
  number: number,
  neighborhood: string,
  telephone: string,
  state: string,
  city: string,
  complement?: string,
}

export interface Plan {
  id: string,
  name: string,
  description: string,
  price: number,
}

export interface Payment {
  number: string,
  name: string,
  expiry: string,
  cvv: string, 
  terms: boolean,
}

export interface UserData {
  personalData?: PersonalData,
  professionalData?: ProfessionalData,
  address?: Address,
  plan?: Plan,
  payment?: Payment,
}
