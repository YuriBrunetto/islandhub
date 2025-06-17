'use client'

import { ArrowUpRight, Heart, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'

function ButtonContent({ title, icon }: { title: string; icon: string }) {
  const renderIcon = () => {
    switch (icon) {
      case 'cart':
        return <ShoppingCartIcon color="#ffffff" size={18} />
      case 'heart':
        return <Heart color="#ffffff" size={18} />
      default:
        return <ArrowUpRight color="#ffffff" size={20} />
    }
  }

  return (
    <>
      {title}
      <span className="w-8 h-8 rounded-full bg-zinc-800 absolute flex items-center justify-center right-[4px] bottom-[4px]">
        {renderIcon()}
      </span>
    </>
  )
}

type ActionButtonProps = {
  className?: string
  title: string
  icon: string
  isLink?: boolean
  href?: string
  handleAction?: () => void
}

export default function ActionButton({
  className = '',
  isLink = false,
  href,
  title,
  icon,
  handleAction
}: ActionButtonProps) {
  return isLink ? (
    <Link
      href={href!}
      title={title}
      className={`relative h-10 pl-4 pr-11 py-2 bg-lime-200 flex items-center break-normal rounded-full font-medium transition-all shadow hover:shadow-md ${className}`}
    >
      <ButtonContent title={title} icon={icon} />
    </Link>
  ) : (
    <button
      type="button"
      title={title}
      className={`relative cursor-pointer h-10 pl-4 pr-11 py-2 bg-lime-200 flex items-center break-normal rounded-full font-medium transition-all shadow hover:shadow-md ${className}`}
      onClick={handleAction}
    >
      <ButtonContent title={title} icon={icon} />
    </button>
  )
}
