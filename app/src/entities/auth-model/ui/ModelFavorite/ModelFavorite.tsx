import { ModelsMy200DataItem } from '@/src/shared/api/model'
import { LocalizedLink } from '@/src/shared/ui/LocalizedLink'
import { ModelCard } from '@/src/shared/ui/ModelCard'

export type IModelFavoriteProps = {
  idx: number
  model: ModelsMy200DataItem
  slotEdit: React.ReactNode
  slotDelete: React.ReactNode
  slotLike: React.ReactNode
}

const ModelFavorite = ({ idx, model, slotLike }: IModelFavoriteProps) => {
  const { emoji, updated_at: updated, tag, name: title, uuid: id, author } = model

  return (
    <ModelCard
      idx={idx}
      model={{ emoji, updated, tag: tag.name, title, id, userName: author.username }}
      slotLike={slotLike}
      slotDetails={
        <LocalizedLink
          className="absolute inset-0 z-1"
          href={{ pathname: '/models/[id]', params: { id } }}
        />
      }
    />
  )
}

export default ModelFavorite
