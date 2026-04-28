'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Play } from 'lucide-react'
import { joinWaitlist } from '@/lib/api'

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email')
      return
    }

    setIsLoading(true)
    const result = await joinWaitlist(email, 'hero')
    
    if (result.success) {
      setIsSuccess(true)
      setEmail('')
    } else {
      setError(result.error || 'Something went wrong')
    }
    setIsLoading(false)
  }

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center bg-background pt-24 pb-16">
      {/* Orbs */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-primary opacity-15 rounded-full blur-[120px] animate-orb pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#FF6B9D] opacity-10 rounded-full blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 text-center max-w-[700px] mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex glass rounded-pill px-4 py-2 text-[13px] text-accent border border-[rgba(124,92,252,0.3)] mb-6 reveal">
          🚀 Launching Soon on Google Play
        </div>

        <h1 className="text-[64px] max-md:text-[48px] max-sm:text-[32px] font-bold leading-[1.1] tracking-[-1px] mb-4 reveal">
          Make Every Photo Look <span className="gradient-text">Professional</span> with AI
        </h1>

        <p className="text-[18px] max-sm:text-base text-text-secondary max-w-[500px] mx-auto mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
          Restore old photos, remove backgrounds, and upscale images to 4K in seconds with PixlAI.
        </p>

        {/* Email Form */}
        {!isSuccess ? (
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[560px] mx-auto">
              <Input
                placeholder="Enter your email address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.12)] focus:border-primary text-white rounded-[14px] px-5 text-[15px] w-full sm:w-[320px] h-[64px]"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-gradient-to-r from-primary to-[#9B6BFC] text-white font-semibold text-[15px] rounded-[14px] px-8 shadow-button hover:scale-[1.02] transition-transform whitespace-nowrap w-full sm:w-auto h-[64px]"
              >
                {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                Get Early Access → Free 20 Credits
              </Button>
            </form>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </div>
        ) : (
          <div className="glass rounded-[20px] p-8 max-w-[450px] mx-auto">
            <h3 className="text-[20px] font-bold text-white mb-2">🎉 You&apos;re on the list!</h3>
            <p className="text-text-secondary text-sm">
              We&apos;ll notify you the moment PixlAI launches with your 20 free credits ready.
            </p>
          </div>
        )}

        <div className="mt-4 flex flex-col items-center reveal" style={{ transitionDelay: '0.3s' }}>
          <p className="text-text-tertiary text-[13px] mb-4">👥 847 people already on the waitlist</p>
          
          <a 
            href="#" 
            target="_blank" 
            className="inline-flex items-center gap-3 bg-card border border-[rgba(255,255,255,0.12)] rounded-[12px] px-5 py-3 hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414C16.896 15.3414 16.39 15.8474 16.39 16.4744C16.39 17.1014 16.896 17.6074 17.523 17.6074C18.15 17.6074 18.656 17.1014 18.656 16.4744C18.656 15.8474 18.15 15.3414 17.523 15.3414ZM6.477 15.3414C5.85 15.3414 5.344 15.8474 5.344 16.4744C5.344 17.1014 5.85 17.6074 6.477 17.6074C7.104 17.6074 7.61 17.1014 7.61 16.4744C7.61 15.8474 7.104 15.3414 6.477 15.3414ZM12 1.99941C6.486 1.99941 2 6.48541 2 11.9994C2 17.5134 6.486 21.9994 12 21.9994C17.514 21.9994 22 17.5134 22 11.9994C22 6.48541 17.514 1.99941 12 1.99941ZM12 20.2184C7.461 20.2184 3.781 16.5384 3.781 11.9994C3.781 7.46041 7.461 3.78041 12 3.78041C16.539 3.78041 20.219 7.46041 20.219 11.9994C20.219 16.5384 16.539 20.2184 12 20.2184ZM12 6.45241C10.42 6.45241 9.141 7.73141 9.141 9.31141V14.6874C9.141 16.2674 10.42 17.5464 12 17.5464C13.58 17.5464 14.859 16.2674 14.859 14.6874V9.31141C14.859 7.73141 13.58 6.45241 12 6.45241ZM12 15.7654C11.404 15.7654 10.922 15.2834 10.922 14.6874V9.31141C10.922 8.71541 11.404 8.23341 12 8.23341C12.596 8.23341 13.078 8.71541 13.078 9.31141V14.6874C13.078 15.2834 12.596 15.7654 12 15.7654Z" />
              {/* Note: Simplified Google Play icon placeholder */}
            </svg>
            <span className="text-white text-[14px] font-medium">Pre-register on Google Play</span>
          </a>
          {/* <!-- Update with real Play Store link --> */}
        </div>

        {/* Demo Video */}
        <div className="mt-16 max-w-[600px] mx-auto bg-surface border border-[rgba(124,92,252,0.2)] rounded-card aspect-video flex flex-col items-center justify-center shadow-glow reveal" style={{ transitionDelay: '0.4s' }}>
          <div className="w-[72px] h-[72px] rounded-full bg-[rgba(124,92,252,0.3)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <Play className="text-white fill-current ml-1" size={28} />
          </div>
          <p className="text-text-secondary text-[14px] mt-4">Watch Demo — 30 seconds</p>
          {/* <!-- Replace with actual demo video embed --> */}
        </div>
      </div>
    </section>
  )
}
