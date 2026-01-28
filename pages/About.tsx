
import React from 'react';
import { SiteConfig } from '../types';
import { Sparkles, Heart, Calendar } from 'lucide-react';

interface AboutProps {
  config: SiteConfig;
}

const About: React.FC<AboutProps> = ({ config }) => {
  const historyData = [
    {
      year: '2025',
      items: [
        '금촌유치원 특수반 집단 미술치료 진행',
        '신원도서관 연계 장애인 독서문화 프로그램 지원사업 음악치료 진행',
        '도봉 기적의 도서관 연계 장애전담 두발로 어린이집 음악치료 진행'
      ]
    },
    {
      year: '2024',
      items: [
        '공립 문발유치원 미술치료 진행',
        '못골도서관 연계 중학생 집단 음악치료 진행',
        '이음초병설유치원 특수반 음악치료 진행',
        '오금초등학교 WEE클래스 연계 집단 음악치료 진행',
        '색깔 악보 교재 1,2권 개발',
        '헤이뮤직 계이름 학습장 1,2권 출간'
      ]
    },
    {
      year: '2023',
      items: [
        '동부특수교육지원센터 모-아 애착형성 음악치료 진행',
        '한류유치원 특수반 음악치료 진행',
        '한류유치원 특수반 미술치료 진행',
        '소만유치원 특수학급 미술치료',
        '동작50 돌봄교사 역량강화 미술특강 진행'
      ]
    },
    {
      year: '2022',
      items: [
        '혜윰예술심리연구소로 상호 변경',
        '숲속자연 어린이집 미술치료',
        '원흥유치원 음악활동 진행',
        '풍산중학교 WEE클래스 연계 음악상담 진행',
        '효성초등학교 파견 음악특강 진행',
        '황룡초등학교 느린학습자 대상 집단 음악치료 진행',
        '마포가족센터 다문화 가정 음악치료 진행'
      ]
    },
    {
      year: '2021',
      items: [
        '개소 (두드림 음악치료 연구소로 등록)',
        '아동/청소년/개인/집단 상담 및 외부 기관 연계 상담 진행'
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="py-32 bg-white relative overflow-hidden border-b border-brand-wood/5">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-wood opacity-[0.03] rounded-l-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-[1px] bg-brand-wood"></div>
                <span className="text-[10px] font-bold text-brand-wood uppercase tracking-[0.4em]">Our Philosophy</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-charcoal leading-relaxed mb-10">
                마음을 '혜윰'하는<br />
                <span className="text-brand-wood italic font-light">치유의 공간</span>
              </h1>
              <div className="space-y-8 text-gray-500 leading-loose font-light text-base md:text-lg">
                <p>
                  '혜윰'은 '생각'을 뜻하는 우리 고유의 말입니다. 혜윰예술심리연구소는 현대인들이 일상 속에서 놓치기 쉬운 자신의 마음을 찬찬히 들여다보고, 
                  그 속의 보석 같은 이야기들을 예술이라는 그릇에 담아내는 과정을 돕습니다.
                </p>
                <p>
                  2021년 일산에서 문을 연 혜윰은 단순히 상담을 넘어, 예술이 가진 시각적·청각적 에너지를 통해 내면의 무의식을 발견하고 안전하게 감정을 해소하는 
                  <strong>'예술적 쉼터'</strong>를 지향합니다.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="flex flex-col space-y-3">
                    <Sparkles className="text-brand-wood" size={24} />
                    <h4 className="font-bold text-brand-charcoal">창의적 치유</h4>
                    <p className="text-xs">정형화된 상담을 넘어 예술로 소통합니다.</p>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <Heart className="text-brand-wood" size={24} />
                    <h4 className="font-bold text-brand-charcoal">따뜻한 공감</h4>
                    <p className="text-xs">당신만의 속도로 걷는 길에 동행합니다.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-[12px] border-white group">
                <img 
                  src="https://image2url.com/r2/default/images/1769498844767-23315846-7a0e-4957-af4b-e6db7785840c.jpg" 
                  alt="혜윰예술심리연구소 내부" 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-wood/5 mix-blend-multiply opacity-20"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-wood/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md p-6 shadow-xl border-l-4 border-brand-wood max-w-[240px]">
                <p className="text-[10px] font-bold text-brand-wood uppercase tracking-widest mb-2">Since 2021</p>
                <p className="text-sm font-serif text-brand-charcoal leading-relaxed">
                  일산 마두동에서 시작된<br/>마음 성장 공동체
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section (연혁) */}
      <section className="py-32 bg-brand-ivory/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <Calendar className="mx-auto text-brand-wood/30 mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-4">연구소 연혁</h2>
            <p className="text-sm text-brand-wood uppercase tracking-[0.3em] font-bold">The Journey of HEYUM</p>
            <div className="w-16 h-[1px] bg-brand-wood/20 mx-auto mt-8"></div>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-brand-wood/20"></div>

            <div className="space-y-20">
              {historyData.map((data, index) => (
                <div key={data.year} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Dot on line */}
                  <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 w-2 h-2 rounded-full bg-brand-wood z-10 shadow-[0_0_10px_rgba(184,151,126,0.5)]"></div>
                  
                  {/* Year Bubble */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} text-left md:text-right mb-6 md:mb-0`}>
                    <span className="text-4xl md:text-5xl font-serif font-bold text-brand-wood/20 leading-none inline-block transform hover:scale-110 transition-transform cursor-default">
                      {data.year}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-left' : 'md:pl-16 text-left'}`}>
                    <div className="bg-white p-8 shadow-sm border-t border-brand-wood/10 hover:shadow-xl transition-shadow duration-500 rounded-sm">
                      <ul className="space-y-4">
                        {data.items.map((item, i) => (
                          <li key={i} className="flex items-start text-sm md:text-base text-gray-500 font-light leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-brand-wood/40 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Footer Message */}
      <section className="py-24 bg-white border-t border-brand-wood/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-charcoal mb-8">
             혜윰예술심리연구소, 당신을 위한 따뜻한 예술의 문이 열려있습니다.
           </h3>
           <div className="w-12 h-[1px] bg-brand-wood/20 mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
