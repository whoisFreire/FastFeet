import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { Document } from '@/domain/delivery/enterprise/entities/value-objects/document'

export type CourierProps = {
  document: Document
  name: string
  city: string
  password: string
  createdAt: Date
}

export class Courier extends Entity<CourierProps> {
  get document() {
    return this.props.document
  }

  get name() {
    return this.props.name
  }

  get city() {
    return this.props.city
  }

  get password() {
    return this.props.password
  }

  static create(props: Optional<CourierProps, 'createdAt'>, id?: UniqueEntityId) {
    const courier = new Courier({
      createdAt: new Date(),
      ...props,
    }, id)
    return courier
  }
}
