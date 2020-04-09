import { ServerRoute } from 'hapi'
import { loadPersonalDataView, savePersonalData } from './personal-data'
import { loadProfessionalDataView, saveProfessionalData } from './professional-data'
import { loadAddressView, saveAddress } from './address'
import { loadPlanView, savePlan } from './plan'
import { loadPaymentView, savePayment } from './payment'
import { loadSuccessView } from './success'
import { getCurrentUserData, resetUserData } from './user-data'
import userData from '../user-data'

const root: ServerRoute = {
  method: 'GET',
  path: '/',
  handler: (...args) => {
    function handleRequest(route: ServerRoute) {
      if (typeof route.handler !== 'function') return route.handler
      return route.handler(...args)
    }

    if (!userData.personalData) return handleRequest(loadPersonalDataView)
    if (!userData.professionalData) return handleRequest(loadProfessionalDataView)
    if (!userData.address) return handleRequest(loadAddressView)
    if (!userData.plan) return handleRequest(loadPlanView)
    if (!userData.payment) return handleRequest(loadPaymentView)
    return handleRequest(loadSuccessView)
  },
}

export default [
  root,
  loadPersonalDataView,
  savePersonalData,
  loadProfessionalDataView,
  saveProfessionalData,
  loadAddressView,
  saveAddress,
  loadPlanView,
  savePlan,
  loadPaymentView,
  savePayment,
  loadSuccessView,
  getCurrentUserData,
  resetUserData,
]
