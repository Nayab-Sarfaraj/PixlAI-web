'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [isLaunched, setIsLaunched] = useState(false)

  useEffect(() => {
    // Target date: 14 days from now
    const target = new Date()
    target.setDate(target.getDate() + 14)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const diff = target.getTime() - now

      if (diff <= 0) {
        setIsLaunched(true)
        clearInterval(timer)
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 md:py-32 bg-surface/50 border-y border-white/5 text-center relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <h2 className="text-[28px] md:text-[40px] font-bold text-white mb-10 md:mb-16 tracking-tight reveal leading-[1.1]">
          {isLaunched ? "We're Live. Download Now." : "Launching on Google Play in"}
        </h2>

        {isLaunched ? (
          <Button className="bg-primary hover:bg-primary-hover text-white rounded-2xl px-12 h-16 text-lg font-bold shadow-button transition-all">
            Download PixlAI Now
          </Button>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-[800px] mx-auto reveal">
            {timeLeft && Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center transition-transform hover:scale-[1.02] duration-300">
                <div className="text-[36px] sm:text-[48px] md:text-[56px] font-extrabold text-white leading-none tracking-tighter">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-[11px] text-text-tertiary uppercase tracking-[0.2em] mt-3 sm:mt-4 font-bold">
                  {label}
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLaunched && (
          <p className="text-text-secondary text-[14px] sm:text-[16px] mt-10 md:mt-16 font-medium reveal opacity-70">
            Join the waitlist to get notified the moment we launch.
          </p>
        )}
      </div>
    </section>
  )
}
