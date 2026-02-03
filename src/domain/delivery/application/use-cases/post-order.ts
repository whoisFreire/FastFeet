import { Either, right } from '@/core/either'
import { Order } from '../../enterprise/entities/order'
import { OrdersRepository } from '../repositories/orders-repository'

type PostOrderUserCaseRequest = {
  receiver: string
  address: string
}

export type PostOrderUseCaseResponse = Either<null, null>

export class PostOrderUseCase {
  constructor(private readonly ordersRepository: OrdersRepository) { }

  async execute({ address, receiver }: PostOrderUserCaseRequest) {
    const order = Order.create({
      address,
      receiver,
    })

    await this.ordersRepository.create(order)

    return right(null)
  }
}
