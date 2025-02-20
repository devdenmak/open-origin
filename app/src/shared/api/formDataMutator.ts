import { serialize } from 'object-to-formdata'

export const formDataMutator = <Body extends Record<string, unknown>>(body: Body): FormData => {
  return serialize(body)
}

export default formDataMutator
