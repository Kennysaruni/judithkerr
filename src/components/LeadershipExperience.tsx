import { type FC } from 'react';
import { portfolioData, type LeadershipRole } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const LeadershipExperience: FC = () => {
  const { leadershipExperience, priorLeadershipEngagements } = portfolioData;

  return (
    <section id="leadership" className="border-b border-[#E5E5E0] bg-[#FBFBF9] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#E5E5E0]">
            <div className="lg:col-span-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block font-medium">
                Institutional Governance & Operations
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#0E1116] font-normal tracking-tight">
                Executive Appointments & Frontline Leadership
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="font-sans text-base text-[#57595D] leading-relaxed">
                Proven stewardship across high-acuity crisis environments, multi-site housing portfolios, and inter-agency municipal partnerships across the Greater Toronto Area.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Primary Executive Roles (Clean Editorial Timeline Rows) */}
        <div className="divide-y divide-[#E5E5E0]">
          {leadershipExperience.map((role: LeadershipRole, idx: number) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 group hover:bg-[#F6F2EC]/20 transition-colors duration-300 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xs">
                {/* Left Meta: Period, Organization & Location */}
                <div className="lg:col-span-4 space-y-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7853] font-medium block">
                    {role.period}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0E1116] leading-snug group-hover:text-[#9B7853] transition-colors duration-300">
                    {role.organization}
                  </h3>
                  <div className="font-mono text-xs text-[#8A8880] flex items-center gap-2">
                    <span>{role.location}</span>
                  </div>
                </div>

                {/* Right Details: Role Title, Mandate & Key Accomplishments */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h4 className="font-sans text-lg sm:text-xl font-medium text-[#0E1116]">
                      {role.role}
                    </h4>
                    <p className="font-mono text-xs text-[#57595D] mt-1 tracking-wide">
                      Mandate: {role.scope}
                    </p>
                  </div>

                  <ul className="space-y-3 font-sans text-sm text-[#57595D]">
                    {role.responsibilities.map((resp: string, rIdx: number) => (
                      <li key={rIdx} className="flex items-start gap-3 group/item">
                        <span className="w-1.5 h-1.5 bg-[#9B7853] mt-2 shrink-0 transition-transform duration-300 group-hover/item:scale-150"></span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Frontline Community Operations Documentary Card */}
                  {idx === 0 && (
                    <div className="mt-8 pt-6 border-t border-[#E5E5E0]/60 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-6 bg-[#F5F5F0] border border-[#E5E5E0] p-2.5 shadow-xs hover:border-[#9B7853]/40 transition-colors duration-500 shimmer-hover group/photo">
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1116]">
                          <img
                            src="/IMG-20260917-WA0014.jpg"
                            alt="Frontline Community Hub Resident Gathering & Assembly"
                            className="w-full h-full object-cover object-[center_40%] transition-transform duration-700 ease-out group-hover/photo:scale-[1.03]"
                            loading="lazy"
                          />
                          <div className="absolute top-2.5 left-2.5 bg-[#0E1116]/85 backdrop-blur-xs text-[#FBFBF9] px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest border border-white/15">
                            Frontline Hub Operations
                          </div>
                        </div>
                        <p className="font-sans text-xs text-[#57595D] pt-2.5 leading-relaxed italic">
                          Community hub gathering: facilitating direct resident engagement, trauma stabilization, and collaborative support services.
                        </p>
                      </div>

                      <div className="md:col-span-6 space-y-3 font-sans text-xs sm:text-sm text-[#57595D]">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#9B7853] font-semibold block">
                          On-the-Ground Stabilization & Resident Trust
                        </span>
                        <p className="leading-relaxed">
                          Operating in high-density neighbourhood hubs requires authentic frontline presence. Facilitating community assemblies bridges inter-agency resources, harm reduction pathways, and trauma-informed support for priority populations.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Select Prior Frontline Engagements Grid */}
        <ScrollReveal delay={200}>
          <div className="mt-16 pt-12 border-t border-[#E5E5E0]">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8880] block mb-2 font-medium">
                Foundational Frontline Leadership
              </span>
              <h3 className="font-serif text-2xl text-[#0E1116]">
                Select Prior Crisis & Supportive Housing Appointments
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {priorLeadershipEngagements.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-[#E5E5E0] bg-[#FBFBF9] hover:border-[#9B7853] transition-all duration-300 hover:-translate-y-1 hover:shadow-sm flex flex-col justify-between space-y-4 group cursor-default"
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#9B7853] block mb-1 font-medium">
                      {item.domain}
                    </span>
                    <h4 className="font-serif text-lg text-[#0E1116] font-medium leading-snug group-hover:text-[#9B7853] transition-colors">
                      {item.organization}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-[#57595D] pt-2 border-t border-[#E5E5E0]/60">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
