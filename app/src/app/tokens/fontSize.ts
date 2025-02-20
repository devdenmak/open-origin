import { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config'

type IFontSize = ResolvableTo<
  KeyValuePair<
    string,
    [
      fontSize: string,
      configuration: Partial<{
        lineHeight: string
        letterSpacing: string
        fontWeight: string | number
      }>,
    ]
  >
>

export const fontSize: IFontSize = {
  '0': ['0', { lineHeight: '0', letterSpacing: '0' }],
  '4xs': ['0.5rem', { lineHeight: '0.80rem', letterSpacing: '-0.00494rem' }],
  '2xs': ['0.75rem', { lineHeight: '1.05rem', letterSpacing: '-0.015rem' }],
  xs: ['0.875rem', { lineHeight: '1.225rem', letterSpacing: '-0.0175rem' }],
  sm: ['0.9375rem', { lineHeight: '1.3125rem', letterSpacing: '-0.0175rem' }],
  base: ['1rem', { lineHeight: '1.4rem', letterSpacing: '-0.02rem' }],
  lg: ['1.125rem', { lineHeight: '1.575rem', letterSpacing: '-0.0225rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025rem' }],
  '2xl': ['1.5rem', { lineHeight: '1.65rem', letterSpacing: '-0.03rem' }],
  '3xl': ['1.625rem', { lineHeight: '1.7875rem', letterSpacing: '-0.0325rem' }],
  '4xl': ['1.75rem', { lineHeight: '1.925rem', letterSpacing: '-0.035rem' }],
  '5xl': ['2rem', { lineHeight: '2.2rem', letterSpacing: '-0.04rem' }],
  '6xl': ['3rem', { lineHeight: '3.3rem', letterSpacing: '-0.06rem' }],
}
