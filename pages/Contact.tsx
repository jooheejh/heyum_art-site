
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle, Clock, MessageSquare, CalendarCheck, Heart } from 'lucide-react';
import { SiteConfig } from '../types';

interface ContactProps {
  config: SiteConfig;
}

const Contact: React.FC<ContactProps> = ({ config }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/meegpezg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const steps = [
    {
      icon: <MessageSquare size={20} />,
      title: "상담 신청",
      desc: "홈페이지 예약폼 작성 또는 대표번호로 전화를 주시면 확인 후 연락드립니다."
    },
    {
      icon: <Clock size={20} />,
      title: "일정 조율",
      desc: "내담자분의 상황과 치료사 선생님의 일정을 고려하여 최적의 시간을 조율합니다."
    },
    {
      icon: <CalendarCheck size={20} />,
      title: "예약 확정",
      desc: "안내드린 계좌로 초기상담료 입금이 확인되면 최종적으로 예약이 확정됩니다."
    },
    {
      icon: <Heart size={20} />,
      title: "첫 만남",
      desc: "예약된 시간에 방문하여 마음을 나누는 첫 발걸음을 함께 뗍니다."
    }
  ];

  return (
    <div className="py-24 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column: Form */}
          <div>
            <div className="mb-12">
              <h1 className="text-4xl font-serif font-bold mb-6">상담 예약 신청</h1>
              <p className="text-gray-500 leading-relaxed font-light">
                작은 고민이라도 좋습니다. 혼자 짊어지기 버거운 마음을 내려놓으세요. <br/>
                아래 폼을 작성해 주시면 담당자가 확인 후 <strong>영업시간(평일 오전 11시 ~ 오후 8시)</strong> 내에 순차적으로 연락을 드립니다.
              </p>
            </div>

            {status === 'success' ? (
              <div className="bg-white p-12 text-center shadow-sm border border-brand-wood/20 animate-in fade-in zoom-in duration-500">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4">신청이 완료되었습니다</h3>
                <p className="text-gray-500 mb-8 leading-relaxed font-light">
                  소중한 문의 감사합니다. 확인 후 남겨주신 연락처로 곧 연락드리겠습니다.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-brand-charcoal text-white text-sm font-bold uppercase tracking-widest hover:bg-brand-wood transition-colors"
                >
                  새로 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value={`[혜윰예술심리연구소] 새로운 상담 예약 신청 - ${new Date().toLocaleDateString()}`} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-wood mb-2">성함</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 bg-white border border-brand-wood/10 focus:border-brand-wood focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-wood mb-2">연락처</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      disabled={status === 'submitting'}
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-3 bg-white border border-brand-wood/10 focus:border-brand-wood focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-wood mb-2">희망 상담 종류</label>
                  <select 
                    name="program_type"
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 bg-white border border-brand-wood/10 focus:border-brand-wood focus:outline-none transition-colors disabled:opacity-50"
                  >
                    <option value="">선택해주세요</option>
                    <option value="초기 상담">초기 상담</option>
                    <option value="개인 예술 상담">개인 예술 상담</option>
                    <option value="아동/청소년 프로그램">아동/청소년 프로그램</option>
                    <option value="특수 예술 교육">특수 예술 교육</option>
                    <option value="집단 상담 테라피">집단 상담 테라피</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-wood mb-2">문의 내용</label>
                  <textarea 
                    name="message"
                    rows={5} 
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 bg-white border border-brand-wood/10 focus:border-brand-wood focus:outline-none transition-colors disabled:opacity-50 text-sm"
                    placeholder="성함 / 성별 / 연령대 / 상담받고자 하시는 문제(간단히) / 초기 상담, 세션가능한 요일 시간대를 적어주세요."
                  ></textarea>
                </div>
                
                {status === 'error' && (
                  <div className="flex items-center text-red-500 text-sm bg-red-50 p-4 border border-red-100">
                    <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                    <span>전송 중 오류가 발생했습니다. 잠시 후 다시 시도하시거나 전화로 문의 부탁드립니다.</span>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-brand-charcoal text-white font-bold flex items-center justify-center hover:bg-brand-wood transition-colors disabled:bg-gray-400 shadow-xl"
                >
                  {status === 'submitting' ? (
                    <>전송 중... <Loader2 size={18} className="ml-2 animate-spin" /></>
                  ) : (
                    <>상담 예약 신청하기 <Send size={18} className="ml-2" /></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Process & Contact Info */}
          <div className="space-y-12">
            {/* Consultation Process Section */}
            <div className="bg-white p-10 shadow-sm border border-brand-wood/5">
              <h3 className="text-xl font-serif font-bold mb-10 pb-4 border-b border-brand-wood/10">상담 진행 절차</h3>
              <div className="space-y-10">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="w-10 h-10 rounded-full bg-brand-wood/10 flex items-center justify-center text-brand-wood mr-5 flex-shrink-0 group-hover:bg-brand-wood group-hover:text-white transition-all duration-500">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-charcoal mb-2 text-sm">{step.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-brand-charcoal text-white p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-wood/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <h3 className="text-xl font-serif font-bold mb-8 text-brand-wood">안내 및 오시는 길</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="text-brand-wood mr-5 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-[10px] font-bold text-brand-wood uppercase tracking-widest mb-1">Address</p>
                    <p className="text-sm font-light leading-relaxed">{config.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-brand-wood mr-5 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-[10px] font-bold text-brand-wood uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-xl font-mono font-bold">{config.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-brand-wood mr-5 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-[10px] font-bold text-brand-wood uppercase tracking-widest mb-1">Email</p>
                    <p className="text-sm font-light">{config.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-brand-wood/5 p-8 border-l-4 border-brand-wood">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-brand-wood text-white flex items-center justify-center text-xs font-bold mr-3">P</div>
                <p className="text-xs font-bold text-brand-wood uppercase tracking-widest">Parking Info</p>
              </div>
              <p className="text-[13px] text-brand-charcoal leading-relaxed font-light">
                한주프라자 지상 및 기계식 지하 주차장을 무료로 이용하실 수 있습니다. <br/>
                대중교통 이용 시 <strong>마두역 6번 출구</strong>에서 도보로 약 5분 거리에 위치해 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
