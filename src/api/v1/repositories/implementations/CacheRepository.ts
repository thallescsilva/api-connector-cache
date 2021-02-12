import { ICacheRepository } from '../ICacheRepository'
import { Cache } from '../../entities/Cache'

import { redisClient } from '../../../../config/data/redis'

export class CacheRepository implements ICacheRepository {
  private caches: Cache[] = [];

  async set (cache: Cache): Promise<void> {
    redisClient.set(cache.key, cache.value, (err) => {
      if (err) throw new Error(err.message)
    })
  }

  async get (key: string): Promise<Cache> {
    return new Promise((resolve, reject) => {
      redisClient.get(key, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results !== null ? new Cache(key, results) : null)
        }
      })
    })
  }

  async del (key: string): Promise<void> {
    redisClient.del(key, (err) => {
      if (err) throw new Error(err.message)
    })
  }

  async keys (pattern: string): Promise<Cache[]> {
    return new Promise((resolve, reject) => {
      redisClient.keys(pattern, (err, results) => {
        if (err) reject(err.message)
        const keys = []

        results.forEach(res => {
          keys.push(new Cache(res))
        })

        resolve(keys)
      })
    })
  }
}
