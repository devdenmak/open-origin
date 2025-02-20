import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { NextIntlProvider } from '@/src/app/providers/nextIntlProvider'
import { ChangePasswordForm } from '@/src/features/account/change-password/ui'
import { DeleteAccountDialog } from '@/src/features/account/delete-account/ui'
import { AccountForm } from '@/src/features/account/update-account/ui/AccountForm'
import { CardContent, CardHeader, CardTitle } from '@/src/shared/ui/Card'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('SettingsAccount')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function SettingsAccountPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('SettingsAccount')

  return (
    <NextIntlProvider messagesCategories={['SettingsAccount']}>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-9 max-lg:space-y-6">
        <AccountForm />
        <ChangePasswordForm />
        <DeleteAccountDialog />
      </CardContent>
    </NextIntlProvider>
  )
}
