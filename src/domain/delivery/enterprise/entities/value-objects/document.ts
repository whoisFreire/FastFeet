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
    if (documentValidator(value)) {
      this.value = value
    } else {
      throw new Error('Invalid document')
    }
  }
}
