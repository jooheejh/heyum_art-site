
import React from 'react';
import { Link } from 'react-router-dom';
import { Program } from '../types';

interface ProgramsProps {
  programs: Program[];
}

const Programs: React.FC<ProgramsProps> = ({ programs }) => {
  // 프로그램별 커스텀 상세 정보 정의
  const getProgramDetails = (title: string) => {
    switch (title) {
      case '초기상담':
        return {
          time: '60분 내외 (문항지 작성 시간 포함)',
          method: '대면 (미성년자 상담시 양육자 1인만 방문)',
          note: '상담 예약 필수'
        };
      case '아동/청소년 프로그램':
        return {
          time: '주 1회, 40분 세션, 10분 부모상담 (협의가능)',
          method: '대면',
          subject: '음악치료 / 미술치료',
          note: '모든 도구는 연구소에서 제공합니다.'
        };
      case '개인 예술 상담':
        return {
          time: '주 1회, 50분 세션',
          method: '대면',
          subject: '음악치료 / 미술치료',
          note: '모든 도구는 연구소에서 제공합니다.'
        };
      case '집단 상담 테라피':
        return {
          time: '40분 세션 (시간, 횟수 협의 가능)',
          method: '대면',
          subject: '음악치료 / 미술치료',
          note: '모든 도구는 연구소에서 제공합니다.'
        };
      case '특수 예술 교육':
        return {
          time: '주 1회, 50분 수업',
          method: '대면',
          subject: '피아노 레슨 / 미술 교육',
          note: '모든 도구는 연구소에서 제공합니다.'
        };
      default:
        return {
          time: '협의 후 결정',
          method: '대면',
          note: '연구소 제공'
        };
    }
  };

  return (
    <div className="py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-serif font-bold mb-6">프로그램</h1>
          <p className="max-w-2xl mx-auto text-gray-500">
            개인부터 기관까지, 생애 주기와 목적에 맞는 최적화된 예술 치료 과정을 제안합니다.
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((program, idx) => {
            const details = getProgramDetails(program.title) as any;
            return (
              <div 
                key={program.id} 
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white shadow-sm overflow-hidden`}
              >
                <div className="md:w-1/2 overflow-hidden">
                  <img 
                    src={program.imageUrl} 
                    alt={program.title} 
                    className="w-full h-full object-cover min-h-[450px] hover:scale-105 transition-transform duration-1000" 
                  />
                </div>
                <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-brand-wood uppercase tracking-[0.4em] mb-4">{program.target}</span>
                  <h2 className="text-3xl font-serif font-bold mb-6">{program.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {program.description}
                  </p>
                  <ul className="space-y-4 mb-10 border-t border-brand-wood/10 pt-8">
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-brand-wood rounded-full mr-4"></span>
                      <strong className="w-20 flex-shrink-0 text-brand-charcoal">시간</strong>
                      <span>{details.time}</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-brand-wood rounded-full mr-4"></span>
                      <strong className="w-20 flex-shrink-0 text-brand-charcoal">방식</strong>
                      <span>{details.method}</span>
                    </li>
                    {details.subject && (
                      <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-brand-wood rounded-full mr-4"></span>
                        <strong className="w-20 flex-shrink-0 text-brand-charcoal">분야</strong>
                        <span>{details.subject}</span>
                      </li>
                    )}
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-brand-wood rounded-full mr-4"></span>
                      <strong className="w-20 flex-shrink-0 text-brand-charcoal">안내사항</strong>
                      <span>{details.note}</span>
                    </li>
                  </ul>
                  <Link 
                    to="/contact"
                    className="px-10 py-5 bg-brand-charcoal text-white font-bold w-fit hover:bg-brand-wood transition-all shadow-lg hover:-translate-y-1 text-center"
                  >
                    상담 문의하기
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Programs;
