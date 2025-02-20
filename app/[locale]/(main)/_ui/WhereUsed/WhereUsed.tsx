import { useTranslations } from 'next-intl'

import { cn } from '@/src/shared/lib/tailwindUtils'
import { Image } from '@/src/shared/ui/Image'

import ImageBitcoin from '../../_images/bitcoin.png'
import ImageBitcoinDark from '../../_images/bitcoin-dark.png'
import ImageBloomberg from '../../_images/bloomberg.png'
import ImageBloombergDark from '../../_images/bloomberg-dark.png'
import ImageCoin from '../../_images/cointelegraph.svg'
import ImageCoinDark from '../../_images/cointelegraph-dark.svg'
import ImageDecrypt from '../../_images/decrypt.png'
import ImageDecryptDark from '../../_images/decrypt-dark.png'
import ImageForbes from '../../_images/forbes.png'
import ImageForbesDark from '../../_images/forbes-dark.png'
import ImageYahoo from '../../_images/yahoo.svg'
import ImageYahooDark from '../../_images/yahoo-dark.svg'

export type IWhereUsedProps = {
  className?: string
}

const WhereUsed = ({ className }: IWhereUsedProps) => {
  const t = useTranslations('MainPage.whereused')

  return (
    <div className="container">
      <section className={cn(className)}>
        <h4 className="mb-7 text-center font-headings text-xl font-semibold text-text-third">
          {t('title')}
        </h4>

        <div className="grid grid-cols-6 gap-3 max-lg:grid-cols-3 max-md:grid-cols-3 max-md:gap-1.5">
          <div className="flex min-h-32 items-center justify-center rounded-2xl bg-surface-primary p-3 max-md:min-h-20 max-md:rounded-xl">
            <Image
              disableLoader
              className="dark:hidden max-md:max-w-[86px]"
              width={157}
              height={107}
              src={ImageYahoo}
              alt="Yahoo-logo"
            />
            <Image
              disableLoader
              className="hidden dark:flex max-md:max-w-[66px]"
              width={120}
              height={44}
              src={ImageYahooDark}
              alt="Yahoo-logo-dark"
            />
          </div>

          <div className="flex min-h-32 items-center justify-center rounded-2xl bg-surface-primary p-3 max-md:min-h-20 max-md:rounded-xl">
            <Image
              disableLoader
              className="dark:hidden max-md:max-w-[100px]"
              width={181}
              height={74}
              src={ImageCoin}
              alt="Cointelegraph-logo"
            />
            <Image
              disableLoader
              className="hidden dark:flex max-md:max-w-[100px]"
              width={181}
              height={74}
              src={ImageCoinDark}
              alt="Cointelegraph-logo-dark"
            />
          </div>

          <div className="flex min-h-32 items-center justify-center rounded-2xl bg-surface-primary p-3 max-md:min-h-20 max-md:rounded-xl">
            <Image
              disableLoader
              className="dark:hidden max-md:max-w-[74px]"
              width={134}
              height={45}
              src={ImageDecrypt}
              alt="Decrypt-logo"
            />
            <Image
              disableLoader
              className="hidden dark:flex max-md:max-w-[74px]"
              width={134}
              height={45}
              src={ImageDecryptDark}
              alt="Decrypt-logo-dark"
            />
          </div>

          <div className="flex min-h-32 items-center justify-center rounded-2xl bg-surface-primary p-3 max-md:min-h-20 max-md:rounded-xl">
            <Image
              disableLoader
              className="dark:hidden max-md:max-w-[76px]"
              width={137}
              height={29}
              src={ImageBitcoin}
              alt="Bitcoin-logo"
            />
            <Image
              disableLoader
              className="hidden dark:flex max-md:max-w-[76px]"
              width={137}
              height={29}
              src={ImageBitcoinDark}
              alt="Bitcoin-logo-dark"
            />
          </div>

          <div className="flex min-h-32 items-center justify-center rounded-2xl bg-surface-primary p-3 max-md:min-h-20 max-md:rounded-xl">
            <Image
              disableLoader
              className="dark:hidden max-md:max-w-[77px]"
              width={140}
              height={40}
              src={ImageForbes}
              alt="Forbes-logo"
            />
            <Image
              disableLoader
              className="hidden dark:flex max-md:max-w-[77px]"
              width={140}
              height={40}
              src={ImageForbesDark}
              alt="Forbes-logo-dark"
            />
          </div>

          <div className="flex min-h-32 items-center justify-center rounded-2xl bg-surface-primary p-3 max-md:min-h-20 max-md:rounded-xl">
            <Image
              disableLoader
              className="dark:hidden max-md:max-w-[83px]"
              width={151}
              height={29}
              src={ImageBloomberg}
              alt="Bloomberg-logo"
            />
            <Image
              disableLoader
              className="hidden dark:flex max-md:max-w-[83px]"
              width={151}
              height={29}
              src={ImageBloombergDark}
              alt="Bloomberg-logo-dark"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhereUsed
