import { Icon } from '@/src/shared/ui/Icon'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'

export type IEditModelLinkProps = {
  id: string
}

const EditModelLink = ({ id }: IEditModelLinkProps) => {
  return (
    <LocalizedLink
      className="flex size-8 items-center justify-center rounded-md text-supportive-fourth transition-colors hover:bg-surface-secondary active:bg-transparent"
      href={{ pathname: '/models/[id]/edit', params: { id } }}
    >
      <Icon name="outlined/edit" className="text-xs" />
    </LocalizedLink>
  )
}

export default EditModelLink
