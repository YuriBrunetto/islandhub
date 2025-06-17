import { Star } from 'lucide-react'
import ProgressBar from '../common/progress-bar'

export default function Reviews() {
  return (
    <div className="mt-2 flex flex-col lg:flex-row">
      <div className="">
        <span className="font-semibold text-2xl flex items-center">
          <Star size={22} className="mr-1" />
          4.7
        </span>
        <p className="text-zinc-500 text-sm">
          out of <span className="font-semibold">213 reviews</span>
        </p>
      </div>
      <div className="mt-2 lg:mt-0 lg:ml-8 space-y-2">
        <ProgressBar label="5" percentage="50" />
        <ProgressBar label="4" percentage="20" />
        <ProgressBar label="3" percentage="15" />
        <ProgressBar label="2" percentage="5" />
        <ProgressBar label="1" percentage="10" />
      </div>
    </div>
  )
}
