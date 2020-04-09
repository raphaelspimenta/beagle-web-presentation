import { ServerRoute } from 'hapi'
import userData from '../user-data'
import getAddressView from '../views/address'
import { Address } from '../types'

export const loadAddressView: ServerRoute = {
  method: 'GET',
  path: '/address',
  handler: getAddressView,
}

export const saveAddress: ServerRoute = {
  method: 'POST',
  path: '/address',
  handler: (request, responseToolkit) => {
    const payload = request.payload as Address
    userData.address = payload
    return responseToolkit.response().code(201)
  }
}
