import { ArrowUpRight } from 'lucide-react'

type ButtonArrowProps = {
  className?: string
}

export default function ButtonArrow({ className = '' }: ButtonArrowProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center size-10 rounded-full bg-white cursor-pointer ${className}`}
    >
      <ArrowUpRight className="text-zinxc-900" size={20} />
    </button>
  )
}
