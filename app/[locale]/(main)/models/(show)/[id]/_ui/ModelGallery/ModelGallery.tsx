'use client'

import { useModel } from '@/src/entities/model/hooks/useModel'
import { ModelsShow200 } from '@/src/shared/api/model'
import { cn } from '@/src/shared/lib/tailwindUtils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/shared/ui/Carousel'
import { Image } from '@/src/shared/ui/Image'

export type IModelGalleryProps = {
  className?: string
  model: ModelsShow200
}

const ModelGallery = ({ className, model }: IModelGalleryProps) => {
  const { data } = useModel(model)

  const _model = (data?.data ?? {}) as ModelsShow200['data']

  const hasGallery = _model.gallery && _model.gallery.length

  if (!hasGallery) {
    return
  }

  return (
    <section className={cn(className)}>
      <Carousel>
        <CarouselPrevious />

        <CarouselContent>
          {_model.gallery.map((slide, key) => (
            <CarouselItem key={slide.uuid} className="basis-1/4 max-xl:basis-1/3 max-md:basis-1/2">
              <Image
                className="overflow-hidden rounded-md"
                fillParent
                alt={`slide-${key}`}
                src={slide.url}
                width={350}
                height={219}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default ModelGallery
