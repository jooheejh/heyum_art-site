
import { SiteConfig, Program, Therapist } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  name: "혜윰예술심리연구소",
  slogan: "혜윰: '생각'의 순 우리 말, 당신의 마음을 예술로 빚어냅니다.",
  description: "우리는 예술과 선율을 통해 당신의 이야기에 귀를 기울입니다. 전문적인 예술 심리 상담을 통해 잊고 있던 내면의 평화를 다시 발견해보세요.",
  contact: {
    phone: "031-811-2274",
    email: "heyum_art@naver.com",
    address: "경기도 고양시 일산동구 마두동 강송로 169, 한주프라자 503호",
    kakao: "https://pf.kakao.com/",
    instagram: "https://www.instagram.com/heyum.therapy/",
    blog: "https://blog.naver.com/heyum_art"
  },
  theme: {
    mainColor: "#FFFFFF",
    pointColor: "#B8977E",
    textColor: "#333333",
    fontFamily: 'serif'
  }
};

export const INITIAL_THERAPISTS: Therapist[] = [
  {
    id: "t1",
    name: "박주희",
    title: "소장",
    specialty: "음악치료, 부모상담",
    experience: "", // 경력 배지 지움
    education: [
      "클래식 작곡 전공",
      "경기대학교 대체의학대학원 음악치료학과 석사 졸업"
    ],
    licenses: [
      "음악심리상담전문가",
      "아동심리상담사 1급",
      "가족심리상담사 1급",
      "놀이심리상담사 1급",
      "발달평가지도사 1급",
      "발달재활서비스 제공인력"
    ],
    career: [
      "혜윰예술심리연구소 운영",
      "혜윰예술심리연구소 음악치료사",
      "전) 소아과 발달재활 음악치료사",
      "외부 음악치료 특강 다수 진행"
    ],
    imageUrl: ""
  },
  {
    id: "t2",
    name: "권도경",
    title: "미술치료사",
    specialty: "미술치료, 부모상담",
    experience: "2026년 기준 15년",
    education: [
      "요업디자인전공",
      "홍익대학교 교육대학원 미술치료학과"
    ],
    licenses: [
      "미술심리상담사",
      "색채심리상담사"
    ],
    career: [
      "혜윰예술심리연구소 미술치료사",
      "외부 강의 미술치료사",
      "전) 개인 미술치료실 운영",
      "초등학교, 중학교 정서지원 미술치료 다수"
    ],
    imageUrl: ""
  },
  {
    id: "t3",
    name: "한은수",
    title: "미술치료사",
    specialty: "미술치료, 부모상담",
    experience: "2026년 기준 12년",
    education: [
      "조형예술대학 섬유예술학과 졸업",
      "서울여자대학교 특수치료전문대학원 예술치료학 석사 졸업",
      "(석사학위청구논문명: 청각장애 여성의 미술치료 체험)"
    ],
    licenses: [
      "미술심리상담사 1급",
      "아동심리상담사 1급",
      "방과후지도사 1급",
      "발달재활서비스 제공인력"
    ],
    career: [
      "혜윰예술심리연구소 미술치료사",
      "외부 강의 미술치료사",
      "전) 국립 정신병원 노인병동, 성인 낮병동 미술치료",
      "전) 국립정신병원 여성병동, 아동청소년병동 미술치료",
      "초등학교, 중학교 정서지원 미술치료 다수"
    ],
    imageUrl: ""
  }
];

export const INITIAL_PROGRAMS: Program[] = [
  {
    id: "p0",
    title: "초기상담",
    description: "본격적인 상담이나 치료를 시작하기 전, 현재 겪고 있는 어려움과 심리적 상태를 전반적으로 파악하는 필수 첫 단계입니다. 문항지를 작성하며, 보다 집중도 있고 깊이 있는 상담 방향 설정을 위해 양육자 1인만 방문하여 진행합니다.",
    target: "신규 상담 신청자 및 보호자",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p2",
    title: "아동/청소년 프로그램",
    description: "성장기 아이들의 정서 발달과 사회성을 예술로 돕습니다. 아이들의 눈높이에서 마음을 읽어주는 전문적인 예술 치료 세션입니다.",
    target: "유아 및 청소년",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p1",
    title: "개인 예술 상담",
    description: "1:1 맞춤형 심리 분석 및 예술 치료 세션입니다. 오롯이 나에게 집중하며 내면의 목소리를 종이와 캔버스 위에 기록하는 시간입니다.",
    target: "성인, 직장인, 주부",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p4",
    title: "특수 예술 교육",
    description: "장애 아동들을 위한 맞춤형 피아노 레슨 및 예술 교육입니다. 음악의 선율을 통해 세상과 소통하는 법을 배웁니다.",
    target: "장애 아동 및 청소년",
    imageUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p3",
    title: "집단 상담 테라피",
    description: "함께 나누는 예술 활동을 통해 관계의 회복을 경험합니다. 학교, 기관 특강을 통해 소통과 공감을 실천합니다.",
    target: "유치원, 학교, 기관 특강",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200"
  }
];
