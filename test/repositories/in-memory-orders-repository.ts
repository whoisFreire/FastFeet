import { OrdersRepository } from '@/domain/delivery/application/repositories/orders-repository'
import { Order } from '@/domain/delivery/enterprise/entities/order'

export class InMemoryOrdersRepository implements OrdersRepository {
  public orders: Order[] = []

  async create(order: Order): Promise<void> {
    this.orders.push(order)
  }
}
