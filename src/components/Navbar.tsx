'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Doktorunuz', href: '/doktorunuz' },
  { name: 'Meme Hastalıkları', href: '/meme-hastaliklari' },
  { 
    name: 'Genel Cerrahi', 
    href: '/genel-cerrahi',
    children: [
      { name: 'Safra Kesesi Hastalıkları', href: '/genel-cerrahi/safra-kesesi-hastaliklari' },
    ]
  },
  { name: 'İletişim', href: '/iletisim' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Op. Dr. Selçuk <span className={`${isScrolled ? 'text-primary' : 'text-white'}`}>Kihtir</span>
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>Genel Cerrahi Uzmanı</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group px-3 py-2">
                <Link 
                  href={item.href}
                  className={`text-sm font-semibold transition-colors flex items-center gap-1 ${
                    pathname === item.href 
                      ? (isScrolled ? 'text-primary' : 'text-white') 
                      : (isScrolled ? 'text-slate-600 hover:text-primary' : 'text-slate-100 hover:text-white')
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <svg className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/iletisim" 
              className={`ml-6 inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                isScrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              Randevu Al
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <span className="sr-only">Menü</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-white border-b border-slate-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    pathname === item.href ? 'bg-primary/5 text-primary' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm font-semibold text-slate-500 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 px-4">
              <Link 
                href="/iletisim"
                className="w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-primary/90 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Randevu Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
