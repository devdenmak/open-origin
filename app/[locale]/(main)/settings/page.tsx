import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { ProfileForm } from '@/src/features/account/update-account/ui/ProfileForm'
import { CardContent, CardHeader, CardTitle } from '@/src/shared/ui/Card'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('SettingsPage')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function SettingsPage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('SettingsPage')

  return (
    <>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>

      <CardContent>
        <ProfileForm />
      </CardContent>
    </>
  )
}
