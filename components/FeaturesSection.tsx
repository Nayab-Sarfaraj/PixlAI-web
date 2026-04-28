const features = [
  {
    icon: '✂️',
    title: 'BG Remover',
    description: 'Remove any background instantly. Perfect for product shots, portraits, and professional profiles.',
    tag: '1 Credit'
  },
  {
    icon: '👤',
    title: 'Face Enhance', 
    description: 'Sharpen and perfect every face. AI reconstructs facial details for stunning portrait results.',
    tag: '1 Credit'
  },
  {
    icon: '🕰️',
    title: 'Photo Restore',
    description: 'Bring old damaged photos back to life. Perfect for old, scanned, faded, and family archive photos.',
    tag: '1 Credit'
  },
  {
    icon: '⬆️',
    title: 'HD Enhance',
    description: 'Upscale any photo to 4K quality. Best for blurry, small, low-res, and compressed photos.',
    tag: '1 Credit'
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex glass rounded-pill px-3 py-1 text-[12px] font-medium text-accent mb-4 uppercase tracking-widest">
            ⚡ Powered by AI
          </div>
          <h2 className="text-[42px] max-sm:text-[28px] font-bold text-white leading-tight">
            Everything Your Photos Need
          </h2>
          <p className="text-text-secondary text-base mt-3">
            Four powerful AI tools in one app
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-surface border border-[rgba(255,255,255,0.08)] rounded-card p-8 reveal hover:border-[rgba(124,92,252,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-default group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-[52px] h-[52px] rounded-full bg-[rgba(124,92,252,0.15)] border border-[rgba(124,92,252,0.3)] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-[20px] font-bold text-white mt-5">
                {feature.title}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed mt-3">
                {feature.description}
              </p>
              <div className="inline-flex mt-6 rounded-pill px-3 py-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-[11px] text-text-tertiary font-bold uppercase tracking-wider">
                {feature.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
