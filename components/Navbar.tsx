'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToEarlyAccess = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="PixlAI Logo" width={30} height={30} className="rounded-lg" />
          <span className="font-bold text-[19px] tracking-tight text-white">
            PixlAI
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[13px] font-semibold text-text-secondary hover:text-white transition-colors uppercase tracking-wider">Features</a>
          <a href="#how-it-works" className="text-[13px] font-semibold text-text-secondary hover:text-white transition-colors uppercase tracking-wider">How it works</a>
          <Button 
            onClick={scrollToEarlyAccess}
            className="bg-primary hover:bg-primary-hover text-white rounded-full text-[13px] font-bold px-6 h-10 transition-all"
          >
            Get Early Access
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out overflow-hidden",
        mobileOpen ? "max-h-[400px] opacity-100 py-8 px-6" : "max-h-0 opacity-0 py-0 px-6"
      )}>
        <div className="flex flex-col gap-6">
          <a href="#features" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-text-secondary hover:text-white transition-colors uppercase tracking-wider">Features</a>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-text-secondary hover:text-white transition-colors uppercase tracking-wider">How it works</a>
          <Button 
            onClick={scrollToEarlyAccess}
            className="bg-primary hover:bg-primary-hover text-white rounded-full text-base font-bold w-full py-6"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  )
}
