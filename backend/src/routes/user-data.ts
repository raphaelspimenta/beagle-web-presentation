import { ServerRoute } from 'hapi'
import userData from '../user-data'

export const getCurrentUserData: ServerRoute = {
  method: 'GET',
  path: '/current-data',
  handler: () => userData,
}

export const resetUserData: ServerRoute = {
  method: 'DELETE',
  path: '/current-data',
  handler: (_, responseToolkit) => {
    delete userData.address
    delete userData.payment
    delete userData.personalData
    delete userData.plan
    delete userData.professionalData
    return responseToolkit.response().code(200)
  },
}
