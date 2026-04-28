'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { joinWaitlist } from '@/lib/api'

export default function EarlyAccessSection() {
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
    const result = await joinWaitlist(email, 'cta')
    
    if (result.success) {
      setIsSuccess(true)
      setEmail('')
    } else {
      setError(result.error || 'Something went wrong')
    }
    setIsLoading(false)
  }

  return (
    <section id="early-access" className="py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary opacity-5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-surface to-card border border-[rgba(124,92,252,0.25)] rounded-[32px] p-8 sm:p-12 md:p-16 shadow-glow text-center reveal">
          <div className="text-[48px] mb-6">✨</div>
          
          <h2 className="text-[42px] max-sm:text-[28px] font-bold text-white leading-tight">
            Get <span className="gradient-text">20 Free Credits</span> on Launch Day
          </h2>
          
          <p className="text-text-secondary text-[17px] mt-4 max-w-[500px] mx-auto leading-relaxed">
            Be among the first to experience PixlAI and get a head start with free credits.
          </p>

          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 flex-wrap">
            {["⚡ 20 Free Credits", "🔒 No Credit Card", "📱 Android First"].map((benefit) => (
              <div key={benefit} className="glass rounded-pill px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-[13px] text-text-secondary font-bold border border-[rgba(255,255,255,0.08)] whitespace-nowrap shadow-sm">
                {benefit}
              </div>
            ))}
          </div>

          <div className="mt-12">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-[500px] mx-auto">
                <Input
                  placeholder="Enter your email address"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.12)] focus:border-primary text-white rounded-[16px] px-6 text-[16px] sm:w-[280px] h-[64px]"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary-hover text-white font-bold text-[16px] rounded-[16px] px-8 shadow-button hover:scale-[1.02] transition-transform h-[64px]"
                >
                  {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                  Claim My Free Credits →
                </Button>
              </form>
            ) : (
              <div className="glass rounded-[24px] p-10 border-primary/20">
                <h3 className="text-[24px] font-bold text-white mb-3">🎉 You're on the list!</h3>
                <p className="text-text-secondary">We've reserved your 20 free credits. Check your inbox on launch day!</p>
              </div>
            )}
            {error && <p className="text-red-400 text-sm mt-4 font-medium">{error}</p>}
          </div>

          <p className="mt-8 text-[12px] text-text-tertiary font-medium">
            No spam. Unsubscribe anytime. Credits valid for 30 days after launch.
          </p>
        </div>
      </div>
    </section>
  )
}
