'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'
import { PointerHighlight } from './ui/pointer-highlight'

const menuItems = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Faq', href: '/faq' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Book a call', href: '/book-a-call' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()
    
    // Properly typed ref
    const navRef = React.useRef<HTMLElement>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Properly typed click outside detection
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node) && menuState) {
                setMenuState(false)
            }
        }

        if (menuState) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('touchstart', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleClickOutside)
        }
    }, [menuState])

    // Close menu when clicking on menu items (mobile)
    const handleMenuItemClick = () => {
        setMenuState(false)
    }

    const isActive = (href: string) => {
        return pathname === href
    }

    return (
        <header>
            <nav
                ref={navRef} // Add ref to the nav element
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <span>
                                    <Logo />
                                </span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "text-muted-foreground hover:text-accent-foreground block duration-150 relative group",
                                                isActive(item.href) && "text-accent-foreground font-medium"
                                            )}>
                                            <span className="relative inline-block">
                                                {item.name}
                                                {!isActive(item.href) && (
                                                    <span className="absolute left-0 bottom-0 h-0.5 bg-current w-0 transition-all duration-300 group-hover:w-full"></span>
                                                )}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                onClick={handleMenuItemClick} // Close menu on click
                                                className={cn(
                                                    "text-muted-foreground hover:text-accent-foreground block duration-150 relative group",
                                                    isActive(item.href) && "text-accent-foreground font-medium"
                                                )}>
                                                <span className="relative inline-block">
                                                    {item.name}
                                                    {!isActive(item.href) && (
                                                        <span className="absolute left-0 bottom-0 h-0.5 bg-current w-0 transition-all duration-300 group-hover:w-full"></span>
                                                    )}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#" onClick={handleMenuItemClick}>
                                        <span>Chrome Extension</span>
                                    </Link>
                                </Button>
                                
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#" onClick={handleMenuItemClick}>
                                        <span>Get Started</span>
                                    </Link>
                                </Button>

                                <ModeToggle/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
