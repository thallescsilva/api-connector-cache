import * as redis from 'redis'

const redisClient = redis.createClient({
  port: parseInt(process.env.REDIS_PORT) || 6379,
  host: process.env.REDIS_HOST || '127.0.0.1'
})

redisClient.on('connect', () => {
  console.log('Client connected to redis...')
})

redisClient.on('ready', () => {
  console.log('Client connected to redis and ready to use...')
})

redisClient.on('error', (err) => {
  console.log(err.message)
})

redisClient.on('end', () => {
  console.log('Client disconnected to redis')
})

redisClient.on('SIGNIT', () => {
  redisClient.quit()
})

export { redisClient }
