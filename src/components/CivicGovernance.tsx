import { portfolioData, type GovernanceAppointment } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const CivicGovernance: React.FC = () => {
  const { civicAppointments } = portfolioData;

  return (
    <section id="governance" className="border-b border-[#E5E5E0] bg-[#FBFBF9] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#E5E5E0]">
            <div className="lg:col-span-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block font-medium">
                Fiduciary & Civic Stewardship
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#0E1116] font-normal tracking-tight">
                Civic Appointments & Board Governance
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="font-sans text-base text-[#57595D] leading-relaxed">
                Providing strategic oversight, equity auditing, and fiduciary governance across municipal advisory panels, health boards, and tenant advocacy councils.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Governance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {civicAppointments.map((item: GovernanceAppointment, index: number) => (
            <ScrollReveal key={index} delay={index * 140}>
              <div className="border border-[#E5E5E0] p-8 sm:p-10 bg-[#FBFBF9] flex flex-col justify-between space-y-8 hover:border-[#9B7853] hover:-translate-y-1 hover:shadow-sm transition-all duration-300 h-full group">
              <div className="space-y-6">
                <div className="flex items-baseline justify-between border-b border-[#E5E5E0] pb-4">
                  <span className="font-mono text-xs text-[#9B7853] tracking-widest font-semibold uppercase">
                    0{index + 1}
                  </span>
                  <span className="font-mono text-[11px] text-[#8A8880] tracking-wider uppercase">
                    {item.scope}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#0E1116] leading-snug">
                    {item.organization}
                  </h3>
                  <div className="space-y-1 font-sans">
                    <p className="text-sm font-semibold text-[#0E1116]">
                      {item.role}
                    </p>
                    <p className="font-mono text-xs text-[#57595D]">
                      {item.body}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#57595D] leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E5E0]/60 flex items-center justify-between font-mono text-[11px] text-[#8A8880]">
                <span>Governance Mandate</span>
                <span className="text-[#0E1116] font-medium">Active Record</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Civic & Governance Roundtable Photographic Dispatch */}
      <ScrollReveal delay={300}>
        <div className="mt-14 pt-10 border-t border-[#E5E5E0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 bg-[#F5F5F0] border border-[#E5E5E0] p-3 shadow-xs hover:border-[#9B7853]/40 transition-colors duration-500 shimmer-hover group">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1116]">
              <img
                src="/IMG-20260917-WA0012.jpg"
                alt="Judith Kerr convening in civic governance and advisory delegation"
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#0E1116]/85 backdrop-blur-xs text-[#FBFBF9] px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest border border-white/15">
                Civic Delegation & Roundtable Oversight
              </div>
            </div>
            <p className="font-sans text-xs text-[#57595D] pt-2.5 leading-relaxed italic">
              Judith Kerr convening with governance partners, municipal advisory delegates, and community representatives to uphold accountability and equity.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7853] font-semibold block">
                Board-Level Stewardship in Action
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0E1116]">
                Bridging Grassroots Reality with Institutional Policy
              </h3>
            </div>
            <p className="font-sans text-sm text-[#57595D] leading-relaxed">
              Effective governance demands more than procedural compliance—it requires active listening, cultural competence, and the courage to advocate for vulnerable tenants and community members at institutional tables.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-[#9B7853] pl-4 py-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8880] block">Tenant Equity</span>
                <p className="font-sans text-xs text-[#33373D] mt-1">Ensuring municipal and social housing decisions are accountable to marginalized residents.</p>
              </div>
              <div className="border-l-2 border-[#9B7853] pl-4 py-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8880] block">Fiduciary Rigor</span>
                <p className="font-sans text-xs text-[#33373D] mt-1">Safeguarding non-profit allocations for direct community enrichment and capacity.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
      </div>
    </section>
  );
};
