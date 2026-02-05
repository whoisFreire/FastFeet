import { InMemoryCouriersRepository } from 'test/repositories/in-memory-couriers-repository'
import { RegisterCourierUseCase } from './register-courier'
import { constants } from '@/core/utils/constants'

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
      document: constants.fakeDocument,
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

  it('Should not be able to register a courier with wrong document', async () => {
    await expect(sut.execute({
      name: 'John Doe',
      city: 'New York',
      document: '1234567',
      password: '123456'
    })).rejects.toBeInstanceOf(Error)
  })
})
