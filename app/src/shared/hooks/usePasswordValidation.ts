import { useTranslations } from 'next-intl'
import { z } from 'zod'

const passwordValidator = {
  minLength: (value: string) => value.length >= 8,
  digit: (value: string) => /.*[0-9].*/.test(value),
  specialChar: (value: string) => /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(value),
  uppercase: (value: string) => /[A-Z]/.test(value),
}

export const usePasswordValidation = () => {
  const t = useTranslations('Common.fields.validation')

  const zodSchema = z
    .string()
    .refine(passwordValidator.minLength, t('leastCharacters'))
    .refine(passwordValidator.digit, t('leastDigit'))
    .refine(passwordValidator.specialChar, t('leastSpecialSymbols'))
    .refine(passwordValidator.uppercase, t('leastUppercase'))

  return {
    zodSchema,
    passwordValidator,
  }
}
