// import { userAgents } from 'lighthouse/core/config/constants'

const userAgents = {
  mobile:
    'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36',
  desktop:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
}

const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : null

const mobileDevices = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
]

export const isLightHouse = userAgents.desktop === userAgent || userAgents.mobile === userAgent

export const isMobile = mobileDevices.some((toMatchItem) => {
  return userAgent?.match(toMatchItem)
})
