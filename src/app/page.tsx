import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import Banners from '@/components/home/banners'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <div className="grid grid-cols-6 gap-4 w-full">
        <Banners />

        <aside className="bg-white/70 p-4 backdrop-blur-sm rounded-xl">
          aside
        </aside>
      </div>

      <Footer />
    </div>
  )
}
