/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { ReactNode, useEffect } from 'react'

import { usePathname, useRouter } from '@/src/app/config/i18n'

import { afterLoginRedirectTo, publicPages, unauthorizedRedirectTo } from '../../config'
import { useAuthUser } from '../../hooks/useAuthUser'

export type IAuthWrapperProps = {
  children?: ReactNode
}

const AuthWrapper = ({ children }: IAuthWrapperProps) => {
  const { isAuth, isLoading } = useAuthUser()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return

    const isPublicPage = publicPages.includes(pathname)

    if (isAuth) {
      if (isPublicPage) {
        router.replace(afterLoginRedirectTo)
      }
    } else {
      if (!isPublicPage) {
        router.replace(unauthorizedRedirectTo)
      }
    }
  }, [isAuth, pathname, isLoading])

  return <>{children}</>
}

export default AuthWrapper
