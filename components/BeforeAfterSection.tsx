const cards = [
  {
    badge: '✂️ BG Remover',
    badgeColor: 'text-accent bg-[rgba(124,92,252,0.2)]',
    description: 'Removed background in 8 seconds'
  },
  {
    badge: '✨ Photo Restore', 
    badgeColor: 'text-[#FF6B9D] bg-[rgba(255,107,157,0.2)]',
    description: '50-year-old photo fully restored'
  },
  {
    badge: '⬆️ HD Enhance',
    badgeColor: 'text-[#4ADE80] bg-[rgba(74,222,128,0.2)]',
    description: 'Upscaled from 480p to 4K quality'
  }
]

export default function BeforeAfterSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex glass rounded-pill px-3 py-1 text-[12px] font-medium text-accent mb-4">
            ✨ See The Magic
          </div>
          <h2 className="text-[42px] max-sm:text-[28px] font-bold text-white leading-tight">
            Results That Speak For Themselves
          </h2>
          <p className="text-text-secondary text-base mt-3">
            Real photos. Real results. No filters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-surface border border-[rgba(255,255,255,0.08)] rounded-card overflow-hidden shadow-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image Area */}
              <div className="h-[200px] sm:h-[240px] relative flex">
                <div className="flex-1 bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2e] flex items-center justify-center">
                  <span className="text-text-tertiary text-xs font-medium uppercase tracking-wider">📷 Original</span>
                </div>
                <div className="flex-1 bg-gradient-to-br from-[#4a3a8e] to-primary flex items-center justify-center">
                  <span className="text-white text-xs font-medium uppercase tracking-wider">✨ Enhanced</span>
                </div>
                
                <div className="absolute top-3 left-3 bg-[rgba(0,0,0,0.6)] text-white text-[10px] px-2 py-1 rounded-md font-bold uppercase">
                  Before
                </div>
                <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.6)] text-white text-[10px] px-2 py-1 rounded-md font-bold uppercase">
                  After
                </div>
                
                <div className="absolute inset-y-0 left-1/2 w-[2px] bg-white opacity-40 shadow-xl" />
              </div>

              {/* Card Bottom */}
              <div className="p-5">
                <div className={`inline-flex rounded-pill px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${card.badgeColor}`}>
                  {card.badge}
                </div>
                <p className="text-text-secondary text-[14px] mt-3 font-medium">
                  {card.description}
                </p>
              </div>
              {/* <!-- Replace gradient placeholders with real before/after images --> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
