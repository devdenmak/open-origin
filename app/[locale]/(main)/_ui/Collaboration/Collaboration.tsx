import { useTranslations } from 'next-intl'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { Image } from '@/src/shared/ui/Image'

import ImageChain from '../../_images/chain.png'
import ImageChainDark from '../../_images/chain-dark.png'
import ImageLiFi from '../../_images/lifi.png'
import ImageLiFiDark from '../../_images/lifi-dark.png'
import ImageMiranda from '../../_images/mirada.png'
import ImageMirandaDark from '../../_images/mirada-dark.png'
import ImagePoolz from '../../_images/poolz.png'
import ImagePoolzDark from '../../_images/poolz-dark.png'
import ImageSolana from '../../_images/solana.png'
import ImageSolanaDark from '../../_images/solana-dark.png'

export type ICollaborationProps = {
  className?: string
}

const Collaboration = ({ className }: ICollaborationProps) => {
  const t = useTranslations('MainPage.collaboration')

  return (
    <div className="container">
      <section className={cn(className)}>
        <h4 className="mb-5 text-center font-main text-base font-medium text-text-secondary">
          {t('title')}
        </h4>

        <div className="grid grid-cols-5 gap-2.5 max-lg:grid-cols-3 max-md:grid-cols-2">
          <div className="flex min-h-28 items-center justify-center rounded-2xl bg-gradient-solid-to-r p-4">
            <Image
              disableLoader
              className="dark:hidden"
              src={ImageMiranda}
              width={73}
              height={73}
              alt="Mirada"
            />
            <Image
              disableLoader
              className="hidden dark:flex"
              src={ImageMirandaDark}
              width={73}
              height={73}
              alt="Mirada Dark"
            />
          </div>

          <div className="flex min-h-28 items-center justify-center rounded-2xl bg-gradient-solid-to-r p-4">
            <Image
              disableLoader
              className="dark:hidden"
              src={ImagePoolz}
              width={116}
              height={47}
              alt="Poolz"
            />
            <Image
              disableLoader
              className="hidden dark:flex"
              src={ImagePoolzDark}
              width={116}
              height={47}
              alt="Poolz Dark"
            />
          </div>

          <div className="flex min-h-28 items-center justify-center rounded-2xl bg-gradient-solid-to-r p-4">
            <Image
              disableLoader
              className="dark:hidden"
              src={ImageLiFi}
              width={97}
              height={39}
              alt="Li Fi"
            />
            <Image
              disableLoader
              className="hidden dark:flex"
              src={ImageLiFiDark}
              width={97}
              height={39}
              alt="Li Fi Dark"
            />
          </div>

          <div className="flex min-h-28 items-center justify-center rounded-2xl bg-gradient-solid-to-r p-4">
            <Image
              disableLoader
              className="dark:hidden"
              src={ImageSolana}
              width={47}
              height={55}
              alt="Solana"
            />
            <Image
              disableLoader
              className="hidden dark:flex"
              src={ImageSolanaDark}
              width={47}
              height={55}
              alt="Solana-Dark"
            />
          </div>

          <div className="flex min-h-28 items-center justify-center rounded-2xl bg-gradient-solid-to-r p-4">
            <Image
              disableLoader
              className="dark:hidden"
              src={ImageChain}
              width={155}
              height={49}
              alt="Chain GPT"
            />
            <Image
              disableLoader
              className="hidden dark:flex"
              src={ImageChainDark}
              width={155}
              height={49}
              alt="Chain GPT Dark"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collaboration
