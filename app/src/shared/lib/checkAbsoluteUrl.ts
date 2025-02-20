export const checkAbsoluteUrl = (src: string) => new RegExp('^(?:[a-z+]+:)?//', 'i').test(src)
