import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function GenelCerrahiPage() {
  const services = [
    { 
      id: "safra-kesesi",
      title: "Safra Kesesi Hastalıkları", 
      desc: "Laparoskopik (kapalı) safra kesesi ameliyatları ve safra yolu hastalıkları tedavisi.",
      slug: "safra-kesesi-hastaliklari" 
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#080024cc] pt-40 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif uppercase tracking-tight">Genel Cerrahi</h1>
              <p className="text-xl text-slate-300 font-medium leading-relaxed">
                Kapsamlı cerrahi çözümler, ileri teknoloji ve hasta odaklı tedavi yaklaşımları.
              </p>
            </div>
            <div className="shrink-0">
               {/* S sign removed per user request */}
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} id={service.id} className="group relative bg-white p-10 rounded-[40px] border border-slate-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors font-serif">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link href={`/genel-cerrahi/${service.slug}`} className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-widest group-hover:gap-2 transition-all">
                    Detayları Görüntüle <span>→</span>
                  </Link>
                </div>
                {/* Background Decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-primary/5 transition-colors -z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Banner */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="bg-slate-900 rounded-[50px] p-12 lg:p-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-serif">Cerrahi Deneyim ve Bilimsel Yaklaşım</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-12 font-medium">
              Her hasta için en uygun cerrahi yöntemin seçilmesi, ameliyat öncesi hazırlık ve ameliyat sonrası takip süreçleri titizlikle yürütülmektedir.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
               <div className="flex flex-col items-center">
                 <span className="text-3xl font-bold text-primary/60 mb-1">Modern</span>
                 <span className="text-sm text-slate-500 font-bold uppercase tracking-widest">Teknoloji</span>
               </div>
               <div className="w-px h-12 bg-slate-800 hidden sm:block"></div>
               <div className="flex flex-col items-center">
                 <span className="text-3xl font-bold text-primary/60 mb-1">Güvenilir</span>
                 <span className="text-sm text-slate-500 font-bold uppercase tracking-widest">Teşhis</span>
               </div>
               <div className="w-px h-12 bg-slate-800 hidden sm:block"></div>
               <div className="flex flex-col items-center">
                 <span className="text-3xl font-bold text-primary/60 mb-1">Hızlı</span>
                 <span className="text-sm text-slate-500 font-bold uppercase tracking-widest">İyileşme</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
