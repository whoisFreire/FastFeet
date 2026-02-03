/* eslint-disable no-unused-vars */
import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/value-objects/unique-entity-id'
import { Optional } from '@/core/types/optional'

export enum OrderStatus {
  WAITING = 'waiting',
  WITHDRAWN = 'withdrawn',
  DELIVERED = 'delivered',
}

export type OrderProps = {
  courierId?: UniqueEntityId | null
  receiver: string
  status: OrderStatus
  postedAt: Date
  address: string
  withdrawnAt?: Date | null
  deliveredAt?: Date | null
  updatedAt?: Date | null
}

export class Order extends Entity<OrderProps> {
  get receiver() {
    return this.props.receiver
  }

  get courierId() {
    return this.props.courierId
  }

  set courierId(courierId: UniqueEntityId | null | undefined) {
    this.props.courierId = courierId
    this.touch()
  }

  get status() {
    return this.props.status
  }

  set status(status: OrderStatus) {
    this.props.status = status
    this.touch()
  }

  get postedAt() {
    return this.props.postedAt
  }

  get address() {
    return this.props.address
  }

  get withdrawnAt() {
    return this.props.withdrawnAt
  }

  set withdrawnAt(date: Date | null | undefined) {
    this.props.withdrawnAt = date
    this.touch()
  }

  get deliveredAt() {
    return this.props.deliveredAt
  }

  set deliveredAt(date: Date | null | undefined) {
    this.props.deliveredAt = date
    this.touch()
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  static create(props: Optional<OrderProps, 'status' | 'postedAt'>, id?: UniqueEntityId) {
    const order = new Order({
      status: OrderStatus.WAITING,
      postedAt: new Date(),
      ...props,
    }, id)
    return order
  }
}
