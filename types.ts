
export interface Therapist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  education: string[];
  licenses: string[];
  career: string[];
  imageUrl: string;
}

export interface SiteConfig {
  name: string;
  slogan: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    kakao: string;
    instagram: string;
    blog: string;
  };
  theme: {
    mainColor: string;
    pointColor: string;
    textColor: string;
    fontFamily: 'serif' | 'sans';
  };
}

export interface Program {
  id: string;
  title: string;
  description: string;
  target: string;
  imageUrl: string;
}

// Added missing Post interface to fix import errors in Journal.tsx and AdminDashboard.tsx
export interface Post {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}
