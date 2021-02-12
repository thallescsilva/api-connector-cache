import { ICacheRepository } from '../../repositories/ICacheRepository'
import { ICreateCacheRequestDTO } from './CreateCacheDTO'
import { Cache } from '../../entities/Cache'

export class CreateCacheUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private cacheRepository: ICacheRepository
  ) {}

  async setCache (data: ICreateCacheRequestDTO): Promise<void> {
    const cache = Cache.create(data)

    await this.cacheRepository.set(cache)
  }

  async getCache (data: ICreateCacheRequestDTO): Promise<Cache> {
    const cache = Cache.create(data)

    return new Promise((resolve) => {
      this.cacheRepository.get(cache.key).then(result => {
        resolve(result)
      })
    })
  }

  async delCache (data: ICreateCacheRequestDTO): Promise<void> {
    const cache = Cache.create(data)

    await this.cacheRepository.del(cache.key)
  }

  async getKeysCache (pattern: string): Promise<Cache[]> {
    return new Promise((resolve) => {
      this.cacheRepository.keys(pattern).then(result => {
        resolve(result)
      })
    })
  }
}
