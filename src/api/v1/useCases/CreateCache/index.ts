import { CacheRepository } from '../../repositories/implementations/CacheRepository'
import { CreateCacheUseCase } from './CreateCacheUseCase'
import { HandleController } from '../HandleController'

const cacheRepository = new CacheRepository()
const createCacheUseCase = new CreateCacheUseCase(cacheRepository)
const handleController = new HandleController(createCacheUseCase)

export { createCacheUseCase, handleController }
