import { Star } from 'lucide-react'

export default function Rating() {
  return (
    <span className="flex shadow items-center font-semibold bg-white/70 py-2 px-4 text-sm rounded-full text-zinc-700">
      <Star className="mr-1 text-yellow-500" size={16} />
      4.7
    </span>
  )
}
