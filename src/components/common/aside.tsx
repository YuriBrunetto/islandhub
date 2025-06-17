import * as motion from 'motion/react-client'
import Image from 'next/image'
import Colors from '../home/colors'
import ButtonArrow from './button-arrow'

export default function AsideComponent() {
  return (
    <motion.aside
      initial={{ opacity: 0, translateX: '10%' }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        duration: 0.4,
        scale: {
          type: 'spring',
          visualDuration: 0.3,
          bounce: 0.5
        }
      }}
      className="col-span-1 space-y-4 md:grid lg:block md:grid-cols-3 lg:grid-cols-1 md:gap-4 md:items-start"
    >
      <div className="w-full bg-white/70 p-4 backdrop-blur-sm rounded-xl">
        <p className="font-medium">Popular Colors</p>
        <Colors />
      </div>

      <div className="bg-white/70 p-4 backdrop-blur-sm rounded-xl relative overflow-hidden">
        <Image
          src="/ads/ad-2.png"
          alt="New Bud X Gen"
          fill
          className="object-cover -z-10"
        />

        <p className="font-medium leading-5">
          New Bud
          <br />X Gen
        </p>

        <ButtonArrow className="mt-4" />
      </div>

      <div className="bg-white/70 p-4 backdrop-blur-sm rounded-xl overflow-hidden">
        <Image
          src="/ads/ad-3.png"
          alt="Light Grey Surface Headphone"
          fill
          className="object-cover -z-10"
        />

        <p className="font-medium leading-5 text-white text-shadow">
          Light Grey Surface
          <br />
          Headphone
        </p>
        <span className="text-sm text-white/60">Boosted with bass</span>

        <ButtonArrow className="mt-32" />
      </div>
    </motion.aside>
  )
}
