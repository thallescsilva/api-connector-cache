import { CacheRepository } from '../../repositories/implementations/CacheRepository'
import { CreateCacheUseCase } from './CreateCacheUseCase'
import { CreateCacheController } from './CreateCacheController'
import { HandleController } from '../HandleController'

const cacheRepository = new CacheRepository()
const createCacheUseCase = new CreateCacheUseCase(cacheRepository)
const createCacheController = new CreateCacheController(createCacheUseCase)
const handleController = new HandleController(createCacheUseCase)

export { createCacheUseCase, createCacheController, handleController }
