// Require the dev-dependencies
import chai from 'chai'
import chaiHttp from 'chai-http'
import { router } from '../../../../config/routes'

chai.use(chaiHttp)

describe('Request route with path /cache by POST verb', () => {
  it('checking set cache success', async () => {
    const form = {
      method: 'set',
      prefix: 'menu-admin',
      key: 'X251026',
      value: 'teste'
    }

    chai.request(router)
      .post('/cache')
      .send(form)
  })
})
