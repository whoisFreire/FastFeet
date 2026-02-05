import { makeOrder } from 'test/factories/make-order'
import { InMemoryOrdersRepository } from 'test/repositories/in-memory-orders-repository'
import { AssignCourierToOrderUseCase } from './assign-courier-to-order'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

let ordersRepository: InMemoryOrdersRepository
let sut: AssignCourierToOrderUseCase

describe('Assign Courier to Order', () => {
  beforeEach(() => {
    ordersRepository = new InMemoryOrdersRepository()
    sut = new AssignCourierToOrderUseCase(ordersRepository)
  })

  it('Should be able to assign courier to order', async () => {
    const order = makeOrder({
      receiver: 'example receiver',
    })

    ordersRepository.create(order)

    const result = await sut.execute({
      courierId: 'courier-1',
      orderId: order.id.toString()
    })

    expect(result.isRight()).toBe(true)
    expect(ordersRepository.orders[0]).toEqual(
      expect.objectContaining({
        courierId: new UniqueEntityId('courier-1'),
      })
    )
  })

  it('Should not be able to assign a courier to a non exists order', async () => {
    const result = await sut.execute({
      courierId: 'courier-1',
      orderId: 'non-order-1'
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(Error)
  })
})
