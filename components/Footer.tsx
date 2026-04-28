import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-[rgba(255,255,255,0.06)] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="PixlAI Logo" width={32} height={32} className="rounded-lg shadow-sm" />
              <div className="font-bold text-[22px] tracking-tight">
                <span>Pixl</span>
                <span className="text-primary">AI</span>
              </div>
            </div>
            <p className="text-[14px] text-text-tertiary leading-relaxed max-w-[240px]">
              The professional AI Photo Studio in your pocket. Coming soon to Android.
            </p>
            
            <div className="flex gap-4 mt-8">
              {/* TikTok */}
              <a href="#" className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.12)] transition-colors text-white">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.12)] transition-colors text-white">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.12)] transition-colors text-white">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-text-tertiary font-bold mb-8">Product</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#features" className="text-[14px] text-text-secondary hover:text-white transition-colors font-medium">Features</a></li>
              <li><a href="#how-it-works" className="text-[14px] text-text-secondary hover:text-white transition-colors font-medium">How It Works</a></li>
              <li><a href="#early-access" className="text-[14px] text-text-secondary hover:text-white transition-colors font-medium">Download App</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-text-tertiary font-bold mb-8">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-white transition-colors font-medium">Privacy Policy</a></li>
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-white transition-colors font-medium">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[rgba(255,255,255,0.04)] text-center">
          <p className="text-[12px] text-text-tertiary font-medium">
            © 2025 PixlAI. All rights reserved. Made with ✨ for photographers.
          </p>
        </div>
      </div>
      {/* 
        <!-- Add real TikTok profile link --> 
        <!-- Add real Instagram profile link -->
        <!-- Add real YouTube profile link -->
        <!-- Add real Privacy Policy page link -->
        <!-- Add real Terms of Service page link -->
      */}
    </footer>
  )
}
