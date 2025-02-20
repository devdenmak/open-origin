'use client'

import { useTheme } from 'next-themes'

import { ITheme } from '@/src/app/model'
import { NoSSSR } from '@/src/shared/ui/NoSSSR'

export const TokenBg = () => {
  const { resolvedTheme: theme } = useTheme()
  const currentTheme = theme as ITheme

  return (
    <NoSSSR>
      <svg
        className="absolute inset-x-0 bottom-0 -z-1"
        viewBox="0 0 1920 347"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M515.085 346.925H439.119C428.325 346.925 417.859 343.209 409.482 336.402L365.973 301.051C357.603 294.25 347.148 290.535 336.362 290.529L0 290.335V47.0791C0 21.1217 21.0426 0.0791016 47 0.0791016H1873.14C1899.1 0.0791016 1920.14 21.1217 1920.14 47.0791V290.335L617.853 290.536C607.061 290.538 596.598 294.253 588.223 301.058L544.723 336.402C536.345 343.209 525.879 346.925 515.085 346.925Z"
          fill="url(#paint0_linear_199_1866)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_199_1866"
            x1="1662.47"
            y1="346.925"
            x2="1662.47"
            y2="0.0791016"
            gradientUnits="userSpaceOnUse"
          >
            {currentTheme === 'light' ? (
              <>
                <stop offset="0.05" stopColor="white" />
                <stop offset="0.885" stopColor="white" stopOpacity="0" />
              </>
            ) : (
              <>
                <stop stopColor="#2C323A" />
                <stop offset="1" stopColor="#2C323A" stopOpacity="0" />
              </>
            )}
          </linearGradient>
        </defs>
      </svg>
    </NoSSSR>
  )
}
