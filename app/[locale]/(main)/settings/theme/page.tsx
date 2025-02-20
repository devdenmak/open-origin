import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { ILang } from '@/src/app/model'
import { CardHeader, CardTitle } from '@/src/shared/ui/Card'

type IProps = {
  params: { locale: ILang }
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  unstable_setRequestLocale(locale)

  const t = await getTranslations('SettingsTheme')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function SettingsThemePage({ params: { locale } }: IProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <CardHeader>
        <CardTitle>Theme</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      {/* <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button>Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </>
  )
}
