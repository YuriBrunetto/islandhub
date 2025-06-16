import Image from 'next/image'
import ActionButton from '../common/action-button'

function SocialButton() {
  return (
    <a href="#" title="TikTok" className="w-8 h-8 rounded-full bg-white"></a>
  )
}

export default function Banners() {
  return (
    <section className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl">
      <div className="flex justify-between">
        <div className="flex flex-col items-start max-w-[50%]">
          <span className="text-[12px] rounded-full px-4 py-2 bg-white/70 shadow">
            🎛️ Music is classic
          </span>

          <div className="mt-4">
            <div className="">
              <h2 className="text-4xl font-semibold max-w-[80%]">
                Sequoia Inspiring Musico.
              </h2>
              <div className="flex items-center space-x-4 mt-4">
                <span className="font-bold text-3xl">01</span>
                <span className="text-sm opacity-10">-------------</span>
                <div className="pr-4">
                  <p className="font-medium">Clear sounds</p>
                  <p className="text-sm text-zinc-500">
                    Making your dream music come true, stay with Sequoia Sounds!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ActionButton
            isLink
            href="/products/1"
            title="Buy now"
            icon="arrow"
            className="mt-4"
          />

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

        <div>
          <Image
            src="/airpods.jpg"
            alt="Product title"
            width={400}
            height={400}
            className="rounded-2xl overflow-hidden mr-4"
          />
        </div>
      </div>
    </section>
  )
}
