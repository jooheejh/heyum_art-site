
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { SiteConfig } from '../types';

declare global {
  interface Window {
    naver: any;
  }
}

interface ContactProps {
  config: SiteConfig;
}

const Contact: React.FC<ContactProps> = ({ config }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 네이버 지도 렌더링 로직
    if (window.naver && window.naver.maps && mapContainer.current) {
      const { naver } = window;
      // 강송로 169 (한주프라자) 좌표: 37.6582, 126.7915
      const position = new naver.maps.LatLng(37.6582, 126.7915);

      const mapOptions = {
        center: position,
        zoom: 17,
        minZoom: 10,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT
        }
      };

      const map = new naver.maps.Map(mapContainer.current, mapOptions);

      // 마커 생성
      const marker = new naver.maps.Marker({
        position: position,
        map: map,
        title: '혜윰예술심리연구소'
      });

      // 정보창(InfoWindow) 생성
      const contentString = [
        '<div style="padding:15px; min-width:200px; line-height:1.5; font-family: sans-serif;">',
        '   <h4 style="margin:0 0 5px; color:#B8977E; font-size:14px; font-weight:bold;">혜윰예술심리연구소</h4>',
        '   <p style="margin:0; font-size:12px; color:#666;">경기도 고양시 일산동구 강송로 169<br />한주프라자 503호</p>',
        '</div>'
      ].join('');

      const infowindow = new naver.maps.InfoWindow({
        content: contentString,
        backgroundColor: "#fff",
        borderColor: "#B8977E",
        borderWidth: 1,
        anchorSize: new naver.maps.Size(10, 10),
        pixelOffset: new naver.maps.Point(0, -10)
      });

      infowindow.open(map, marker);

      // 지도 중심 재설정 (반응형 대응)
      const handleResize = () => map.setCenter(position);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

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

  const openNaverMap = () => {
    // 네이버 지도 장소 연결 (한주프라자 기준)
    const encodedName = encodeURIComponent("혜윰예술심리연구소");
    const url = `https://map.naver.com/v5/search/${encodedName}/place/126.7915,37.6582`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-24 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl font-serif font-bold mb-8">상담 예약 신청</h1>
            <p className="text-gray-500 mb-12 leading-relaxed">
              작은 고민이라도 좋습니다. 혼자 짊어지기 버거운 마음을 내려놓으세요. 
              아래 폼을 작성해 주시면 담당자가 확인 후 <strong>영업시간(평일 오전 11시 ~ 오후 8시)</strong> 내에 순차적으로 연락을 드립니다.
            </p>

            {status === 'success' ? (
              <div className="bg-white p-12 text-center shadow-sm border border-brand-wood/20 animate-in fade-in zoom-in duration-500">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-4">신청이 완료되었습니다</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
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
                    <label className="block text-xs font-bold uppercase tracking-widest text-brand-wood mb-2">성함</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 bg-white border border-brand-wood/10 focus:border-brand-wood focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-brand-wood mb-2">연락처</label>
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
                  <label className="block text-xs font-bold uppercase tracking-widest text-brand-wood mb-2">희망 상담 종류</label>
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
                  <label className="block text-xs font-bold uppercase tracking-widest text-brand-wood mb-2">문의 내용</label>
                  <textarea 
                    name="message"
                    rows={5} 
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3 bg-white border border-brand-wood/10 focus:border-brand-wood focus:outline-none transition-colors disabled:opacity-50"
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
                  className="w-full py-4 bg-brand-charcoal text-white font-bold flex items-center justify-center hover:bg-brand-wood transition-colors disabled:bg-gray-400"
                >
                  {status === 'submitting' ? (
                    <>전송 중... <Loader2 size={18} className="ml-2 animate-spin" /></>
                  ) : (
                    <>신청하기 <Send size={18} className="ml-2" /></>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-12">
            <div className="bg-white p-10 shadow-sm border border-brand-wood/5">
              <h3 className="text-xl font-serif font-bold mb-8">오시는 길</h3>
              <div className="space-y-6 text-sm">
                <div className="flex items-start">
                  <MapPin className="text-brand-wood mr-4 flex-shrink-0" size={20} />
                  <span>{config.contact.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-brand-wood mr-4 flex-shrink-0" size={20} />
                  <span>{config.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-brand-wood mr-4 flex-shrink-0" size={20} />
                  <span>{config.contact.email}</span>
                </div>
              </div>
            </div>

            {/* Naver Map Container */}
            <div className="space-y-4">
              <div 
                ref={mapContainer}
                className="w-full h-80 bg-gray-100 shadow-inner border border-brand-wood/10 relative overflow-hidden"
              >
                {!window.naver && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs px-10 text-center">
                    네이버 지도 로딩 중... <br/>(Client ID가 필요하거나 스크립트 로드 중입니다)
                  </div>
                )}
              </div>
              <button 
                onClick={openNaverMap}
                className="w-full py-3 bg-white border border-brand-wood/20 text-brand-charcoal text-xs font-bold uppercase tracking-widest flex items-center justify-center hover:bg-[#03C75A] hover:text-white transition-all shadow-sm group"
              >
                네이버 지도에서 크게보기 <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-brand-wood/5 p-8 border-l-4 border-brand-wood">
              <p className="text-xs font-bold text-brand-wood uppercase tracking-widest mb-2">Parking</p>
              <p className="text-[13px] text-brand-charcoal leading-relaxed">
                한주프라자 지상, 기계식 지하 주차장 이용이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
