import { cn } from '../lib/utils'
import Image from 'next/image'

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
      <span className="font-bold text-lg">LeadSeeder</span>
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