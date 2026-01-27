
import React from 'react';
import { Therapist } from '../types';
import { Award, Briefcase, GraduationCap, User } from 'lucide-react';

interface TherapistsProps {
  therapists: Therapist[];
}

const Therapists: React.FC<TherapistsProps> = ({ therapists }) => {
  return (
    <div className="py-24 bg-brand-ivory min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-[1px] bg-brand-wood"></div>
            <span className="text-xs font-bold text-brand-wood uppercase tracking-[0.4em]">Our Experts</span>
            <div className="w-12 h-[1px] bg-brand-wood"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mb-6">치료사 소개</h1>
          <p className="max-w-2xl mx-auto text-gray-500 font-light leading-relaxed">
            혜윰의 전문가들은 풍부한 임상 경험과 예술적 감수성을 바탕으로,<br/>
            당신의 마음이 스스로 치유되는 과정을 따뜻하게 안내합니다.
          </p>
        </div>

        <div className="space-y-32">
          {therapists.map((therapist, index) => (
            <div 
              key={therapist.id} 
              className={`flex flex-col lg:flex-row gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Profile Image/Placeholder Section */}
              <div className="w-full lg:w-1/3 group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border-8 border-white bg-white flex items-center justify-center">
                  <div className="w-full h-full bg-brand-lightWood/5 flex items-center justify-center transition-all duration-700">
                    {therapist.imageUrl ? (
                      <img 
                        src={therapist.imageUrl} 
                        alt={therapist.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-brand-wood/20">
                        <User size={80} strokeWidth={1} />
                        <span className="text-[10px] mt-4 font-bold uppercase tracking-[0.3em]">Heyum Specialist</span>
                      </div>
                    )}
                  </div>
                  
                  {therapist.experience && (
                    <div className="absolute bottom-6 right-6 bg-brand-charcoal text-white px-6 py-3 shadow-xl z-10">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-wood mb-1">Clinical Experience</p>
                      <p className="text-sm font-serif">{therapist.experience}</p>
                    </div>
                  )}

                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-4 border-brand-wood/5 m-2 opacity-30"></div>
                </div>
              </div>

              {/* Profile Info Section */}
              <div className="w-full lg:w-2/3 space-y-12">
                <div>
                  <div className="flex items-end space-x-4 mb-4">
                    <h2 className="text-4xl font-serif font-bold text-brand-charcoal">{therapist.name}</h2>
                    <span className="text-xl text-brand-wood font-light italic pb-1">{therapist.title}</span>
                  </div>
                  <div className="inline-block px-4 py-1 bg-brand-wood/10 rounded-full text-brand-wood text-xs font-bold uppercase tracking-widest mb-8">
                    {therapist.specialty}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Education */}
                  <div className="space-y-6">
                    <h3 className="flex items-center text-sm font-bold text-brand-charcoal border-b border-brand-wood/20 pb-4">
                      <GraduationCap className="mr-3 text-brand-wood" size={20} /> 학력
                    </h3>
                    <ul className="space-y-3">
                      {therapist.education.map((edu, i) => (
                        <li key={i} className="text-sm text-gray-500 font-light leading-relaxed flex items-start">
                          <span className="w-1.5 h-1.5 bg-brand-wood/40 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Licenses */}
                  <div className="space-y-6">
                    <h3 className="flex items-center text-sm font-bold text-brand-charcoal border-b border-brand-wood/20 pb-4">
                      <Award className="mr-3 text-brand-wood" size={20} /> 자격 및 면허
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {therapist.licenses.map((lic, i) => (
                        <li key={i} className="text-sm text-gray-500 font-light leading-relaxed flex items-start">
                          <span className="w-1.5 h-1.5 bg-brand-wood/40 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {lic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career */}
                  <div className="md:col-span-2 space-y-6 pt-4">
                    <h3 className="flex items-center text-sm font-bold text-brand-charcoal border-b border-brand-wood/20 pb-4">
                      <Briefcase className="mr-3 text-brand-wood" size={20} /> 주요 경력
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                      {therapist.career.map((car, i) => (
                        <li key={i} className="text-sm text-gray-500 font-light leading-relaxed flex items-start">
                          <span className="w-1.5 h-1.5 bg-brand-wood/40 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {car}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Therapists;
