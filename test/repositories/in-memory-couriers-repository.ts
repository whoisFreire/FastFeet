import { CouriersRepository } from '@/domain/delivery/application/repositories/couriers-repository'
import { Courier } from '@/domain/delivery/enterprise/entities/courier'

export class InMemoryCouriersRepository implements CouriersRepository {
  public couriers: Courier[] = []

  async create(courier: Courier): Promise<void> {
    this.couriers.push(courier)
  }

  async findByDocument(document: string): Promise<Courier | null> {
    const courier = this.couriers.find((courier) => courier.document.toString() === document)

    if (!courier) {
      return null
    }

    return courier
  }
}
