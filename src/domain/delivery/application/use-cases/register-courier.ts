import { Either, left, right } from '@/core/either'
import { CouriersRepository } from '../repositories/couriers-repository'
import { Courier } from '../../enterprise/entities/courier'
import { Document } from '../../enterprise/entities/value-objects/document'

type RegisterCourierUseCaseRequest = {
  document: string
  name: string
  city: string
  password: string
}

type RegisterCourierUseCaseResponse = Either<Error, null>

export class RegisterCourierUseCase {
  constructor(private courierRepository: CouriersRepository) { }

  async execute({
    city,
    document,
    name,
    password
  }: RegisterCourierUseCaseRequest): Promise<RegisterCourierUseCaseResponse> {
    const isDocumentAlreadyRegistered = await this.courierRepository.findByDocument(document)

    if (isDocumentAlreadyRegistered) {
      return left(new Error('Document already registered'))
    }

    const courier = Courier.create({
      name,
      document: new Document(document),
      city,
      password
    })

    await this.courierRepository.create(courier)

    return right(null)
  }
}
