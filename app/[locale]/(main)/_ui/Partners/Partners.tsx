import { cn } from '@/src/shared/lib/tailwindUtils'
import { Image } from '@/src/shared/ui/Image'

import ImageAws from '../../_images/aws.png'
import ImageCloud from '../../_images/google-cloud.png'
import ImageMicrosoft from '../../_images/microsoft.png'
import ImageNvidia from '../../_images/nvidia.png'

export type IPartnersProps = {
  className?: string
}

const Partners = ({ className }: IPartnersProps) => {
  return (
    <div className="container">
      <section className={cn(className)}>
        <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2">
          <div className="flex min-h-32 items-center justify-center rounded-2xl bg-surface-third p-1 max-lg:min-h-24 max-md:rounded-lg">
            <Image
              disableLoader
              className="h-[79px] w-[246px] max-lg:h-[50px] max-lg:w-[158px]"
              priority
              fillParent
              src={ImageCloud}
              width={246}
              height={79}
              alt="Google cloud"
            />
          </div>

          <div className="flex min-h-32 items-center justify-center rounded-2xl bg-surface-third p-1 max-lg:min-h-24 max-md:rounded-lg">
            <Image
              disableLoader
              className="h-[114px] w-[184px] max-lg:h-[72px] max-lg:w-[118px]"
              priority
              fillParent
              src={ImageNvidia}
              width={184}
              height={114}
              alt="Nvidia"
            />
          </div>

          <div className="flex min-h-32 items-center justify-center rounded-2xl bg-surface-third p-1 max-lg:min-h-24 max-md:rounded-lg">
            <Image
              disableLoader
              className="h-[47px] w-[238px] max-lg:h-[31px] max-lg:w-[153px]"
              priority
              fillParent
              src={ImageAws}
              width={238}
              height={47}
              alt="Aws activate"
            />
          </div>

          <div className="flex min-h-32 items-center justify-center rounded-2xl bg-surface-third p-1 max-lg:min-h-24 max-md:rounded-lg">
            <Image
              disableLoader
              className="h-[86px] w-[191px] max-lg:h-[55px] max-lg:w-[123px]"
              priority
              fillParent
              src={ImageMicrosoft}
              width={191}
              height={86}
              alt="Microsoft"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners
