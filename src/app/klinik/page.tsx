import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function KlinikPage() {
  const images = [
    { src: "/images/klinik/sk_klinik_meme_cerrahisi.jpg", alt: "Meme Cerrahisi Klinik" },
    { src: "/images/klinik/sk_klinik_1.jpg", alt: "Klinik Görünüm 1" },
    { src: "/images/klinik/sk_klinik_2.jpg", alt: "Klinik Görünüm 2" },
    { src: "/images/klinik/sk_klinik_3.jpg", alt: "Klinik Görünüm 3" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-50 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 font-serif uppercase tracking-tight">Kliniğimiz</h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto text-center">
            Hasta konforu ve güvenliğini ön planda tutan, modern tıbbi donanıma sahip profesyonel bir ortam.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {images.map((image, idx) => (
              <div key={idx} className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl group border border-slate-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4">
           <div className="bg-brand-dark rounded-[60px] p-12 lg:p-20 text-white text-center shadow-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 font-serif">Kişiye Özel Tedavi Yaklaşımı</h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
                Bilimsel veriler ışığında, her hastanın fiziksel ve psikolojik ihtiyaçlarını gözeterek tedavi süreçlerimizi planlıyoruz. Modern cerrahinin tüm olanaklarını hastalarımızın hizmetine sunuyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-800">
                 <div>
                    <span className="block text-3xl font-bold text-primary mb-2">Modern</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Donanım</span>
                 </div>
                 <div>
                    <span className="block text-3xl font-bold text-primary mb-2">Güvenilir</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Hizmet</span>
                 </div>
                 <div>
                    <span className="block text-3xl font-bold text-primary mb-2">Samimi</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Yüzeyler</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
