import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Courier, CourierProps } from '@/domain/delivery/enterprise/entities/courier'
import { Document } from '@/domain/delivery/enterprise/entities/value-objects/document'
import { faker } from '@faker-js/faker'

export function makeCourier(
  override: Partial<CourierProps> = {},
  id?: UniqueEntityId
): Courier {
  const courier = Courier.create(
    {
      name: faker.person.fullName(),
      city: faker.location.city(),
      document: new Document(faker.string.numeric(11)),
      password: faker.internet.password(),
      createdAt: new Date(),
      ...override,
    },
    id
  )

  return courier
}
