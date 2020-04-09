import { ServerRoute } from 'hapi'
import userData from '../user-data'
import getProfessionalDataView from '../views/professional-data'
import { ProfessionalData } from '../types'

export const loadProfessionalDataView: ServerRoute = {
  method: 'GET',
  path: '/professional-data',
  handler: getProfessionalDataView,
}

export const saveProfessionalData: ServerRoute = {
  method: 'POST',
  path: '/professional-data',
  handler: (request, responseToolkit) => {
    const payload = request.payload as ProfessionalData
    userData.professionalData = payload
    return responseToolkit.response().code(201)
  }
}
