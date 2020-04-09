import { ServerRoute } from 'hapi'
import { find } from 'lodash'
import userData from '../user-data'
import getPlanView from '../views/plan'
import plans from '../plans'
import { Plan } from '../types'

export const loadPlanView: ServerRoute = {
  method: 'GET',
  path: '/plan',
  handler: getPlanView,
}

export const savePlan: ServerRoute = {
  method: 'POST',
  path: '/plan',
  handler: (request, responseToolkit) => {
    const payload = request.payload as Plan
    userData.plan = find(plans, { id: payload.id })
    return responseToolkit.response().code(201)
  }
}
