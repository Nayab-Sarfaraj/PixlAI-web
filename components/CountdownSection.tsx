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
    <section className="py-24 bg-surface border-y border-white/5 text-center relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <h2 className="text-[32px] md:text-[36px] font-bold text-white mb-12 tracking-tight reveal">
          {isLaunched ? "We're Live. Download Now." : "Launching on Google Play in."}
        </h2>

        {isLaunched ? (
          <Button className="bg-primary hover:bg-primary-hover text-white rounded-xl px-12 py-7 text-lg font-bold shadow-button transition-all">
            Download PixlAI Now
          </Button>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 reveal">
            {timeLeft && Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="bg-background border border-white/10 rounded-[32px] px-6 sm:px-10 py-10 min-w-[110px] sm:min-w-[140px] shadow-sm">
                <div className="text-[44px] sm:text-[52px] font-extrabold text-white leading-none tracking-tighter">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-[11px] text-text-tertiary uppercase tracking-[0.2em] mt-5 font-bold">
                  {label}
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLaunched && (
          <p className="text-text-secondary text-[16px] mt-12 font-medium reveal">
            Join the waitlist to get notified the moment we launch.
          </p>
        )}
      </div>
    </section>
  )
}
