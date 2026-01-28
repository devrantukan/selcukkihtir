import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-[#080024cc] pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-white uppercase tracking-widest">Genel Cerrahi Uzmanı</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white font-serif leading-tight">
                Modern <span className="text-white italic">Cerrahi</span> <br />
                Güvenilir Eller
              </h1>
              <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
                Op. Dr. Selçuk Kihtir ile meme sağlığı, onkoplastik cerrahi ve laparoskopik girişimlerde uluslararası standartlarda uzmanlık.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/iletisim" className="px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 transform hover:-translate-y-1">
                  Randevu Alın
                </Link>
                <Link href="/doktorunuz" className="px-8 py-5 bg-white/10 text-white border border-white/20 font-bold rounded-2xl hover:bg-white/20 transition-all">
                  Özgeçmişi İncele
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-[80px] blur-3xl group-hover:bg-primary/30 transition-colors duration-700"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[80px] shadow-2xl ring-1 ring-slate-200">
                <Image 
                  src="/images/selcuk-kihtir.jpg" 
                  alt="Op. Dr. Selçuk Kihtir" 
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 font-serif text-slate-900">Meme Cerrahisi</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Meme kanseri, onkoplastik cerrahi ve meme koruyucu yaklaşımlar.</p>
            </div>
            <div className="p-10 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 font-serif text-slate-900">Laparoskopi</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Kapalı yöntemle hızlı iyileşme sağlayan cerrahi girişimler.</p>
            </div>
            <div className="p-10 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 font-serif text-slate-900">Endokrin Cerrahi</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Tiroid, paratiroid ve böbrek üstü bezi hastalıkları cerrahisi.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
