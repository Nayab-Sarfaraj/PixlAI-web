'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Zap, Lock, Smartphone } from 'lucide-react'
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

  const benefits = [
    { icon: Zap, text: '20 Free Credits' },
    { icon: Lock, text: 'No Credit Card' },
    { icon: Smartphone, text: 'Android First' },
  ]

  return (
    <section id="early-access" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="bg-surface border border-white/5 rounded-[40px] p-8 sm:p-16 md:p-20 text-center reveal shadow-card overflow-hidden relative">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-button group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <h2 className="text-[48px] max-md:text-[40px] max-sm:text-[32px] font-extrabold text-white leading-tight tracking-tight">
              Ready to upgrade <br className="hidden sm:block"/> your photos?
            </h2>
            
            <p className="text-text-secondary text-[18px] mt-6 max-w-[500px] mx-auto leading-relaxed font-medium">
              Join the waitlist today and get 20 free credits when we launch. No credit card required.
            </p>

            <div className="flex justify-center gap-3 mt-10 flex-wrap">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="bg-white/5 rounded-full px-5 py-2 text-[12px] text-text-tertiary font-bold border border-white/5 uppercase tracking-wide flex items-center gap-2">
                  <benefit.icon className="w-3.5 h-3.5 text-text-tertiary" strokeWidth={3} />
                  {benefit.text}
                </div>
              ))}
            </div>

            <div className="mt-12">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-[520px] mx-auto">
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background border-white/10 focus:border-primary text-white rounded-xl px-6 text-[16px] sm:w-[300px] h-[60px] focus:ring-0"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-primary hover:bg-primary-hover text-white font-bold text-[16px] rounded-xl px-10 transition-all h-[60px] shadow-button"
                  >
                    {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
                    Get Early Access
                  </Button>
                </form>
              ) : (
                <div className="bg-background rounded-[24px] p-10 border border-white/5 inline-block shadow-sm">
                  <h3 className="text-[22px] font-bold text-white mb-3 tracking-tight">You&apos;re on the list!</h3>
                  <p className="text-text-secondary text-[15px] font-medium">Check your inbox on launch day for your 20 free credits.</p>
                </div>
              )}
              {error && <p className="text-red-400 text-sm mt-4 font-medium">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
