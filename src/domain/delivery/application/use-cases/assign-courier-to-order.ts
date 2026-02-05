import { Either, left, right } from '@/core/either'
import { OrdersRepository } from '../repositories/orders-repository'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'

type AssignCourierToOrderUseCaseRequest = {
  courierId: string
  orderId: string
}

type AssignCourierToOrderUseCaseResponse = Either<Error, null>

export class AssignCourierToOrderUseCase {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async execute({ courierId, orderId }: AssignCourierToOrderUseCaseRequest):
  Promise<AssignCourierToOrderUseCaseResponse> {
    const order = await this.ordersRepository.findById(orderId)

    if (!order) {
      return left(new Error('order not found'))
    }

    order.courierId = new UniqueEntityId(courierId)

    return right(null)
  }
}
