const steps = [
  { num: '01', title: 'Upload Photo',
    desc: 'Select any image from your gallery.' },
  { num: '02', title: 'Choose Tool',
    desc: 'Remove BG, enhance, or restore in one tap.' },
  { num: '03', title: 'Save & Share',
    desc: 'Export your 4K image in seconds.' },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="text-[42px] max-sm:text-[32px] font-bold text-white leading-tight tracking-tight">
            Three steps to perfection.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector Line - Desktop */}
          <div className="absolute top-10 left-[15%] right-[15%] h-[1px] bg-white/5 hidden md:block" />
          
          {/* Connector Line - Mobile */}
          <div className="absolute left-[39px] sm:left-1/2 top-10 bottom-10 w-[1px] bg-white/5 md:hidden" />

          <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-8 md:gap-0 flex-1 reveal group"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-background border border-white/10 text-white font-bold text-lg flex items-center justify-center md:mx-auto group-hover:border-primary transition-colors duration-300">
                  {step.num}
                </div>
                
                {/* Text Content */}
                <div className="text-left md:text-center mt-2 md:mt-8">
                  <h3 className="font-bold text-white text-[19px] tracking-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-[15px] mt-3 leading-relaxed md:max-w-[200px] mx-auto font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
