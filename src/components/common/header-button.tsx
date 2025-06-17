import { Heart, ShoppingCart } from 'lucide-react'

type Props = {
  name: 'cart' | 'favorites'
  count: number
}

export default function HeaderButton({ name, count }: Props) {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'cart':
        return <ShoppingCart size={18} />
      case 'favorites':
        return <Heart size={20} />
      default:
        return null
    }
  }

  return (
    <button
      type="button"
      className="bg-white size-12 rounded-full flex flex-grow items-center shrink-0 basis-0 justify-center cursor-pointer transition-all duration-100 ease-in-out shadow relative hover:shadow-lg"
    >
      {renderIcon(name)}
      <span className="absolute -right-1 -top-1 font-bold w-5 h-5 rounded-full bg-zinc-800 text-white text-[12px] flex items-center justify-center">
        {count}
      </span>
    </button>
  )
}
