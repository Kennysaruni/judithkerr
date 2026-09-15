import { portfolioData, type GovernanceAppointment } from '../data/portfolioData';

export const CivicGovernance: React.FC = () => {
  const { civicAppointments } = portfolioData;

  return (
    <section id="governance" className="border-b border-[#E5E5E0] bg-[#FBFBF9] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#E5E5E0]">
          <div className="lg:col-span-6 space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block">
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

        {/* Governance Cards (Editorial Layout with 1px Stone Borders, no pill badges, no left icon boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {civicAppointments.map((item: GovernanceAppointment, index: number) => (
            <div
              key={index}
              className="border border-[#E5E5E0] p-8 sm:p-10 bg-[#FBFBF9] flex flex-col justify-between space-y-8 hover:border-[#9B7853] transition-colors duration-200"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};
