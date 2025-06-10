import Image from 'next/image'
import HeaderButton from './header-button'
import Searchbar from './searchbar'

export default function Header() {
  return (
    <header className="w-full p-2 flex items-center justify-between rounded-full max-w-4xl h-16 bg-white/30 backdrop-blur-sm">
      <div className="flex items-center">
        <a
          href="#"
          className="h-12 mr-1.5 font-light p-1 text-lg bg-black/5 rounded-full py-2 px-4 hover:bg-black/10"
          title="nitec."
        >
          nitec.
        </a>

        <Searchbar />
      </div>

      <div className="flex items-center space-x-1.5">
        <HeaderButton name="cart" />
        <HeaderButton name="favorites" />
        <button
          type="button"
          className="bg-white h-12 pl-5 pr-14 rounded-full cursor-pointer font-medium flex items-center gap-2 shadow text-[14px] relative"
        >
          Ryman Alex
          <span className="w-10 h-10 absolute right-2 border-2 border-solid border-zinc-200 rounded-full bg-zinc-100 overflow-hidden">
            <Image src="/profile.png" alt="Ryman Alex" width={40} height={40} />
          </span>
        </button>
      </div>
    </header>
  )
}
