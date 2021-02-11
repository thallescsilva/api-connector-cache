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
          const cache = this.createCacheUseCase.getCache({ prefix, key })
          console.log('Cache retornado: ', cache)
          return response.status(200).json(cache)
        }
        case 'set':
          await this.createCacheUseCase.setCache({ method, prefix, key, value, pattern })
          return response.status(201).send()
        case 'del':
          await this.createCacheUseCase.delCache({ prefix, key })
          return response.status(200).send()
        case 'keys': {
          const caches = this.createCacheUseCase.getKeysCache(pattern)
          return response.status(200).json(caches)
        }
      }
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
