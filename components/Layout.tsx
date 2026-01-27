
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, Globe, Palette } from 'lucide-react';
import { SiteConfig } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  config: SiteConfig;
}

const Layout: React.FC<LayoutProps> = ({ children, config }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const LOGO_URL = "https://image2url.com/r2/default/images/1769498205853-8aa3bf86-0809-4ec8-b982-fc2ff2157bc6.gif";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: '홈', path: '/' },
    { name: '연구소 소개', path: '/about' },
    { name: '프로그램', path: '/programs' },
    { name: '치료사 소개', path: '/therapists' },
    { name: 'Q&A', path: '/qna' },
    { name: '상담예약', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: config.theme.mainColor, color: config.theme.textColor }}>
      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center group">
              <div className="relative flex items-center h-12 md:h-14">
                {!logoError ? (
                  <img 
                    src={LOGO_URL} 
                    alt="혜윰예술심리연구소" 
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="flex items-center space-x-3 group-hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 bg-brand-wood rounded-full flex items-center justify-center text-white shadow-lg">
                      <Palette size={20} />
                    </div>
                    <span className="text-xl font-serif font-bold text-brand-charcoal tracking-tighter">혜윰예술심리연구소</span>
                  </div>
                )}
              </div>
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-all hover:text-brand-wood tracking-[0.1em] uppercase relative py-1 group ${
                    location.pathname === item.path ? 'text-brand-wood font-bold' : 'text-brand-charcoal/70'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-wood transition-transform duration-500 origin-left ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
            </nav>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-charcoal p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-brand-ivory/98 backdrop-blur-xl border-b border-brand-wood/10 animate-in fade-in slide-in-from-top-4">
            <div className="px-6 pt-6 pb-12 space-y-4 text-center">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="block py-4 text-xl font-serif font-medium text-brand-charcoal hover:text-brand-wood border-b border-brand-wood/5 last:border-none">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-brand-charcoal text-brand-ivory py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-wood/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <p className="text-lg font-serif font-bold text-white mb-6">혜윰예술심리연구소</p>
              <p className="text-sm text-gray-400 leading-loose mb-10 max-w-sm">
                혜윰: '생각'의 순 우리 말, <br/>당신의 마음을 예술로 빚어냅니다.
              </p>
              <div className="flex space-x-6">
                <a href={config.contact.instagram} target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-full hover:bg-brand-wood hover:border-brand-wood transition-all group" title="Instagram">
                  <Instagram size={22} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href={config.contact.blog} target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-full hover:bg-brand-wood hover:border-brand-wood transition-all group" title="Blog">
                  <Globe size={22} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href={`tel:${config.contact.phone}`} className="p-4 border border-white/10 rounded-full hover:bg-brand-wood hover:border-brand-wood transition-all group" title="Phone">
                  <Phone size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-wood mb-10">Navigation</h3>
              <ul className="space-y-5 text-sm text-gray-400 font-light">
                {navItems.map((item) => (
                  <li key={item.path}><Link to={item.path} className="hover:text-white transition-colors uppercase tracking-widest">{item.name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-wood mb-10">Contact Info</h3>
              <ul className="space-y-6 text-sm text-gray-400 font-light leading-relaxed">
                <li>{config.contact.address}</li>
                <li className="font-mono text-lg">{config.contact.phone}</li>
                <li className="hover:text-white transition-colors">{config.contact.email}</li>
              </ul>
            </div>
          </div>
          <div className="mt-24 pt-10 border-t border-white/5 text-center text-[10px] text-gray-500 uppercase tracking-[0.6em] font-medium">
            © 2021 {config.name}. ARTISTIC HEALING FOR THE ILSAN.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
