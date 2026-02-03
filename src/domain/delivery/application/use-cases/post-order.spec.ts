import { makeOrder } from 'test/factories/make-order'
import { PostOrderUseCase } from './post-order'
import { InMemoryOrdersRepository } from 'test/repositories/in-memory-orders-repository'

let ordersRepository: InMemoryOrdersRepository
let sut: PostOrderUseCase

describe('Post Order', () => {
  beforeEach(() => {
    ordersRepository = new InMemoryOrdersRepository()
    sut = new PostOrderUseCase(ordersRepository)
  })

  it('Should be able to post an order', async () => {
    const order = makeOrder({
      receiver: 'example receiver'
    })

    const result = await sut.execute(order)

    expect(result.isRight()).toBe(true)
    expect(ordersRepository.orders[0]).toEqual(
      expect.objectContaining({
        receiver: 'example receiver'
      })
    )
  })
})
