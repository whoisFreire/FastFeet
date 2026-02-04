import { InMemoryCouriersRepository } from 'test/repositories/in-memory-couriers-repository'
import { RegisterCourierUseCase } from './register-courier'

let couriersRepository: InMemoryCouriersRepository
let sut: RegisterCourierUseCase

describe('Register Courier', () => {
  beforeEach(() => {
    couriersRepository = new InMemoryCouriersRepository()
    sut = new RegisterCourierUseCase(couriersRepository)
  })

  it('Should be able to register a courier', async () => {
    const result = await sut.execute({
      name: 'John Doe',
      city: 'New York',
      document: '132.261.130-03',
      password: '123456'
    })

    expect(result.isRight()).toBe(true)
    expect(couriersRepository.couriers[0]).toEqual(
      expect.objectContaining({
        name: 'John Doe',
        city: 'New York',
        password: '123456'
      })
    )
  })
})
