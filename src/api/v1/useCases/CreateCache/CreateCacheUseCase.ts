import { ICacheRepository } from '../../repositories/ICacheRepository'
import { ICreateCacheRequestDTO } from './CreateCacheDTO'
import { Cache } from '../../entities/Cache'

export class CreateCacheUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private cacheRepository: ICacheRepository
  ) {}

  // async execute (data: ICreateCacheRequestDTO) {
  //   const cache = new Cache(data.prefix, data.key, data.value)
  //   console.log('Objeto criado: ', cache)

  //   await this.cacheRepository.set(cache)
  // }

  async setCache (data: ICreateCacheRequestDTO): Promise<void> {
    const cache = new Cache(data.prefix, data.key, data.value)

    await this.cacheRepository.set(cache)
  }

  async getCache (data: ICreateCacheRequestDTO): Promise<Cache> {
    const cache = new Cache(data.prefix, data.key, data.value)

    const cacheReturned = this.cacheRepository.get(cache.id)

    console.log('Cache Retornado Use Case: ', cacheReturned)

    return cacheReturned
  }

  async delCache (data: ICreateCacheRequestDTO): Promise<void> {
    const cache = new Cache(data.prefix, data.key, data.value)

    await this.cacheRepository.del(cache.id)
  }

  async getKeysCache (data: ICreateCacheRequestDTO): Promise<Cache[]> {
    const cache = new Cache(data.prefix, data.key, data.value)

    const caches = this.cacheRepository.keys(cache.pattern)

    return caches
  }
}
