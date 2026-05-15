'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  aspectRatio?: string
}

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  aspectRatio = "aspect-[4/3]" 
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = (x / rect.width) * 100
    setSliderPos(percent)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div 
      ref={containerRef}
      className={`relative ${aspectRatio} w-full rounded-[32px] overflow-hidden cursor-ew-resize select-none border border-white/10 group shadow-2xl`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={onMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={onTouchMove}
    >
      {/* After Image (Bottom Layer) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      />

      {/* Before Image (Top Layer, Clipped) */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-none"
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
        }}
      />

      {/* Divider Line */}
      <div 
        className="absolute inset-y-0 z-10 w-0.5 bg-white/80 group-hover:bg-primary transition-colors duration-300"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-primary group-hover:scale-110 transition-transform duration-300">
          <div className="flex gap-0.5">
            <ChevronLeft size={16} className="text-primary -mr-0.5" />
            <ChevronRight size={16} className="text-primary -ml-0.5" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 z-20 px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white text-[11px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Before
      </div>
      <div className="absolute top-6 right-6 z-20 px-4 py-1.5 bg-primary/40 backdrop-blur-md rounded-full border border-primary/30 text-white text-[11px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        After
      </div>
    </div>
  )
}
