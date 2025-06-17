import Image from 'next/image'

type FaceProps = {
  className?: string
}

export default function Faces({ className = '' }: FaceProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="size-10 -mr-2 rounded-full border-2 border-solid border-white bg-zinc-100 overflow-hidden">
        <Image
          src="/faces/face-1.png"
          alt="Person name"
          width={40}
          height={40}
        />
      </div>
      <div className="size-10 rounded-full border-2 border-solid border-white bg-zinc-100 z-10 overflow-hidden">
        <Image
          src="/faces/face-2.jpeg"
          alt="Person name"
          width={40}
          height={40}
        />
      </div>
      <div className="size-10 -ml-2 rounded-full border-2 border-solid border-white bg-zinc-100 overflow-hidden">
        <Image
          src="/faces/face-3.jpg"
          alt="Person name"
          width={40}
          height={40}
        />
      </div>
    </div>
  )
}
