import { Heart, ShoppingBasket } from 'lucide-react'

type Props = {
  name: 'cart' | 'favorites'
}

export default function HeaderButton({ name }: Props) {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'cart':
        return <ShoppingBasket size={20} />
      case 'favorites':
        return <Heart size={20} />
      default:
        return null
    }
  }

  return (
    <button
      type="button"
      className="bg-white size-12 rounded-full flex flex-grow items-center shrink-0 basis-0 justify-center cursor-pointer transition-all duration-100 ease-in-out shadow hover:shadow-lg"
    >
      {renderIcon(name)}
    </button>
  )
}
