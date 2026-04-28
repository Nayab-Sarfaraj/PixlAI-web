'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CountdownSection from '@/components/CountdownSection'
import EarlyAccessSection from '@/components/EarlyAccessSection'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <BeforeAfterSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CountdownSection />
      <EarlyAccessSection />
      <Footer />
    </main>
  )
}
