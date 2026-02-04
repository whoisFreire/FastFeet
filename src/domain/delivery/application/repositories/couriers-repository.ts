import { Courier } from '../../enterprise/entities/courier'

export abstract class CouriersRepository {
  abstract create(courier: Courier): Promise<void>
  abstract findByDocument(document: string): Promise<Courier | null>
}
