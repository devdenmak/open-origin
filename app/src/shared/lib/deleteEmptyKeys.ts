type IObj = Record<string, unknown>

export function deleteEmptyKeys(obj: IObj, slot = {}) {
  const newObj: IObj = slot

  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'object') {
      if (Array.isArray(obj[key])) {
        newObj[key] = deleteEmptyKeys(obj[key] as unknown as IObj, [])
      } else {
        newObj[key] = deleteEmptyKeys(obj[key] as IObj)
      }
    } else if (obj[key]) {
      newObj[key] = obj[key]
    }
  })

  return newObj
}
