import { type FC } from 'react';
import { portfolioData, type Credential } from '../data/portfolioData';

export const EducationHonors: FC = () => {
  const { educationAndHonors } = portfolioData;

  const academic = educationAndHonors.filter((c) => c.type === 'academic');
  const honorsAndDesignations = educationAndHonors.filter((c) => c.type !== 'academic');

  return (
    <section id="credentials" className="border-b border-[#E5E5E0] bg-[#FBFBF9] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#E5E5E0]">
          <div className="lg:col-span-6 space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block">
              Academic Rigour & Designations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0E1116] font-normal tracking-tight">
              Education, Honors & Official Designations
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="font-sans text-base text-[#57595D] leading-relaxed">
              Foundational grounding in sociological theory, family therapy systems, Caribbean diaspora studies, and advanced community chaplaincy.
            </p>
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12">
          {/* Left Column: Academic Credentials */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-b border-[#E5E5E0] pb-4 flex items-baseline justify-between">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                Higher Education & Degrees
              </h3>
              <span className="font-mono text-[11px] text-[#8A8880]">Academic Registry</span>
            </div>

            <div className="divide-y divide-[#E5E5E0]">
              {academic.map((item: Credential, idx: number) => (
                <div key={idx} className="py-6 space-y-2 first:pt-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-xl sm:text-2xl text-[#0E1116]">
                      {item.degreeOrTitle}
                    </h4>
                    <span className="font-mono text-xs text-[#9B7853] shrink-0">
                      {item.yearOrStatus}
                    </span>
                  </div>
                  <p className="font-sans text-sm font-medium text-[#57595D]">
                    {item.institution}
                  </p>
                  {item.note && (
                    <p className="font-sans text-xs text-[#8A8880] pt-1">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Honors, Awards & Professional Designations */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-b border-[#E5E5E0] pb-4 flex items-baseline justify-between">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                Honors & Specialized Designations
              </h3>
              <span className="font-mono text-[11px] text-[#8A8880]">Accreditations</span>
            </div>

            <div className="divide-y divide-[#E5E5E0]">
              {honorsAndDesignations.map((item: Credential, idx: number) => (
                <div key={idx} className="py-6 space-y-2 first:pt-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-xl sm:text-2xl text-[#0E1116]">
                      {item.degreeOrTitle}
                    </h4>
                    <span className="font-mono text-xs text-[#9B7853] shrink-0">
                      {item.yearOrStatus}
                    </span>
                  </div>
                  <p className="font-sans text-sm font-medium text-[#57595D]">
                    {item.institution}
                  </p>
                  {item.note && (
                    <p className="font-sans text-xs text-[#8A8880] pt-1">
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Quote / Editorial Vignette */}
            <div className="border border-[#E5E5E0] p-6 sm:p-8 bg-[#F6F2EC]/40 space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9B7853] block">
                Academic & Community Synthesis
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#0E1116] leading-relaxed">
                &ldquo;True community restoration occurs when rigorous systemic analysis aligns with deep empathetic presence and sustainable grassroots economic engines.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
