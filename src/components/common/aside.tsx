import Colors from '../home/colors'
import ButtonArrow from './button-arrow'

export default function AsideComponent() {
  return (
    <aside className="col-span-1 space-y-4">
      <div className="w-full bg-white/70 p-4 backdrop-blur-sm rounded-xl">
        <p className="font-medium">Popular Colors</p>
        <Colors />
      </div>

      <div className="bg-white/70 p-4 backdrop-blur-sm rounded-xl">
        <p className="font-medium leading-5">
          New Bud
          <br />X Gen
        </p>
        <ButtonArrow />
      </div>

      <div className="bg-white/70 p-4 backdrop-blur-sm rounded-xl">
        <p className="font-medium leading-5">
          Light Grey Surface
          <br />
          Headphone
        </p>
        <span className="text-sm text-zinc-500">Boosted with bass</span>
        <ButtonArrow />
      </div>
    </aside>
  )
}
