import { Cache } from '../entities/Cache'

export interface ICacheRepository {
  set(cache: Cache): Promise<void>
  get(key: string): Promise<Cache>
  del(key: string): Promise<void>
  keys(pattern: string): Promise<Cache[]>
}
