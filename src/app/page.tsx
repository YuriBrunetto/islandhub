import AsideComponent from '@/components/common/aside'
import Banners from '@/components/home/banners'
import Faces from '@/components/home/faces'
import { Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      <div className="col-span-4">
        <Banners />

        <div className="grid grid-cols-7 gap-4 mt-4">
          <div className="col-span-2">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl">
              <div className="relative">
                <p className="font-medium">More Products</p>
                <span className="text-sm">460+ items</span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="aspect-square w-full rounded-md bg-black/10"></div>
                <div className="aspect-square w-full rounded-md bg-black/10"></div>
                <div className="aspect-square w-full rounded-md bg-black/10"></div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl">
              <div className="relative flex items-center justify-center">
                <div className="size-30 bg-linear-to-b from-sky-600 to-sky-400 rounded-full flex flex-col items-center justify-center">
                  <span className="font-medium text-white text-2xl">5m+</span>
                  <span className="text-sm font-light text-white/50">
                    Downloads
                  </span>
                </div>

                <Faces className="absolute -top-4" />
                <div className="bg-white rounded-full h-8 px-4 py-1 absolute -bottom-2 text-sm flex items-center font-medium">
                  <Star size={20} className="mr-1 text-yellow-400" />
                  4.6 reviews
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl">
              <span className="rounded-full px-2 py-1 border border-solid border-black/20 text-sm">
                ❤️‍🔥 Popular
              </span>
              <p className="font-medium mt-3 leading-5 max-w-[40%]">
                Listening Has Been Released
              </p>
              <Faces className="mt-2" />
            </div>
          </div>
        </div>
      </div>

      <AsideComponent />
    </div>
  )
}
