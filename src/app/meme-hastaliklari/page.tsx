import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function MemeHastaliklariPage() {
  const stats = [
    { label: "40 Yaş Altı", value: "229", detail: "kadında bir görülme sıklığı" },
    { label: "40-59 Yaş Arası", value: "24", detail: "kadında bir görülme sıklığı" },
    { label: "Meme Kanseri Sıklığı", value: "1/8", detail: "Yaşam boyu her 8 kadından biri" }
  ];

  const riskFactors = [
    { title: "Yaş", desc: "Özellikle 50 yaş ve üzerindeki kadınlarda risk artmaktadır." },
    { title: "Aile Öyküsü", desc: "Birinci derece akrabalarda meme kanseri öyküsü bulunması." },
    { title: "Genetik Faktörler", desc: "BRCA1 ve BRCA2 gen mutasyonlarının varlığı." },
    { title: "Erken Adet / Geç Menopoz", desc: "12 yaşından önce adet görmeye başlamak veya 55 yaşından sonra menopoza girmek." },
    { title: "Doğurganlık Faktörleri", desc: "Hiç doğum yapmamış olmak veya ilk doğumu 30 yaşından sonra yapmak." },
    { title: "Hormon Tedavisi", desc: "5 yıldan uzun süreli kombine hormon yerine koyma tedavisi (HRT)." }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#080024cc] pt-40 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 font-serif uppercase tracking-tight">Meme Hastalıkları</h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed">
              Meme sağlığı, erken teşhisin en kritik olduğu alanlardan biridir. Modern cerrahi yöntemler ve onkoplastik yaklaşımlarla hastalarımızın sağlığını koruyoruz.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top"></div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center">
                  <div className="text-4xl font-bold text-primary mb-2 font-serif">{stat.value}</div>
                  <div className="text-lg font-bold text-slate-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.detail}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-slate-900 text-white rounded-[60px] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
           <div className="lg:grid lg:grid-cols-2 gap-20">
              <div>
                 <h2 className="text-3xl font-bold mb-8 font-serif text-primary/60">Teşhis ve Tarama</h2>
                 <div className="space-y-8 text-slate-300">
                    <div>
                       <h3 className="text-xl font-bold mb-2 text-white">Mamografi ve USG</h3>
                       <p className="font-medium leading-relaxed">
                         40 yaş üstü her kadının yılda bir kez mamografi çektirmesi hayati önem taşır. Meme ultrasonografisi, yoğun meme dokusuna sahip hastalarda mamografiyi tamamlayıcı olarak kullanılır.
                       </p>
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-2 text-white">Kendi Kendine Muayene</h3>
                       <p className="font-medium leading-relaxed">
                         Her ay adetin bittiği 7. günde aynen karşısında simetri kontrolü ve elle muayene yapılmalıdır. Ele gelen sertlik, meme başında içe çökme veya kanlı akıntı durumunda derhal uzmana başvurulmalıdır.
                       </p>
                    </div>
                 </div>
              </div>
              <div className="mt-12 lg:mt-0">
                 <h2 className="text-3xl font-bold mb-8 font-serif text-primary/60">Cerrahi Tedavi Yöntemleri</h2>
                 <div className="space-y-8 text-slate-300">
                    <div>
                       <h3 className="text-xl font-bold mb-2 text-white">Meme Koruyucu Cerrahi</h3>
                       <p className="font-medium leading-relaxed">
                         Tümörün sadece çevresindeki sağlam doku ile çıkarılmasıdır. Onkoplastik teknikler kullanılarak meme estetiği bozulmadan kanser cerrahisi gerçekleştirilir.
                       </p>
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-2 text-white">Sentinel Lenf Nodu Biyopsisi</h3>
                       <p className="font-medium leading-relaxed">
                         Koltuk altı lenf düğümlerine kanser sıçrayıp sıçramadığını anlamak için kullanılan modern yöntemdir. Gereksiz lenf bezi diseksiyonunu ve buna bağlı kol şişmesini önler.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Risk Factors Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 font-serif text-center">Risk Faktörleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskFactors.map((factor, idx) => (
              <div key={idx} className="group p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-2xl mb-6 shadow-lg shadow-primary/10 flex items-center justify-center text-white font-bold">
                   {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">{factor.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-24">
         <div className="max-w-5xl mx-auto px-4">
            <div className="bg-primary rounded-[50px] p-12 text-center text-white shadow-2xl shadow-primary/20">
               <h2 className="text-3xl font-bold mb-6 font-serif text-white">Meme Sağlığınız Ertelemeye Gelmez</h2>
               <p className="text-xl text-white/80 mb-10 font-medium">Uzman muayenesi ve tarama testleri için randevu alabilirsiniz.</p>
                <Link href="/iletisim" className="inline-block px-12 py-5 bg-white text-primary font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-xl">
                  Şimdi Randevu Alın
                </Link>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
