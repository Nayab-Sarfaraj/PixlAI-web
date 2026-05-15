const stats = [
  { value: '847+', label: 'People Waiting' },
  { value: '4', label: 'AI Tools' },
  { value: '< 30s', label: 'Processing Time' },
]

export default function StatsBar() {
  return (
    <div className="w-full bg-surface border-y border-white/5 py-12">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-wrap justify-center gap-12 sm:gap-24 md:gap-32">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group cursor-default reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="text-[40px] md:text-[44px] font-extrabold text-white tracking-tighter leading-none mb-3">
              {stat.value}
            </div>
            <div className="text-[12px] text-text-tertiary font-bold uppercase tracking-[0.2em] group-hover:text-text-secondary transition-colors duration-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
