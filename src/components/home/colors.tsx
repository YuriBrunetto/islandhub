'use client'

import { useState } from 'react'
import colors from '@/data/colors.json'

type Color = {
  name: string
  background: string
}

export default function Colors() {
  const [uiColors] = useState<Color[]>(colors)

  return (
    <div className="grid grid-cols-5 gap-2 mt-2">
      {uiColors.map(color => (
        <button
          key={color.name}
          type="button"
          className="bg-white rounded-full size-8 cursor-pointer shadow-md flex items-center justify-center transition-all hover:shadow-lg"
        >
          <span
            className={`size-5 rounded-full bg-linear-to-b ${color.background}`}
          ></span>
        </button>
      ))}
    </div>
  )
}
