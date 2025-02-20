import { useTranslations } from 'next-intl'

import { cn } from '@/src/shared/lib/tailwindUtils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/shared/ui/Accordion'
import { Title } from '@/src/shared/ui/Title'

import { faq } from '../../_config'

export type IFAQProps = {
  className?: string
}

const FAQ = ({ className }: IFAQProps) => {
  const t = useTranslations('MainPage.faq')

  return (
    <div className="container">
      <section className={cn(className)}>
        <Title className="mb-10 font-headings text-text-secondary max-md:mb-6 max-md:px-5">
          {t('title')}
        </Title>

        <Accordion
          className="grid grid-cols-2 items-start gap-4 max-lg:grid-cols-1 max-lg:gap-2"
          type="multiple"
        >
          {faq.map((item) => (
            <AccordionItem key={item} value={item}>
              <AccordionTrigger>{t(`questions.${item}.question`)}</AccordionTrigger>

              <AccordionContent>{t(`questions.${item}.answer`)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

export default FAQ
