import { Scissors, Sparkles, Image as ImageIcon } from 'lucide-react'
import BeforeAfterSlider from './BeforeAfterSlider'

const cards = [
  {
    badge: 'BG Remover',
    badgeColor: 'text-text-secondary bg-white/5 border border-white/10',
    description: 'Removed background instantly with zero edge artifacts.',
    icon: Scissors
  },
  {
    badge: 'Photo Restore', 
    badgeColor: 'text-text-secondary bg-white/5 border border-white/10',
    description: 'Restored faded colors and sharp details to a 50-year-old photo.',
    icon: Sparkles
  },
  {
    badge: 'HD Enhance',
    badgeColor: 'text-text-secondary bg-white/5 border border-white/10',
    description: 'Upscaled blurry 480p image to crisp 4K quality.',
    icon: ImageIcon
  }
]

export default function BeforeAfterSection() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-[42px] max-sm:text-[32px] font-bold text-white leading-tight tracking-tight">
            See the difference.
          </h2>
          <p className="text-text-secondary text-[17px] mt-4 max-w-[500px] mx-auto font-medium">
            Drag the slider to see how PixlAI perfects every detail in real-time.
          </p>
        </div>

        {/* Main Interactive Slider */}
        <div className="max-w-[850px] mx-auto mb-16 md:mb-24 reveal">
          <BeforeAfterSlider 
            beforeImage="/placeholder-before.jpg" 
            afterImage="/placeholder-after.jpg" 
            aspectRatio="aspect-[4/5] sm:aspect-[16/9]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-surface border border-white/5 rounded-3xl overflow-hidden reveal group hover:-translate-y-1 transition-transform duration-500 shadow-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image Area */}
              <div className="h-[240px] relative flex overflow-hidden bg-background">
                <div className="flex-1 border-r border-white/5 flex items-center justify-center opacity-40">
                  <card.icon size={48} className="text-white/20" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <card.icon size={48} className="text-primary/20" />
                </div>
                
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-white text-[9px] px-2.5 py-1.5 rounded-full font-bold uppercase tracking-wider border border-white/5">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md text-white text-[9px] px-2.5 py-1.5 rounded-full font-bold uppercase tracking-wider border border-primary/20">
                  After
                </div>
              </div>

              {/* Card Bottom */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-background border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  </div>
                  <div className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase ${card.badgeColor}`}>
                    {card.badge}
                  </div>
                </div>
                <p className="text-text-secondary text-[15px] font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
