
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight, MessageCircle, Info, ShieldCheck, BarChart3 } from 'lucide-react';
import { SiteConfig } from '../types';

interface QnAProps {
  config: SiteConfig;
}

const QnA: React.FC<QnAProps> = ({ config }) => {
  // 강조 문구 컴포넌트: 밑줄 제거, 굵게만 처리
  const Emphasis = ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold text-brand-charcoal">{children}</strong>
  );

  return (
    <div className="py-24 bg-brand-ivory min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-[1px] bg-brand-wood"></div>
            <span className="text-xs font-bold text-brand-wood uppercase tracking-[0.4em]">F.A.Q</span>
            <div className="w-12 h-[1px] bg-brand-wood"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-6">자주 묻는 질문</h1>
          <p className="max-w-xl mx-auto text-gray-500 font-light leading-relaxed">
            혜윰예술심리연구소 상담에 대해 궁금하신 점들을 모았습니다.<br/>
            더 궁금하신 점은 언제든 편하게 문의주세요.
          </p>
        </div>

        <div className="space-y-12">
          {/* Question 1 */}
          <div className="bg-white p-8 md:p-12 shadow-sm border-l-4 border-brand-wood">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-charcoal mb-8 flex items-start">
              <span className="text-brand-wood mr-4 text-3xl italic opacity-50 font-sans">01.</span>
              상담받으려면 어떻게 해야하나요?
            </h2>
            <div className="space-y-10 text-gray-600 font-light leading-relaxed">
              <p className="bg-brand-wood/5 p-4 text-brand-charcoal/80 text-sm border-l-2 border-brand-wood/20">
                유선 상담이 가장 빠르고 간단합니다. 데스크 운영 시간이 종료된 후라면 다른 방법도 가능합니다.
              </p>

              <div className="space-y-6">
                <h3 className="flex items-center font-bold text-brand-charcoal border-b border-brand-wood/10 pb-2">
                  <div className="w-6 h-6 rounded-full bg-brand-wood text-white flex items-center justify-center text-[10px] mr-3">1</div>
                  전화로 예약
                </h3>
                <ul className="space-y-3 pl-9 list-disc list-outside text-sm">
                  <li><Emphasis>평일 오전 11시~오후 8시</Emphasis>까지 안내 데스크를 운영중입니다.</li>
                  <li><Emphasis>센터 대표 번호 ({config.contact.phone})</Emphasis>로 전화하셔서 <Emphasis>성함/성별/연령대/연락처/상담받고자 하시는 문제(간단히)/상담가능한 요일 시간대</Emphasis> 등을 대략 알려주시면 초기 상담을 예약해드립니다.</li>
                  <li>초기상담은 내담자가 미성년자일 경우 양육자 1분만 방문하시며 내담자가 성인일 경우 직접 방문해주시면 됩니다.</li>
                  <li>원하시는 상담사가 따로 있으실 경우, 미리 말씀해주시면 해당 선생님이 출근하시는 요일과 가능한 시간대를 맞추어 드립니다.</li>
                  <li>일정이 정해지면 <Emphasis>예약 날짜, 오시는 방법, 계좌번호를 카톡</Emphasis>으로 보내드립니다. <Emphasis>당일 취소나 노쇼 방지를 위해 초기상담료 또는 1회분의 상담료</Emphasis>를 선납받고 있습니다.</li>
                  <li><Emphasis>예약 전화를 주신 자정까지 예약금을 입금해주시면 예약이 확정됩니다.</Emphasis> 상담예약일 바로 전날 오후 6시까지만 취소/변경 고지를 해주신다면 예약금은 반환드리며, 전날 오후 6시~12시까지는 50% 환불, 예약 당일엔 예약금 환불이 어렵습니다.</li>
                </ul>
                <div className="pt-4 pl-9">
                  <a 
                    href={`tel:${config.contact.phone}`}
                    className="inline-flex items-center px-8 py-4 bg-brand-charcoal text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-wood transition-colors rounded-sm shadow-lg"
                  >
                    <Phone size={16} className="mr-3" /> 전화로 예약하기
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="flex items-center font-bold text-brand-charcoal border-b border-brand-wood/10 pb-2">
                  <div className="w-6 h-6 rounded-full bg-brand-wood text-white flex items-center justify-center text-[10px] mr-3">2</div>
                  온라인 예약하기를 통한 예약
                </h3>
                <p className="pl-9 text-sm">
                  홈페이지 메인화면과 카테고리에서 온라인 예약폼이 제공되고 있습니다. <Emphasis>성함/성별/연령대/연락처/상담받고자 하시는 문제(간단히)/상담가능한 요일 시간대</Emphasis>를 남기시면 원하시는 일정을 참고하여 전화드리겠습니다. 이후 절차는 [전화로 예약]때와 같습니다.
                </p>
                <div className="pt-4 pl-9">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 border border-brand-charcoal text-brand-charcoal text-xs font-bold uppercase tracking-widest hover:bg-brand-charcoal hover:text-white transition-all rounded-sm"
                  >
                    온라인 예약 바로가기 <ChevronRight size={16} className="ml-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white p-8 md:p-12 shadow-sm">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-charcoal mb-8 flex items-start">
              <span className="text-brand-wood mr-4 text-3xl italic opacity-50 font-sans">02.</span>
              첫 상담 전에 준비할 것이 있나요?
            </h2>
            <div className="space-y-8 text-sm text-gray-600 font-light leading-relaxed">
              <div className="flex items-start">
                <Info size={18} className="text-brand-wood mr-4 flex-shrink-0 mt-1" />
                <p>초기상담지를 보고 상담 선생님이 상담을 미리 준비하시기 때문에 부담없이 오셔도 되지만, 상담에서 무엇을 원하시는지 미리 생각해보고 오시면 도움이 됩니다.</p>
              </div>
              <div className="flex items-start">
                <MessageCircle size={18} className="text-brand-wood mr-4 flex-shrink-0 mt-1" />
                <p>아이 상담시 "맛있는거 사줄게", "재밌는 곳에 가보자"라고 이야기하시기보다 아이가 이해할 수 있는 수준으로 우리가 갈 곳과 할 일에 대해 설명해주시는 것이 좋습니다. <strong>"상담센터라는 곳에 갈건데 거기는 네가 좋아하는 것, 속상했던 일같이 뭐든 이야기하면 잘 들어주시는 선생님이 계시는 곳이야. 함께 이야기하고, 미술을 하거나 음악을 해보면 마음이 편안해질 수 있대"</strong>라고 이야기해주세요.</p>
              </div>
              <div className="flex items-start">
                <BarChart3 size={18} className="text-brand-wood mr-4 flex-shrink-0 mt-1" />
                <p>이전에 심리검사나 상담을 받으신 적이 있으시다면 초기상담때 가지고 오셔도 좋습니다. 이러한 자료들이 문제를 파악하는 시간을 단축시켜줄 수 있습니다.</p>
              </div>
              <p className="pl-8 italic text-brand-wood">별다른 준비가 없으셔도 괜찮습니다.</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white p-8 md:p-12 shadow-sm">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-charcoal mb-8 flex items-start">
              <span className="text-brand-wood mr-4 text-3xl italic opacity-50 font-sans">03.</span>
              상담을 받으면 기록이 남나요?
            </h2>
            <div className="space-y-6 text-sm text-gray-600 font-light leading-relaxed">
              <div className="flex items-start">
                <ShieldCheck size={20} className="text-brand-wood mr-4 flex-shrink-0 mt-1" />
                <p>정신과 진료는 국민건강보험 공단에 보험금 청구를 이유로 질병코드 등이 전산에 등록되지만, <strong>저희는 따로 주민번호를 요청드리지 않을뿐더러 온라인 전산망에 어떤 정보도 등록하지 않기 때문에</strong> 상담기록이 외부 기관과 공유될 수 없습니다.</p>
              </div>
              <p className="bg-gray-50 p-6 rounded text-xs leading-loose">
                단, 법원이나 경찰서 등에서 형사적인 문제로 상담기록을 요청할 경우는 내담자분의 프라이버시를 최대한 존중하는 선에서 아주 제한적인 범위의 정보를 제공할 수는 있습니다.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-white p-8 md:p-12 shadow-sm">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-brand-charcoal mb-8 flex items-start">
              <span className="text-brand-wood mr-4 text-3xl italic opacity-50 font-sans">04.</span>
              몇 번 받아야 좋아지나요?
            </h2>
            <div className="pl-12 text-sm text-gray-600 font-light leading-relaxed">
              <p className="mb-4">필요한 상담 회수는 원하시는 상담 목표, 현재 호소하시는 문제에 따라 다릅니다.</p>
              <p className="font-bold text-brand-charcoal">자세한 부분은 첫 상담 후 상담 선생님과 논의하시면 되겠습니다.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-12 bg-brand-charcoal text-white rounded-sm">
           <p className="text-brand-wood text-xs font-bold tracking-[0.3em] uppercase mb-4">More Questions?</p>
           <h3 className="text-2xl font-serif mb-8">궁금한 점이 더 있으신가요?</h3>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href={`tel:${config.contact.phone}`} className="px-10 py-4 bg-brand-wood hover:bg-brand-lightWood text-white transition-colors font-bold text-sm">전화 문의</a>
             <Link to="/contact" className="px-10 py-4 border border-white/20 hover:bg-white/10 transition-colors font-bold text-sm">상담 신청 폼 작성</Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
