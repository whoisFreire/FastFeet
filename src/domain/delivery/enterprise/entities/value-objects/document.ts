import { documentValidator } from '@/core/utils/document-validator'

export class Document {
  private value: string

  toString() {
    return this.value
  }

  toValue() {
    return this.value
  }

  constructor(value: string) {
    console.log(value)
    if (!documentValidator(value)) {
      throw new Error('Invalid document')
    }

    this.value = value
  }
}
