export type IThemeFormProps = {
  className?: string
}

const ThemeForm = ({ className = '' }: IThemeFormProps) => {
  return <section className={className}>ThemeForm</section>
}

export default ThemeForm
