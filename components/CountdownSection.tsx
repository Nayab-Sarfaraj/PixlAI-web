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
    // <!-- Update countdown target date in CountdownSection.tsx -->

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
    <section className="py-20 bg-gradient-to-br from-surface to-card border-y border-[rgba(124,92,252,0.2)] text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-[28px] font-bold text-white mb-10 tracking-tight">
          {isLaunched ? "🎉 We're Live! Download Now" : "Launching on Google Play in"}
        </h2>

        {isLaunched ? (
          <Button className="bg-primary hover:bg-primary-hover rounded-pill px-10 py-7 text-lg font-bold shadow-button">
            Download PixlAI Now
          </Button>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {timeLeft && Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="bg-[rgba(0,0,0,0.3)] border border-[rgba(124,92,252,0.2)] rounded-[20px] px-4 sm:px-6 py-6 min-w-[80px] sm:min-w-[100px] shadow-lg">
                <div className="text-[32px] sm:text-[48px] font-bold text-primary leading-none">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-[11px] text-text-tertiary uppercase tracking-[0.2em] mt-3 font-bold">
                  {label}
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLaunched && (
          <p className="text-text-secondary text-[15px] mt-10 font-medium">
            Join the waitlist to get notified the moment we launch
          </p>
        )}
      </div>
    </section>
  )
}
