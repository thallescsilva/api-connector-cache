import { Router } from 'express'
import { handleController } from '../api/v1/useCases/CreateCache'

const router = Router()

router.post('/cache', (request, response) => handleController.handle(request, response))

export { router }
