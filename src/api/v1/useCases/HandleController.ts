import { Request, Response } from 'express'
import { CreateCacheUseCase } from './CreateCache/CreateCacheUseCase'

export class HandleController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private createCacheUseCase: CreateCacheUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { method, prefix, key, value, pattern } = request.body

    try {
      switch (method.toLowerCase()) {
        case 'get': {
          const cacheReturned = this.createCacheUseCase.getCache({ prefix, key })
          cacheReturned.then(cache => {
            return response.status(200).json(cache)
          })
          break
        }
        case 'set':
          await this.createCacheUseCase.setCache({ prefix, key, value })
          return response.status(201).send()
        case 'del':
          await this.createCacheUseCase.delCache({ prefix, key })
          return response.status(200).send()
        case 'keys': {
          const keysReturneds = this.createCacheUseCase.getKeysCache(pattern)
          keysReturneds.then(keys => {
            return response.status(200).json(keys)
          })
          break
        }
        default:
          return response.status(400).json({ message: 'Choose one of the following commands: SET, GET, DEL, KEYS' })
      }
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
