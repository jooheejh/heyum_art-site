
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Users, Music, Palette, Waves, Speaker } from 'lucide-react';
import { SiteConfig, Program } from '../types';

interface HomeProps {
  config: SiteConfig;
  programs: Program[];
}

const Home: React.FC<HomeProps> = ({ config, programs }) => {
  // '초기상담'을 제외한 나머지 프로그램만 필터링하여 메인에 노출
  const displayPrograms = programs.filter(p => p.title !== '초기상담').slice(0, 4);

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden bg-white">
        {/* Background Layer with Artistic Watercolor Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white"></div>
          
          {/* Subtle Paint Strokes / Blots */}
          <div className="absolute top-[15%] right-[5%] w-[45vw] h-[45vw] bg-brand-wood opacity-[0.08] rounded-full blur-[100px] animate-pulse-soft"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] bg-brand-lightWood opacity-[0.12] rounded-full blur-[80px] animate-float-slow"></div>
          
          {/* Artistic SVG Paint Brush Effect */}
          <svg className="absolute top-[20%] left-[-10%] w-[60%] h-auto opacity-[0.03] rotate-12" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 100 Q150 50 300 120 T490 80" stroke="#B8977E" strokeWidth="60" strokeLinecap="round" strokeDasharray="10 20" />
          </svg>
        </div>

        {/* Visual Music & Art Intersection (Animated Waves) */}
        <div className="absolute bottom-0 left-0 w-full h-64 z-0 opacity-[0.15] pointer-events-none">
          <svg viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#B8977E" fillOpacity="0.4" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,208C960,235,1056,245,1152,224C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-float-delayed"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-5xl">
            <div className="flex items-center space-x-6 mb-10 opacity-80">
              <div className="w-16 h-[1px] bg-brand-wood"></div>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-wood flex items-center gap-3">
                <Palette size={12} /> + <Music size={12} /> Synesthesia Therapy
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-[4.8rem] font-serif font-bold text-brand-charcoal leading-[1.2] mb-14 tracking-tight">
              <span className="block mb-6 text-2xl md:text-3xl lg:text-4xl font-light opacity-80">혜윰: '생각'의 순 우리 말,</span>
              <span className="text-brand-wood block italic font-light">
                당신의 마음을<br />
                예술로 빚어냅니다.
              </span>
            </h1>
            
            <div className="text-lg md:text-xl text-gray-500 mb-20 leading-relaxed font-light max-w-3xl">
              <p>음악의 선율과 미술의 색채가 만나는 고유한 치유 공간.</p>
              <p>우리는 예술과 선율을 통해 당신의 이야기에 귀를 기울입니다.</p>
              <br />
              <p>전문적인 예술 심리 상담을 통해 잊고 있던 내면의 평화를 다시 발견해보세요.</p>
            </div>
            
            <div className="flex flex-wrap gap-10 items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-12 py-6 bg-brand-charcoal text-white font-bold rounded-sm overflow-hidden transition-all hover:bg-brand-wood shadow-2xl"
              >
                <span className="relative z-10 tracking-[0.1em] text-sm">상담 예약하기</span>
                <ArrowRight className="relative z-10 ml-4 group-hover:translate-x-3 transition-transform duration-500" size={20} />
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-wood/10 flex items-center justify-center text-brand-wood animate-pulse">
                  <Speaker size={18} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-wood/60">Harmony & Peace</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensory Intersection Section */}
      <section className="py-40 relative overflow-hidden bg-white">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-brand-wood opacity-[0.05] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-brand-lightWood opacity-[0.08] rounded-full blur-[100px] alt-sensory-bg"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            
            <div className="relative">
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div className="space-y-8 pt-20">
                  <div className="group overflow-hidden rounded-sm shadow-xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800&auto=format&fit=crop" 
                      alt="Art Brush" 
                      className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-brand-wood opacity-[0.1] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-10 bg-white shadow-2xl border-l-4 border-brand-wood relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-brand-wood opacity-[0.05] rounded-full blur-xl"></div>
                    <Music className="text-brand-wood mb-6 animate-pulse" size={32} />
                    <p className="text-sm font-bold font-serif uppercase tracking-[0.3em] text-brand-charcoal">Resonance of Sound</p>
                    <p className="text-xs text-gray-400 mt-3 leading-relaxed">흐트러진 마음의 주파수를 선율로 다스립니다.</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="p-10 bg-brand-charcoal text-brand-ivory shadow-2xl relative overflow-hidden group">
                    <Palette className="text-brand-wood mb-6 group-hover:rotate-12 transition-transform" size={32} />
                    <p className="text-sm font-bold font-serif uppercase tracking-[0.3em]">Texture of Emotion</p>
                    <p className="text-xs text-brand-lightWood mt-3 leading-relaxed opacity-70">보이지 않는 감정을 캔버스 위에 시각화합니다.</p>
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-wood opacity-[0.1] rounded-full blur-xl"></div>
                  </div>
                  <div className="group overflow-hidden rounded-sm shadow-xl border border-brand-wood/5">
                    <img 
                      src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=800&auto=format&fit=crop" 
                      alt="Sheet Music" 
                      className="w-full aspect-[4/6] object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-brand-wood opacity-[0.05] rounded-full animate-spin-slow"></div>
            </div>

            <div className="lg:pl-20">
              <span className="text-xs font-bold text-brand-wood uppercase tracking-[0.6em] mb-10 block flex items-center gap-3">
                <Waves size={16} className="text-brand-wood" /> Sensory Watercolor
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-charcoal mb-12 leading-relaxed">
                순백의 캔버스 위에<br />
                <span className="italic text-brand-wood font-light border-b-2 border-brand-wood/10 pb-2">마음의 색채를 입히다</span>
              </h2>
              <p className="text-base md:text-lg text-gray-500 mb-12 leading-loose font-light">
                혜윰은 말로 다 표현할 수 없는 당신의 내면을 미술의 색채와 음악의 선율로 풀어낼 수 있도록 돕습니다. 
                혜윰의 뜻처럼 맑은 마음의 공간을 지향하며, 공간을 채우는 따뜻한 선율, 그리고 손끝으로 느껴지는 캔버스의 질감이 어우러져 깊은 이완을 선물합니다.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="group">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-wood shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <Music size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-brand-charcoal tracking-tight">선율의 위로</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">불안정한 마음의 파동을 고른 선율로 다스립니다.</p>
                </div>
                <div className="group">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-wood shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <Palette size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-brand-charcoal tracking-tight">색채의 해방</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">내면의 감정을 가장 솔직한 색채로 시각화합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-wood opacity-[0.03] rounded-full blur-[150px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-8">마음의 평온을 위한 여정</h2>
            <div className="w-24 h-1 bg-brand-wood opacity-[0.3] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { icon: <Sparkles size={40} />, title: "예술적 통찰", desc: "창작 과정을 통해 억눌린 감정을 발견하고 치유의 에너지를 얻습니다." },
              { icon: <Heart size={40} />, title: "공감과 경청", desc: "편안한 분위기 속에서 당신의 이야기에 온전히 집중합니다." },
              { icon: <Users size={40} />, title: "전문적 동행", desc: "검증된 예술 치료 전문가가 안전한 변화의 길을 안내합니다." }
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 bg-white border border-brand-wood/10 rounded-full flex items-center justify-center mx-auto mb-10 text-brand-wood group-hover:scale-110 group-hover:bg-brand-wood group-hover:text-white transition-all duration-700 shadow-sm relative overflow-hidden">
                   <div className="relative z-10">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-6 text-brand-charcoal tracking-tight">{value.title}</h3>
                <p className="text-gray-500 leading-loose font-light px-4 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-40 bg-brand-ivory opacity-[0.95]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-6">프로그램</h2>
              <p className="text-gray-500 italic font-light tracking-widest uppercase text-[10px]">Customized Art Therapy for your soul</p>
            </div>
            <Link to="/programs" className="group flex items-center text-[10px] font-bold uppercase tracking-[0.4em] text-brand-wood border-b border-brand-wood/20 pb-2 hover:border-brand-wood transition-all">
              All Programs <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {displayPrograms.map((program) => (
              <div key={program.id} className="bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-1000 group rounded-sm border border-brand-wood/5">
                <div className="h-64 overflow-hidden relative">
                  <img src={program.imageUrl} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                  <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center backdrop-blur-[3px]">
                    <span className="text-white text-[9px] font-bold border border-white/40 px-6 py-3 uppercase tracking-[0.5em]">View Program</span>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <span className="text-[9px] text-brand-wood uppercase tracking-[0.4em] font-bold mb-4 block">{program.target}</span>
                  <h3 className="text-lg font-bold mb-4 text-brand-charcoal leading-tight tracking-tight h-12 flex items-center justify-center">{program.title}</h3>
                  <p className="text-gray-400 text-[11px] mb-8 leading-relaxed font-light line-clamp-2">{program.description}</p>
                  <Link to={`/programs`} className="text-[9px] font-bold uppercase tracking-[0.3em] border-b-2 border-brand-wood/10 pb-1 hover:border-brand-wood transition-colors inline-block">상세보기</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 text-center bg-white relative overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-brand-wood opacity-[0.06] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] bg-brand-lightWood opacity-[0.09] rounded-full blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-10 leading-tight">
            당신의 <span className="text-brand-wood">새로운 시작</span>을 응원합니다.
          </h2>
          <p className="text-lg text-gray-400 mb-20 font-light leading-loose max-w-2xl mx-auto">
            망설이지 말고 문을 두드려 주세요.<br />
            로고의 '윰'처럼 당신의 마음을 안아주며 마음의 정원을 가꿀 수 있도록 혜윰이 동행하겠습니다.
          </p>
          <Link
            to="/contact"
            className="px-14 py-7 bg-brand-charcoal text-white rounded-full font-bold hover:bg-brand-wood hover:scale-105 transition-all shadow-2xl inline-block tracking-[0.2em] uppercase text-xs"
          >
            지금 예약 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
