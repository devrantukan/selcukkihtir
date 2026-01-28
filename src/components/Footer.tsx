'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#080024cc] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold font-serif text-white">
              Op. Dr. Selçuk <span className="text-white">Kihtir</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Genel Cerrahi ve Meme Cerrahisi alanında uluslararası standartlarda, bilimsel ve hasta odaklı tedavi yaklaşımları.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 font-serif uppercase tracking-wider text-white">Hızlı Erişim</h4>
            <ul className="space-y-4 text-slate-300 font-medium text-sm">
              <li><Link href="/doktorunuz" className="hover:text-white transition-colors">• Doktorunuz</Link></li>
              <li><Link href="/meme-hastaliklari" className="hover:text-white transition-colors">• Meme Hastalıkları</Link></li>
              <li><Link href="/genel-cerrahi" className="hover:text-white transition-colors">• Genel Cerrahi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-serif uppercase tracking-wider text-white">Branşlar</h4>
            <ul className="space-y-4 text-slate-300 font-medium text-sm">
              <li><Link href="/genel-cerrahi/safra-kesesi-hastaliklari" className="hover:text-white transition-colors">• Safra Kesesi</Link></li>
              <li><Link href="/genel-cerrahi/tiroid-hastaliklari" className="hover:text-white transition-colors">• Tiroid Cerrahisi</Link></li>
              <li><Link href="/genel-cerrahi/fitiklar" className="hover:text-white transition-colors">• Fıtık Ameliyatları</Link></li>
              <li><Link href="/genel-cerrahi/laparoskopik-cerrahi" className="hover:text-white transition-colors">• Kapalı Cerrahi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-serif uppercase tracking-wider text-white">İletişim</h4>
            <ul className="space-y-4 text-slate-300 font-medium text-sm">
              <li className="leading-relaxed">
                Feneryolu, Bağdat Cd. No:125 D:12,<br />
                34724 Kadıköy / İstanbul
              </li>
              <li className="font-bold text-white pt-2 text-base">+90 216 345 80 87</li>
              <li className="text-white font-bold opacity-80 hover:opacity-100 transition-opacity">info@selcukkihtir.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-medium">© {new Date().getFullYear()} Op. Dr. Selçuk Kihtir. Tüm Hakları Saklıdır.</p>
          <div className="flex space-x-6">
             <Link href="/gizlilik" className="text-slate-400 hover:text-white text-xs transition-colors">Gizlilik Politikası</Link>
             <Link href="/kvkk" className="text-slate-400 hover:text-white text-xs transition-colors">KVKK</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
