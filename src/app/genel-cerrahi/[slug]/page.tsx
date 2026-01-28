import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'

const servicesData: Record<string, { title: string, desc: string, detail: string, icon: string }> = {
  "safra-kesesi-hastaliklari": {
    title: "Safra Kesesi Hastalıkları",
    icon: "🔬",
    desc: "Laparoskopik (kapalı) safra kesesi ameliyatları ve safra yolu hastalıkları tedavisi.",
    detail: "Safra kesesi taşları, kolesistit (safra kesesi iltihabı) ve safra yolu poliplerinin tedavisinde modern altın standart olan laparoskopik kolesistektomi uygulanmaktadır. Kapalı yöntem sayesinde hastalarımız daha az ağrı, daha kısa hastanede yatış süresi ve daha hızlı normal hayata dönüş imkanı bulmaktadır."
  },
  "tiroid-hastaliklari": {
    title: "Tiroid Hastalıkları",
    icon: "🦋",
    desc: "Guatr, tiroid kanseri ve paratiroid hastalıklarının cerrahi tedavisi.",
    detail: "Tiroid nodülleri, zehirli guatr ve tiroid kanserlerinde multidisipliner bir yaklaşımla cerrahi tedavi planlanmaktadır. Sinir monitörizasyonu eşliğinde yapılan titiz cerrahi ile ses tellerinin korunması en üst düzeyde sağlanmaktadır."
  },
  "gastrointestinal-sistem-kanserleri": {
    title: "Gastrointestinal Sistem Kanserleri",
    icon: "🏥",
    desc: "Mide, kolon ve rektum kanserlerinin onkolojik prensiplere uygun cerrahisi.",
    detail: "Sindirimi sistemine ait tümörlerin cerrahisinde onkolojik sınırlar ve lenf nodu diseksiyonu hayati önem taşır. Mide ve kalın bağırsak kanserlerinde modern cerrahi teknikler ve laparoskopik yaklaşımlarla hastalarımıza en güncel tedavi imkanlarını sunuyoruz."
  },
  "fitiklar": {
    title: "Fıtıklar",
    icon: "🩹",
    desc: "Kasık fıtığı, göbek fıtığı ve ameliyat yeri fıtıklarının modern yöntemlerle onarımı.",
    detail: "Fıtık cerrahisinde yama (mesh) kullanımı ve gerginliksiz onarım teknikleriyle nüks oranları minimize edilmektedir. Kasık fıtıklarında kapalı (laparoskopik) yöntemler, hastalarımızın iş hayatına ve spora dönüş süresini belirgin şekilde kısaltmaktadır."
  },
  "anorektal-hastaliklar": {
    title: "Anorektal Hastalıklar",
    icon: "🩸",
    desc: "Hemoroid, fistül ve fissür (çatlak) hastalıklarının güncel tedavi yöntemleri.",
    detail: "Anal bölge hastalıklarında mahremiyet ve hasta konforu önceliğimizdir. Hemoroidlerde lazer tedavisi, Longo yöntemi ve güncel cerrahi yaklaşımlarla ağrısız ve hızlı iyileşme odaklı çözümler sunuyoruz."
  },
  "laparoskopik-cerrahi": {
    title: "Laparoskopik Cerrahi",
    icon: "📹",
    desc: "Tanısal ve tedavi edici minimal invaziv (kapalı) cerrahi girişimler.",
    detail: "İleri laparoskopik teknikler, cerrahi başarının yanında hastanın fiziksel bütünlüğünü de korumayı hedefler. Küçük kesiler üzerinden yapılan büyük ameliyatlar, modern cerrahinin en büyük kazanımlarından biridir."
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#080024cc] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/genel-cerrahi" className="text-white/60 font-bold mb-8 inline-flex items-center hover:text-white transition-all">
            <span className="mr-2">←</span> Genel Cerrahi Branşları
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif uppercase tracking-tight">{service.title}</h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed">
              {service.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2">
              <div className="prose prose-xl prose-slate max-w-none text-slate-600 font-medium leading-[1.8] space-y-12">
                {slug === "safra-kesesi-hastaliklari" ? (
                  <div className="space-y-16">
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-slate-900 font-serif">Safra nedir?</h2>
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <p className="flex-1">
                          Safra, karaciğer tarafından üretilen, yağlı gıdaların sindirimi için gerekli enzim adı verilen maddeleri içeren sarı renkte bir sıvıdır. Safra yolları ile mide çıkışındaki onikiparmak bağırsağına salgılanır.Bir kısmı da safra kesesinde depolanır.
                        </p>
                        <div className="relative w-full md:w-[345px] aspect-[345/260] shrink-0 rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-100">
                           <Image src="https://www.selcukkihtir.com/wp-content/uploads/2017/01/safra-kesesi-1-300x226.jpg" alt="Safra Kesesi" fill className="object-cover" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 text-slate-600">
                      <h2 className="text-3xl font-bold text-slate-900 font-serif">Safra kesesi taşları neden oluşur?</h2>
                      <p>
                        Bazı bireylerde safra kesesi içindeki yoğunlaştırma işlemi sırasında hatalı gelişen bir dizi kimyasal reaksiyon sonucunda safranın kristalleşmesi yani çamur (sludge) ve taş oluşumu gelişir. Oluşan taşlar birkaç milimetre ile 2-3 santimetre arasında değişik boyutlarda olabilir.
                      </p>
                      <p>
                        Kadınlarda, kilo fazlası olanlarda, doğum kontrol hapı kullananlarda,hızlı kilo alıp verme durumlarında, safra kesesinde taş oluşumu ihtimali daha da yükselir. Ayrıca yaş ilerledikçe de safra kesesinde taşa rastlanma ihtimali artar. 30 yaş altında çok ender iken 60 yaş üstü insanların yaklaşık %20’sinde safra kesesi taşı görülür.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-slate-900 font-serif">Safra Kesesi Taşlarının Önemi</h3>
                      <p>
                        Safra kesesinde taş olan her üç bireyden birinde taşların sebep olduğu şikayetler vardır. Büyük taşlar safra kesesinin çıkışını geçici olarak tıkayabilir. Bu durumda özellikle yemek yemeyi takiben karnın üst ve sağ tarafında sırta veya omuza vuran ağrı hissedilir. Bulantı, kusma ve terleme ağrıya eşlik edebilir. Taşların hareket etmesi veya tıkanmanın tam olmaması nedeniyle safra kesesi bir süre sonra boşalınca ağrı hafifler ve kaybolur.
                      </p>
                      <p>
                        Safra kesesi çıkışının taş nedeni ile kalıcı olarak tıkanması durumunda akut kolesistit adı verilen tablo ortaya çıkar. Boşalması engellenmiş olan safra kesesi içinde genellikle bağırsaktan gelen bakterilerin de katıldığı iltihabi bir reaksiyon başlar. Karnın sağ ve üst tarafında şiddetli ağrı oluşur buna bulantı kusma ve ateş eşlik eder. Acil tedavi gereksinimi olan bu durumda müdahale gecikir ise safra kesesi delinebilir ve içeriği karın boşluğuna dökülüp karın zarı iltihabına (peritonit) yol açabilir.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-slate-900 font-serif">Safra Kesesi Hastalıklarında Tanı</h3>
                      <p>
                        Ultrasonografi safra yolu hastalıklarında en kolay, en doğru sonucu veren yöntemdir. Bu yöntemle safra kesesinin yapısı,içinde barındırdığı muhtemel taşlar, tüm safra yolları ve pankreas hakkında detaylı bilgi edinilir. Ultrason tetkiki ideal olarak 8 saatlik açlık dönemi sonrası yapılır. Ancak acil müdahale gerektiren durumlarda bu süre beklenmeksizin inceleme hemen yapılmalıdır.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-slate-900 font-serif">Safra Kesesi Taşlarında Tedavi</h3>
                      <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                        <p className="flex-1">
                          Taş oluşumundan safra kesesi sorumludur. Diğer yandan safranın karaciğer tarafından üretilmesi nedeni ile safra kesesi vazgeçilmez bir organ değildir.Bu nedenle semptomatik safra kesesi şikayeti olan hastalarda safra kesesi taşlar ile birlikte çıkartılır.Hastada ameliyat sonrası safra kesesi alınmasına bağlı bir fonksiyonel eksiklik oluşmaz.
                        </p>
                        <div className="relative w-full md:w-[355px] aspect-[355/226] shrink-0 rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-100">
                           <Image src="https://www.selcukkihtir.com/wp-content/uploads/2017/01/safra-kesesi-2-300x191.jpg" alt="Safra Kesesi Ameliyatı" fill className="object-cover" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                       <h2 className="text-3xl font-bold text-slate-900 font-serif">Safra Kesesi Polipleri</h2>
                       <p>
                         Safra kesesinde polipler genel olarak şikayet yaratmadıkları için rutin kontrollerde yapılan batın ultrasonu ile saptanır.Sindirim sisteminin iç yüzünü döşeyen mukoza isimli tabakadaki hücrelerin bulunduğu yerde büyüyüp kitle oluşturmasına polip adı verilir. Safra kesesi içinde gerçek polipler (adenomatöz polip) çok nadiren oluşabilir. Oluşan poliplerin zaman içinde çapı büyüdükçe kansere dönüşme ihtimali ortaya çıkar.
                       </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <p>{service.detail}</p>
                    <p className="mt-8">
                      Cerrahi müdahale kararı, hastanın klinik durumu, radyolojik bulguları ve yaşam kalitesi göz önünde bulundurularak verilir. Her cerrahi işlemde olduğu gibi, başarıda tecrübe ve teknik donanım belirleyicidir.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-20 bg-slate-50 p-12 rounded-[50px] border border-slate-100">
                 <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Neden Bizi Tercih Etmelisiniz?</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <h3 className="text-lg font-bold text-primary">Tecrübe</h3>
                       <p className="text-sm text-slate-500 font-medium">Binlerce başarılı operasyon ve yılların verdiği klinik birikim.</p>
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-lg font-bold text-primary">Teknoloji</h3>
                       <p className="text-sm text-slate-500 font-medium">En güncel görüntüleme ve cerrahi ekipman kullanımı.</p>
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-lg font-bold text-primary">Güven</h3>
                       <p className="text-sm text-slate-500 font-medium">Hasta odaklı yaklaşım ve şeffaf tedavi süreçleri.</p>
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-lg font-bold text-primary">Takip</h3>
                       <p className="text-sm text-slate-500 font-medium">Ameliyat sonrası titiz kontrol ve destek süreçleri.</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-1">
               <div className="sticky top-32 space-y-8">
                  <div className="bg-[#2d172e] p-10 rounded-[40px] text-white shadow-2xl ring-1 ring-white/20">
                     <h3 className="text-2xl font-bold mb-6 font-serif text-white">Randevu Alın</h3>
                     <p className="text-white font-medium text-sm mb-10 leading-relaxed">
                        Detaylı değerlendirme ve tedavi seçenekleri için asistanımızla iletişime geçebilirsiniz.
                     </p>
                     <Link href="/iletisim" className="block w-full py-5 bg-white text-[#3b1e3d] text-center font-bold rounded-2xl hover:bg-rose-50 transition-all shadow-xl shadow-black/40 transform hover:-translate-y-1">
                        Randevu Alın
                     </Link>
                  </div>

                  <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/10">
                     <h3 className="text-xl font-bold text-primary mb-6 font-serif uppercase tracking-wider">İlgili Branşlar</h3>
                     <ul className="space-y-4">
                        {Object.values(servicesData).slice(0, 4).map((s, i) => {
                          const sSlug = Object.keys(servicesData).find(key => servicesData[key] === s);
                          return (
                          <li key={i}>
                             <Link href={`/genel-cerrahi/${sSlug}`} className="text-slate-600 font-bold hover:text-primary transition-colors block p-1">
                               • {s.title}
                             </Link>
                          </li>
                        )})}
                     </ul>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }))
}
