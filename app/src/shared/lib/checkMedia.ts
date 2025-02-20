const isString = (url: string | null) => typeof url === 'string'

export const checkImage = (url: string | null) => {
  if (!isString(url)) return false

  return url?.match(/\.(jpg|jpeg|png|gif|webp|apng|avif|jfif|pjpeg|pjp)$/i)
}

export const checkVideo = (url: string | null) => {
  if (!isString(url)) return false

  return url?.match(/\.(mp4|webm|mov|wmv|avi|flv|mkv|mts)$/i)
}
