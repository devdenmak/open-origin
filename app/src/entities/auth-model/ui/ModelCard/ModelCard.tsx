import { ModelsMy200DataItem } from '@/src/shared/api/model'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { ModelCard as ModelItem } from '@/src/shared/ui/ModelCard'

export type IModelCardProps = {
  idx: number
  model: ModelsMy200DataItem
  slotEdit: React.ReactNode
  slotDelete: React.ReactNode
  slotLike: React.ReactNode
}

const ModelCard = ({ model, idx, slotEdit, slotDelete, slotLike }: IModelCardProps) => {
  const { emoji, updated_at: updated, tag, name: title, uuid: id } = model

  return (
    <ModelItem
      idx={idx}
      model={{ emoji, updated, tag: tag.name, title, id }}
      slotEdit={slotEdit}
      slotDelete={slotDelete}
      slotDetails={
        <LocalizedLink
          className="absolute inset-0 z-1"
          href={{ pathname: '/models/[id]', params: { id } }}
        />
      }
      slotLike={slotLike}
    />
  )
}

export default ModelCard
