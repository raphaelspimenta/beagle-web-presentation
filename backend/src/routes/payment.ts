import { ServerRoute } from 'hapi'
import userData from '../user-data'
import getPaymentView from '../views/payment'
import { Payment } from '../types'

export const loadPaymentView: ServerRoute = {
  method: 'GET',
  path: '/payment',
  handler: getPaymentView,
}

export const savePayment: ServerRoute = {
  method: 'POST',
  path: '/payment',
  handler: (request, responseToolkit) => {
    const payload = request.payload as Payment
    userData.payment = payload
    return responseToolkit.response().code(201)
  }
}
