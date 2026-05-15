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
    <section id="features" className="py-32 bg-background border-t border-white/5">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-surface border border-white/[0.07] rounded-3xl p-9 reveal hover:bg-card hover:-translate-y-1.5 transition-all duration-300 cursor-default group flex flex-col"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-background border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm mb-8">
                <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="text-[20px] font-bold text-white tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-[15px] text-text-secondary leading-[1.7] font-medium flex-1">
                {feature.description}
              </p>
              <div className="inline-flex mt-8 rounded-full px-4 py-1.5 bg-background border border-white/5 text-[11px] text-text-tertiary font-bold uppercase tracking-widest w-fit">
                {feature.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
