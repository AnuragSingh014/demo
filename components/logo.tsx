import { cn } from '../lib/utils'
import Image from 'next/image'
import { PointerHighlight } from './ui/pointer-highlight'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative h-8 w-8">
        <Image
          src="/images/seed.png"
          alt="Company Logo"
          fill
          className="object-contain"
        />
      </div>
      <PointerHighlight
                      rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 rounded-md text-center"
                      pointerClassName="text-yellow-500">
      <span className="font-bold text-lg px-2 py-2 text-center relative z-10">LeadSeeder</span>
      </PointerHighlight>
    </div>
  )
}

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative size-5", className)}>
      <Image
        src="/images/seed.png"
        alt="Icon"
        fill
        className="object-contain"
      />
    </div>
  )
}