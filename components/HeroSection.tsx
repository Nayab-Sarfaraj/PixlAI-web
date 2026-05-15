'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Download } from 'lucide-react'
import { joinWaitlist } from '@/lib/api'

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const result = await joinWaitlist(email, 'hero')
    if (result.success) {
      setIsSuccess(true)
      setEmail('')
    }
    setIsLoading(false)
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Subtle Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10 text-center">
        {/* Premium Badge */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 w-fit mx-auto reveal">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[12px] font-bold text-text-tertiary uppercase tracking-wider">Launching Soon on Google Play</span>
        </div>

        <h1 className="text-[56px] md:text-[86px] font-extrabold text-white leading-[1.05] tracking-tight mb-8 reveal">
          Your photos, <br/> perfected instantly.
        </h1>
        
        <p className="text-text-secondary text-[18px] md:text-[20px] max-w-[600px] mx-auto mb-12 leading-relaxed font-medium reveal" style={{ transitionDelay: '0.1s' }}>
          Restore old photos, remove backgrounds, and upscale to 4K. 
          Professional AI editing tools, simplified for everyone.
        </p>

        {/* Action Area */}
        <div className="max-w-[500px] mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
              <Input
                placeholder="Enter your email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 focus:border-primary text-white rounded-xl px-6 h-14 text-[16px] focus:ring-0"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-primary hover:bg-primary-hover text-white font-bold text-[16px] rounded-xl px-8 h-14 transition-all shadow-button whitespace-nowrap"
              >
                {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                Join Waitlist
              </Button>
            </form>
          ) : (
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
              <h3 className="text-white font-bold text-lg mb-1">You&apos;re on the list! ⚡</h3>
              <p className="text-text-secondary text-sm font-medium">We&apos;ll notify you the second we launch.</p>
            </div>
          )}

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <a 
              href="#" 
              className="group relative flex items-center gap-3 bg-black border border-white/10 hover:border-primary/50 rounded-2xl px-6 py-3 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current">
                  <path d="M3 20.5V3.5C3 2.26 4.35 1.49 5.4 2.13L19.5 10.63C20.5 11.23 20.5 12.77 19.5 13.37L5.4 21.87C4.35 22.51 3 21.74 3 20.5Z" />
                </svg>
              </div>
              <div className="text-left relative z-10">
                <div className="text-[10px] text-text-tertiary font-bold uppercase tracking-tight leading-none mb-1">Get it on</div>
                <div className="text-[17px] text-white font-bold leading-none tracking-tight">Google Play</div>
              </div>
            </a>

            <div className="flex items-center gap-2 text-text-tertiary text-[13px] font-bold uppercase tracking-widest px-4 py-2 border border-white/5 rounded-full bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              App Store Coming Soon
            </div>
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="mt-20 relative max-w-[850px] mx-auto reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="relative z-10 bg-white/5 border border-white/10 rounded-[40px] p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
            <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-inner bg-background">
              <img 
                src="/app-preview.png" // We'll need to move the generated image here or reference it
                alt="PixlAI App Interface" 
                className="w-full h-auto block"
              />
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px] animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px] animate-pulse" />
        </div>
      </div>
    </section>
  )
}
