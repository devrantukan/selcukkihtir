import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function DoktorunuzPage() {
  const sections = [
    {
      title: "Eğitim",
      items: [
        { date: "06.2004 – 01.2005", content: "Johns Hopkins School of Medicine\n(Meme Hastalıkları, Onkoplastik Cerrahi, Meme Koruyucu Cerrahi, Aksiller Sentinel Lenf Nodu Biyopsisi)" },
        { date: "11.2004 – 12.2004", content: "Stanford University\n(CyberKnife Radiosurgery, Pankreas ve Karaciğer CA)" },
        { date: "07.1992 – 06.1999", content: "Weill Medical College, Cornell University / Lincoln Medical Center\n(Genel Cerrahi Asistanlığı)" },
        { date: "07.1995 – 06.1996", content: "New York Medical College\n(El Cerrahisi Fellowship)" },
        { date: "07.1991 – 06.1992", content: "Baylor College of Medicine\n(Genel Cerrahi – Internship)" },
        { date: "1984 – 1991", content: "Marmara Üniversitesi Tıp Fakültesi" },
        { date: "1976 – 1984", content: "Saint Joseph Fransız Erkek Lisesi" }
      ]
    },
    {
      title: "Deneyim",
      items: [
        { date: "2000 – 2003", content: "İstanbul Memorial Hastanesi\nGenel Cerrahi, Meme Cerrahisi, Acil Servis Direktörlüğü" },
        { date: "2004 – 2009", content: "Johns Hopkins Anadolu Sağlık Merkezi\nGenel Cerrahi, Meme Cerrahisi, Medikal Direktör Yardımcılığı" },
        { date: "2009 – Halen", content: "Florence Nightingale Kızıltoprak\nMeme Sağlığı Merkezi, Genel Cerrahi" }
      ]
    },
    {
      title: "Sertifikalar",
      items: [
        { date: "2002", content: "American Board of Surgery Sertifikası" },
        { date: "1992", content: "ECFMG Sertifikası" },
        { date: "2005", content: "CyberKnife Society Sertifikası" }
      ]
    }
  ];

  const publications = [
    "G Stringel M.D.-J.L Zitsman M.D.-I Shehadi M.D.-S Kihtir M.D. Laparoscopic Apendectomy in Children. The Journal of the Sciety of Laparoscopic Surgeons. 1997 Jan-MAR,1(1):37-9",
    "Factors Affecting Early Mortality in Penetrating Abdominal Vascular Trauma. T Robb DO-PbarieM.D.-S Kihtir M.D.-S Eachempatti M.D. Weill Medical College of Conell Uninersity NewYork NY.",
    "Miglietta M. M.D.-Kihtir S.M.D.-Schwartz K.S,J M.D. Gastric Perforation During Endotracheal Intubation. Contemporary Surgery 1999 55(4):193-199",
    "Göğüs Duvarı Travması Bölümü, Dr Selçuk Kihtir. Travma Cerrahisi, Dr Tuğrul Kihtir (Editör):Ulusal Kitabevi,9:95-101,1995",
    "Kalp Travması Bölümü. Dr Selçuk Kihtir. Travma Cerrahisi, Dr Tuğrul Kihtir.(Editör):Ulusal Kitabevi,9:111-119,1995"
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#080024cc] pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight">
                 Op. Dr. Selçuk <br />
                 <span className="text-white">Kihtir</span>
               </h1>
               <p className="text-xl text-slate-300 font-medium leading-relaxed mb-8">
                 Genel Cerrahi ve Meme Cerrahisi Uzmanı. Amerika Birleşik Devletleri ve Türkiye'de 20 yılı aşkın klinik tecrübe, akademik birikim ve binlerce başarılı operasyon.
               </p>
               <div className="flex gap-4">
                  <Link href="/iletisim" className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/10">
                    İletişime Geç
                  </Link>
               </div>
             </div>
             <div className="relative aspect-[4/5] overflow-hidden rounded-[80px] shadow-2xl ring-1 ring-slate-200">
                <Image 
                  src="/images/selcuk-kihtir.jpg" 
                  alt="Op. Dr. Selçuk Kihtir" 
                  fill
                  className="object-cover object-top"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Structured CV Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-20">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-10 font-serif inline-block border-b-4 border-primary pb-2">
                    {section.title}
                  </h2>
                  <div className="space-y-12">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="md:w-32 shrink-0">
                           <span className="text-primary font-bold font-sans text-sm tracking-widest">{item.date}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-700 font-medium leading-relaxed whitespace-pre-line">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-slate-50 rounded-[50px] p-12 lg:p-16 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold mb-10 font-serif text-slate-900">Bilimsel Yayınlar</h2>
                <div className="space-y-8">
                  {publications.map((pub, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="w-8 h-8 rounded-full bg-primary shrink-0 flex items-center justify-center font-bold text-xs text-white">
                        {idx + 1}
                      </div>
                      <p className="text-slate-600 font-medium text-sm leading-relaxed group-hover:text-primary transition-colors">
                        {pub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 italic font-medium text-slate-600 leading-relaxed ring-1 ring-primary/5">
                  <div className="text-4xl text-primary/20 mb-4 font-serif">"</div>
                  Tıp disiplini, sürekli öğrenmeyi ve hastanın bütünsel sağlığını merkezde tutmayı gerektirir. Amerika ve Türkiye'deki cerrahi tecrübelerimi hastalarımın şifası için kullanıyorum.
                </div>
                
                <div className="p-10 bg-[#f9f2f4] rounded-[40px] border border-rose-100 shadow-sm ring-1 ring-primary/5">
                  <h3 className="text-2xl font-bold mb-6 font-serif text-primary">Uzmanlık Alanları</h3>
                  <ul className="space-y-4 font-medium text-slate-700">
                     <li className="flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-primary/40 shrink-0" />
                       Meme Cerrahisi
                     </li>
                     <li className="flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-primary/40 shrink-0" />
                       Onkoplastik Cerrahi
                     </li>
                     <li className="flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-primary/40 shrink-0" />
                       Meme Koruyucu Cerrahi
                     </li>
                     <li className="flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-primary/40 shrink-0" />
                       Aksiller Sentinel Lenf Nodu Biyopsisi
                     </li>
                     <li className="flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-primary/40 shrink-0" />
                       Endokrin Cerrahi (Tiroid)
                     </li>
                     <li className="flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-primary/40 shrink-0" />
                       Laparoskopik Cerrahi
                     </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
