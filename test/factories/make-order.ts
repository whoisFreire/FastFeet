import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Order, OrderProps } from '@/domain/delivery/enterprise/entities/order'
import { faker } from '@faker-js/faker'

export function makeOrder(
  override: Partial<OrderProps> = {},
  id?: UniqueEntityId
): Order {
  const order = Order.create(
    {
      receiver: faker.person.fullName(),
      address: faker.location.streetAddress(),
      ...override,
    },
    id
  )

  return order
}
