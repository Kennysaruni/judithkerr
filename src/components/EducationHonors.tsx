import { type FC } from 'react';
import { Award } from 'lucide-react';
import { portfolioData, type Credential } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const EducationHonors: FC = () => {
  const { educationAndHonors } = portfolioData;

  const academic = educationAndHonors.filter((c) => c.type === 'academic');
  const honorsAndDesignations = educationAndHonors.filter((c) => c.type !== 'academic');

  return (
    <section id="credentials" className="border-b border-[#E5E5E0] bg-[#FBFBF9] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-[#E5E5E0]">
            <div className="lg:col-span-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block font-bold">
                Academic Rigour & Designations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1116] font-bold tracking-tight">
                Education, Honors & Official Designations
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="font-sans text-base text-[#1A1D20] font-bold leading-relaxed">
                Foundational grounding in sociological theory, family therapy systems, Caribbean diaspora studies, and advanced community chaplaincy — complemented by many more professional certificates, specialized accreditations, and civic awards.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
          {/* Left Column: Academic Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal delay={100}>
              <div className="border-b border-[#E5E5E0] pb-3 flex items-baseline justify-between">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-bold">
                  Higher Education & Degrees
                </h3>
                <span className="font-mono text-[11px] text-[#57595D] font-bold">Academic Registry</span>
              </div>
            </ScrollReveal>

            <div className="divide-y divide-[#E5E5E0]">
              {academic.map((item: Credential, idx: number) => (
                <div key={idx} className="py-4 space-y-1.5 first:pt-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-lg sm:text-xl text-[#0E1116] font-bold">
                      {item.degreeOrTitle}
                    </h4>
                    <span className="font-mono text-xs text-[#9B7853] font-bold shrink-0">
                      {item.yearOrStatus}
                    </span>
                  </div>
                  <p className="font-sans text-sm font-bold text-[#57595D]">
                    {item.institution}
                  </p>
                  {item.note && (
                    <p className="font-sans text-xs text-[#1A1D20] font-semibold pt-0.5">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Convocation Archival Documentary Feature */}
            <ScrollReveal delay={150}>
              <div className="pt-2">
                <div className="bg-[#F5F5F0] border border-[#E5E5E0] p-3 shadow-xs hover:border-[#9B7853]/40 transition-colors duration-500 shimmer-hover group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1116]">
                    <img
                      src="/IMG-20260917-WA0015.jpg"
                      alt="Canada Christian College Master of Christian Counselling Convocation Ceremony — Judith E. Kerr"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#0E1116]/90 backdrop-blur-xs text-[#FBFBF9] px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest border border-white/20 font-bold">
                      Official Degree Conferral
                    </div>
                  </div>

                  <div className="pt-2.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#9B7853] font-bold">
                        Convocation Ceremony • M.C.C.
                      </span>
                      <span className="font-mono text-[10px] text-[#57595D] font-bold">Canada Christian College</span>
                    </div>
                    <p className="font-serif text-sm font-bold text-[#0E1116] group-hover:text-[#9B7853] transition-colors">
                      Master of Christian Counselling — Major in Marriage & Family
                    </p>
                    <p className="font-sans text-xs text-[#1A1D20] font-semibold leading-relaxed">
                      Official stage conferral and presentation of diploma certificate with collegiate faculty leadership.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Honors, Awards & Professional Designations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-b border-[#E5E5E0] pb-3 flex items-baseline justify-between">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-bold">
                Honors & Specialized Designations
              </h3>
              <span className="font-mono text-[11px] text-[#57595D] font-bold">Accreditations</span>
            </div>

            <div className="divide-y divide-[#E5E5E0]">
              {honorsAndDesignations.map((item: Credential, idx: number) => (
                <div key={idx} className="py-4 space-y-1.5 first:pt-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-lg sm:text-xl text-[#0E1116] font-bold">
                      {item.degreeOrTitle}
                    </h4>
                    <span className="font-mono text-xs text-[#9B7853] font-bold shrink-0">
                      {item.yearOrStatus}
                    </span>
                  </div>
                  <p className="font-sans text-sm font-bold text-[#57595D]">
                    {item.institution}
                  </p>
                  {item.note && (
                    <p className="font-sans text-xs text-[#1A1D20] font-semibold pt-0.5">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Certificates & Distinctions Card */}
            <div className="border border-[#E5E5E0] bg-[#F5F5F0]/70 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-[#9B7853]">
                <Award className="w-4 h-4 shrink-0" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#0E1116]">
                  Extensive Accreditations & Honors
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#1A1D20] font-semibold leading-relaxed">
                In addition to her formal degrees and listed designations, Judith Kerr has earned many more professional certificates, executive training credentials, and community honors recognizing her decades of frontline crisis intervention, trauma-informed care, pastoral ministry, and non-profit governance.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px] text-[#1A1D20] font-bold">
                <span className="px-2 py-1 bg-white border border-[#E5E5E0]">Crisis De-escalation</span>
                <span className="px-2 py-1 bg-white border border-[#E5E5E0]">Trauma-Informed Care</span>
                <span className="px-2 py-1 bg-white border border-[#E5E5E0]">Community Advocacy Awards</span>
                <span className="px-2 py-1 bg-white border border-[#E5E5E0]">Pastoral Care & Chaplaincy</span>
              </div>
            </div>

            {/* Quote / Editorial Vignette */}
            <div className="border border-[#E5E5E0] p-5 sm:p-6 bg-[#F6F2EC]/40 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9B7853] block font-bold">
                Academic & Community Synthesis
              </span>
              <p className="font-serif italic text-base text-[#0E1116] font-bold leading-relaxed">
                &ldquo;True community restoration occurs when rigorous systemic analysis aligns with deep empathetic presence and sustainable grassroots economic engines.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
