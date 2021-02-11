import { Request, Response } from 'express'
import { CreateCacheUseCase } from './CreateCacheUseCase'

export class CreateCacheController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private createCacheUseCase: CreateCacheUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { method, prefix, key, value, pattern } = request.body

    try {
      await this.createCacheUseCase.execute({
        method,
        prefix,
        key,
        value,
        pattern
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
