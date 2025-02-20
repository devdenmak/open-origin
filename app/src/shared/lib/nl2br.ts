import { createElement } from 'react'

const newlineRegex = /(\r\n|\r|\n)/g

export const nl2br = (str: string | null) => {
  if (typeof str !== 'string') {
    return str
  }

  return str.split(newlineRegex).map(function (line, index) {
    if (line.match(newlineRegex)) {
      return createElement('br', { key: index })
    }
    return line
  })
}
