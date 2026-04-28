const steps = [
  { num: '1', title: 'Choose Your Photo',
    desc: 'Select any photo from your gallery' },
  { num: '2', title: 'Pick an AI Tool',
    desc: 'Choose from 4 powerful AI enhancements' },
  { num: '3', title: 'Download Result',
    desc: 'Get your enhanced photo in under 30 seconds' },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex glass rounded-pill px-3 py-1 text-[12px] font-medium text-accent mb-4 uppercase tracking-widest">
            🚀 Simple as 1-2-3
          </div>
          <h2 className="text-[42px] max-sm:text-[28px] font-bold text-white leading-tight">
            Process Any Photo in Seconds
          </h2>
        </div>

        <div className="relative mt-20 max-w-3xl mx-auto px-4 sm:px-0">
          {/* Dashed Connector Line - Desktop (Horizontal) */}
          <div className="absolute top-6 left-[15%] right-[15%] h-[1px] border-t border-dashed border-[rgba(124,92,252,0.4)] hidden md:block" />
          
          {/* Dashed Connector Line - Mobile (Vertical) */}
          <div className="absolute left-10 sm:left-1/2 top-6 bottom-6 w-[1px] border-l border-dashed border-[rgba(124,92,252,0.4)] md:hidden" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0 flex-1 reveal"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgba(13,11,30,1)] border-2 border-primary text-primary font-bold text-lg flex items-center justify-center shadow-[0_0_20px_rgba(124,92,252,0.4)] md:mx-auto">
                  {step.num}
                </div>
                
                {/* Text Content */}
                <div className="text-left md:text-center mt-0 md:mt-6">
                  <h3 className="font-bold text-white text-[18px] md:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-[14px] mt-2 md:mt-3 leading-relaxed max-w-[240px] md:max-w-none">
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
