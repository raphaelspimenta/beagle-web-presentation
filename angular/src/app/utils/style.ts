import { reduce, kebabCase } from 'lodash'

export function convertStyleToString(style: Record<string, string>) {
  const styleArray = reduce(style, (result, value, key) => (
    [...result, `${kebabCase(key)}: ${value}`]
  ), [])

  return styleArray.join('; ')
}
