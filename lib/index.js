'use strict'

function only2(obj, keys) {
  if (typeof obj !== 'object') {
    return {}
  }

  if (typeof keys === 'string') {
    keys = keys.split(/ +/)
  }

  const result = {}
  for (let i = 0; i < keys.length; i++) {
    const pire = keys[i].split(/:+/)
    if (pire[1]) {
      result[pire[1]] = obj[pire[0]]
    } else {
      result[pire[0]] = obj[pire[0]]
    }
  }

  return result
}

module.exports = only2
