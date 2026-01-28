import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#080024cc] pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif uppercase tracking-tight">İletişim</h1>
          <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            Sorularınız veya randevu talepleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Klinik Bilgileri</h2>
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Adres</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        Bağdat Cad. Feneryolu Mah. No:123 Kadıköy/İstanbul <br />
                        (Florence Nightingale Kızıltoprak Yanı)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Telefon</h3>
                      <div className="space-y-1">
                        <p className="text-slate-500 font-medium leading-relaxed">+90 216 345 80 87</p>
                        <p className="text-slate-500 font-medium leading-relaxed">+90 532 718 44 00 (Mobil)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012 2v1H3v-1a2 2 0 012-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">E-posta</h3>
                      <p className="text-slate-500 font-medium leading-relaxed text-primary">
                        info@selcukkihtir.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-video bg-[#f9f2f4] rounded-[40px] overflow-hidden shadow-sm border border-rose-100">
                <div className="absolute inset-0 flex items-center justify-center text-rose-400 font-bold bg-gradient-to-br from-[#fdf9fa] to-[#f9f2f4]">
                  Google Maps Entegrasyonu Placeholder
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#f9f2f4] p-10 lg:p-16 rounded-[50px] border border-rose-100 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Mesaj Gönderin</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Ad Soyad</label>
                    <input type="text" placeholder="Adınız ve soyadınız" className="w-full px-6 py-4 rounded-2xl bg-white border border-rose-50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Telefon</label>
                    <input type="tel" placeholder="0 (5xx) xxx xx xx" className="w-full px-6 py-4 rounded-2xl bg-white border border-rose-50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">E-posta</label>
                  <input type="email" placeholder="ornek@mail.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-rose-50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Mesajınız</label>
                  <textarea rows={5} placeholder="Nasıl yardımcı olabiliriz?" className="w-full px-6 py-4 rounded-2xl bg-white border border-rose-50 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium resize-none"></textarea>
                </div>
                <button type="button" className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 hover:shadow-xl transform hover:-translate-y-1">
                  Gönder
                </button>
                <p className="text-center text-[10px] text-slate-400 font-medium px-4">
                  Bu formu doldurarak KVKK Aydınlatma Metni kapsamında verilerinizin işlenmesini kabul etmiş sayılırsınız.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
