import { Scissors, User, RotateCcw, Image as ImageIcon } from 'lucide-react'

const features = [
  {
    icon: Scissors,
    title: 'BG Remover',
    description: 'Remove any background instantly. Perfect for product shots, portraits, and professional profiles.',
    tag: '1 Credit'
  },
  {
    icon: User,
    title: 'Face Enhance', 
    description: 'Sharpen and perfect every face. AI reconstructs facial details for stunning portrait results.',
    tag: '1 Credit'
  },
  {
    icon: RotateCcw,
    title: 'Photo Restore',
    description: 'Bring old damaged photos back to life. Perfect for old, scanned, faded, and family archive photos.',
    tag: '1 Credit'
  },
  {
    icon: ImageIcon,
    title: 'HD Enhance',
    description: 'Upscale any photo to 4K quality. Best for blurry, small, low-res, and compressed photos.',
    tag: '1 Credit'
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal">
          <div className="max-w-[600px]">
            <h2 className="text-[42px] max-sm:text-[32px] font-bold text-white leading-tight tracking-tight">
              Powerful tools. <br className="hidden sm:block"/>
              Simple interface.
            </h2>
          </div>
          <p className="text-text-secondary text-[17px] mt-6 md:mt-0 max-w-[340px] font-medium leading-relaxed">
            Everything you need to perfect your images, built for mobile first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-surface border border-white/5 rounded-3xl p-8 reveal hover:bg-card hover:-translate-y-1 transition-all duration-300 cursor-default group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-background border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-[19px] font-bold text-white mt-8 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[15px] text-text-secondary leading-relaxed mt-3 font-medium">
                {feature.description}
              </p>
              <div className="inline-flex mt-8 rounded-full px-4 py-1.5 bg-background border border-white/5 text-[11px] text-text-tertiary font-bold uppercase tracking-widest">
                {feature.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
