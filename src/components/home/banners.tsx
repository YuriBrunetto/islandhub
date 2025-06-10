import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

function SocialButton() {
  return (
    <a href="#" title="TikTok" className="w-8 h-8 rounded-full bg-white"></a>
  )
}

export default function Banners() {
  return (
    <section className="bg-white/70 backdrop-blur-sm col-span-5 p-8 rounded-2xl">
      {/* banner 1 */}
      <div className="flex flex-col items-start">
        <span className="text-[12px] rounded-full px-4 py-2 bg-white/70 shadow">
          🎛️ Music is classic
        </span>

        <div className="mt-4 max-w-[60%]">
          <div className="flex items-center mt-2 space-x-2">
            <h2 className="text-4xl font-semibold">Sequoia Inspiring Musico</h2>
            <span className="font-bold text-3xl">01</span>
            <span className="text-sm opacity-10">----------</span>
            <div className="">
              <p className="font-medium">Clear sounds</p>
              <p className="text-sm text-zinc-500">
                Making your dream music come true, stay with Sequoia Sounds!
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/products"
          title="View All Products"
          className="relative h-10 pl-4 pr-12 py-2 bg-lime-200 flex items-center break-normal mt-4 rounded-full font-medium text-sm transition-all shadow hover:shadow-md"
        >
          View All Products
          <span className="w-8 h-8 rounded-full bg-zinc-800 absolute flex items-center justify-center right-[4px] bottom-[4px]">
            <ArrowUpRight color="#ffffff" size={20} />
          </span>
        </Link>

        <div className="flex items-center mt-12">
          <span className="text-sm">Follow us on:</span>

          <div className="flex items-center space-x-1 ml-2">
            <SocialButton />
            <SocialButton />
            <SocialButton />
            <SocialButton />
          </div>
        </div>
      </div>
    </section>
  )
}
