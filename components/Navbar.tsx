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
      setScrolled(window.scrollY > 80)
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
      scrolled ? "bg-[rgba(13,11,30,0.95)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="PixlAI Logo" width={32} height={32} className="rounded-lg shadow-sm" />
          <span className="font-bold text-[22px] tracking-tight">
            <span>Pixl</span>
            <span className="text-primary">AI</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-text-secondary hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-text-secondary hover:text-white transition-colors">How it works</a>
          <Button 
            onClick={scrollToEarlyAccess}
            className="bg-primary hover:bg-primary-hover rounded-pill text-sm font-semibold px-6"
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
        "md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] transition-all duration-300 ease-in-out overflow-hidden",
        mobileOpen ? "max-h-[400px] opacity-100 py-8 px-6" : "max-h-0 opacity-0 py-0 px-6"
      )}>
        <div className="flex flex-col gap-6">
          <a href="#features" onClick={() => setMobileOpen(false)} className="text-lg font-medium text-text-secondary hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-lg font-medium text-text-secondary hover:text-white transition-colors">How it works</a>
          <Button 
            onClick={scrollToEarlyAccess}
            className="bg-primary hover:bg-primary-hover rounded-pill text-base font-bold w-full py-7"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  )
}
