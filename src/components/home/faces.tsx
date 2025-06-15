type FaceProps = {
  className?: string
}

export default function Faces({ className = '' }: FaceProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="size-10 -mr-2 rounded-full border-2 border-solid border-white bg-zinc-100"></div>
      <div className="size-10 rounded-full border-2 border-solid border-white bg-zinc-100 z-10"></div>
      <div className="size-10 -ml-2 rounded-full border-2 border-solid border-white bg-zinc-100"></div>
    </div>
  )
}
