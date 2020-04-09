import { ServerRoute } from 'hapi'
import getSuccessView from '../views/success'

export const loadSuccessView: ServerRoute = {
  method: 'GET',
  path: '/success',
  handler: getSuccessView,
}
