// import { getTranslations } from 'next-intl/server'

import { modelTagsList } from '@/src/shared/api/fetch'

import { Navigation } from '../Navigation'
// import { PremiumSwitch } from '../PremiumSwitch'

export type ICategoriesProps = {
  className?: string
}

const CategoriesServer = async ({ className = '' }: ICategoriesProps) => {
  // const t = await getTranslations('ModelsPage')

  const { data: categories } = await modelTagsList()

  return (
    <div className={className}>
      <nav className="mb-6 space-y-6">
        {categories.map(({ id, tags, name }) => (
          <div key={id}>
            <h3 className="mb-2.5 px-2.5 font-headings text-xs font-semibold text-button-eighth">
              {name}
            </h3>

            <Navigation tags={tags} />
          </div>
        ))}
      </nav>

      {/* <PremiumSwitch label={t('premiumOnly')} /> */}
    </div>
  )
}

export default CategoriesServer
