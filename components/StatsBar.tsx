const stats = [
  { value: '847+', label: 'People Waiting' },
  { value: '4', label: 'AI Tools' },
  { value: '< 30s', label: 'Processing Time' },
]

export default function StatsBar() {
  return (
    <div className="w-full bg-surface border-y border-[rgba(255,255,255,0.06)] py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 sm:gap-16 md:gap-24">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-[32px] font-bold text-primary tracking-tight leading-none">
              {stat.value}
            </div>
            <div className="text-[13px] text-text-secondary mt-2 font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
