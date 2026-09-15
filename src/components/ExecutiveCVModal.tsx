import { type FC } from 'react';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ExecutiveCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveCVModal: FC<ExecutiveCVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { profile, strategicInitiatives, leadershipExperience, civicAppointments, educationAndHonors } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0E1116]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in"
    >
      <div className="relative w-full max-w-4xl bg-[#FBFBF9] text-[#0E1116] border border-[#E5E5E0] shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Sticky Action Toolbar (Hidden during print) */}
        <div className="sticky top-0 z-10 bg-[#FBFBF9] border-b border-[#E5E5E0] px-6 sm:px-8 py-4 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7853] font-semibold">
              Executive Curriculum Vitae
            </span>
            <span className="text-[#D4D4CD]">/</span>
            <span className="font-mono text-xs text-[#8A8880] hidden sm:inline">
              Official Record
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#0E1116] border border-[#0E1116] px-4 py-2 hover:bg-[#0E1116] hover:text-[#FBFBF9] transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#0E1116] hover:text-[#9B7853] hover:bg-[#E5E5E0]/40 transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="overflow-y-auto p-8 sm:p-12 lg:p-16 space-y-12">
          {/* Header Block */}
          <div className="border-b border-[#0E1116] pb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h1 id="cv-title" className="font-serif text-3xl sm:text-4xl text-[#0E1116] font-normal">
                  Judith Kerr
                  <span className="text-xl sm:text-2xl text-[#57595D] ml-2 font-serif italic">
                    {profile.postNominals}
                  </span>
                </h1>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7853] font-semibold mt-1">
                  {profile.title}
                </p>
              </div>

              <div className="font-mono text-xs text-[#57595D] space-y-1 text-left sm:text-right">
                <div className="flex items-center sm:justify-end gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#9B7853]" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#9B7853]" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#9B7853]" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            <p className="font-serif text-base sm:text-lg text-[#0E1116] leading-relaxed pt-2">
              &ldquo;{profile.heroStatement}&rdquo;
            </p>
          </div>

          {/* Executive Summary */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-2">
              Executive Profile & Competency Matrix
            </h2>
            <p className="font-sans text-sm text-[#57595D] leading-relaxed">
              {profile.bioLong}
            </p>
          </div>

          {/* Executive Appointments */}
          <div className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-2">
              Institutional Leadership & Operational Appointments
            </h2>

            <div className="space-y-8">
              {leadershipExperience.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-serif text-xl text-[#0E1116]">
                      {item.organization}
                    </h3>
                    <span className="font-mono text-xs text-[#9B7853]">
                      {item.period}
                    </span>
                  </div>
                  <div className="font-sans text-sm font-semibold text-[#57595D]">
                    {item.role} <span className="text-[#8A8880] font-normal">| {item.location}</span>
                  </div>
                  <p className="font-mono text-xs text-[#8A8880]">Scope: {item.scope}</p>
                  <ul className="list-disc list-inside space-y-1.5 font-sans text-xs sm:text-sm text-[#57595D] pt-1">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic NGO Initiatives */}
          <div className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-2">
              Founded Strategic Initiatives & International Outreach
            </h2>

            <div className="space-y-6">
              {strategicInitiatives.map((init, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-lg text-[#0E1116]">
                      {init.title}
                    </h3>
                    <span className="font-mono text-xs text-[#9B7853]">{init.role}</span>
                  </div>
                  <p className="font-sans text-xs text-[#57595D] leading-relaxed">
                    {init.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Civic Appointments */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-2">
              Civic Appointments & Board Governance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {civicAppointments.map((civic, idx) => (
                <div key={idx} className="border border-[#E5E5E0] p-4 space-y-1">
                  <h3 className="font-serif text-sm font-semibold text-[#0E1116]">
                    {civic.organization}
                  </h3>
                  <p className="font-mono text-[11px] text-[#9B7853]">{civic.role}</p>
                  <p className="font-sans text-xs text-[#8A8880]">{civic.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education, Designations & Honors */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-2">
              Education, Designations & Honors
            </h2>

            <div className="divide-y divide-[#E5E5E0]">
              {educationAndHonors.map((item, idx) => (
                <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="font-serif text-base text-[#0E1116]">
                      {item.degreeOrTitle}
                    </h3>
                    <p className="font-sans text-xs text-[#57595D]">{item.institution}</p>
                  </div>
                  <span className="font-mono text-xs text-[#9B7853] shrink-0">
                    {item.yearOrStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
