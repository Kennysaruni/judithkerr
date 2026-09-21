import { type FC } from 'react';
import { X, Printer, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ExecutiveCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveCVModal: FC<ExecutiveCVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const {
    profile,
    strategicInitiatives,
    leadershipExperience,
    priorLeadershipEngagements,
    civicAppointments,
    educationAndHonors,
    advisoryAreas
  } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const scrollModalToTop = () => {
    const modalBody = document.getElementById('cv-scroll-container');
    if (modalBody) {
      modalBody.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-title"
      className="cv-modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-[#0E1116]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
    >
      <div className="cv-modal-card relative w-full max-w-4xl bg-[#FBFBF9] text-[#0E1116] border border-[#E5E5E0] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Sticky Action Toolbar (Hidden during print) */}
        <div
          data-print-hide="true"
          className="sticky top-0 z-20 bg-[#FBFBF9] border-b border-[#E5E5E0] px-5 sm:px-8 py-3.5 flex items-center justify-between no-print"
        >
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#9B7853] font-semibold">
              Executive Curriculum Vitae
            </span>
            <span className="text-[#D4D4CD]">/</span>
            <span className="font-mono text-xs text-[#8A8880] hidden sm:inline">
              Exact 2-Page Format
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#FBFBF9] bg-[#0E1116] border border-[#0E1116] px-4 py-2 hover:bg-[#9B7853] hover:border-[#9B7853] transition-all cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save 2-Page PDF</span>
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

        {/* Scrollable Document Container */}
        <div
          id="cv-scroll-container"
          className="overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-12 cv-page-container"
        >
          {/* ==========================================
              PAGE 1: LEADERSHIP & OPERATIONAL RECORD
              ========================================== */}
          <div className="cv-page cv-page-1 space-y-6">
            {/* Header Block */}
            <div className="border-b border-[#0E1116] pb-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block shrink-0 no-print">
                    <img
                      src="/IMG-20260917-WA0022.jpg"
                      alt="Judith Kerr"
                      className="w-16 h-20 object-cover object-[center_26%] border border-[#E5E5E0] shadow-xs"
                    />
                  </div>
                  <div>
                    <h1 id="cv-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0E1116] font-normal leading-tight print-heading-lg">
                      Judith Kerr
                      <span className="text-xl sm:text-2xl lg:text-3xl text-[#57595D] ml-2 font-serif italic">
                        {profile.postNominals}
                      </span>
                    </h1>
                    <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#9B7853] font-semibold mt-2 print-mono-xs">
                      {profile.title}
                    </p>
                  </div>
                </div>

                <div className="font-mono text-xs sm:text-sm text-[#57595D] space-y-1 text-left sm:text-right print-mono-xs">
                  <div className="flex items-center sm:justify-end gap-2">
                    <Mail className="w-4 h-4 text-[#9B7853]" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-2">
                    <Phone className="w-4 h-4 text-[#9B7853]" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-2">
                    <MapPin className="w-4 h-4 text-[#9B7853]" />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>

              <p className="font-serif text-base sm:text-lg text-[#0E1116] leading-relaxed italic pt-2">
                &ldquo;{profile.heroStatement}&rdquo;
              </p>
            </div>

            {/* Executive Profile Summary */}
            <div className="cv-section space-y-2">
              <h2 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#0E1116] font-bold border-b border-[#E5E5E0] pb-1.5 print-mono-xs">
                Executive Profile & Leadership Scope
              </h2>
              <p className="font-arial text-xs sm:text-sm text-[#0E1116] font-bold leading-relaxed print-compact-text">
                {profile.bioLong}
              </p>
            </div>

            {/* Institutional Leadership & Operational Appointments */}
            <div className="cv-section space-y-5">
              <h2 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-1.5 print-mono-xs">
                Institutional Leadership & Operational Appointments
              </h2>

              <div className="space-y-5">
                {leadershipExperience.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#0E1116] font-normal leading-snug print-heading-md">
                        {item.organization}
                      </h3>
                      <span className="font-mono text-xs sm:text-sm text-[#9B7853] font-medium print-mono-xs">
                        {item.period}
                      </span>
                    </div>
                    <div className="font-sans text-sm sm:text-base font-semibold text-[#57595D]">
                      {item.role} <span className="text-[#8A8880] font-normal">| {item.location}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 font-sans text-xs sm:text-sm text-[#57595D] pt-0.5 print-compact-text">
                      {item.responsibilities.slice(0, 3).map((resp, rIdx) => (
                        <li key={rIdx} className="leading-relaxed">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Prior Frontline Leadership Engagements */}
            <div className="cv-section space-y-2 pt-1">
              <h2 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-1.5 print-mono-xs">
                Prior Supportive Housing & Frontline Appointments
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {priorLeadershipEngagements.map((item, idx) => (
                  <div key={idx} className="border border-[#E5E5E0] p-2.5 bg-[#FBFBF9]">
                    <span className="font-mono text-[10px] sm:text-xs text-[#9B7853] block uppercase tracking-wider print-mono-xs">
                      {item.domain}
                    </span>
                    <p className="font-serif text-xs sm:text-sm font-medium text-[#0E1116] leading-tight mt-0.5">
                      {item.organization}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Page 1 Bottom Classification */}
            <div className="pt-2 border-t border-[#E5E5E0] flex items-center justify-between font-mono text-xs text-[#8A8880] print-mono-xs">
              <span>Judith Kerr, BASc, M.C.C., Dr-C.</span>
              <span className="text-[#9B7853] font-semibold">Page 01 of 02</span>
            </div>
          </div>

          {/* ==========================================
              PAGE 2: STRATEGIC INITIATIVES & CREDENTIALS
              ========================================== */}
          <div className="cv-page cv-page-2 space-y-6 pt-6 sm:pt-0">
            {/* Page 2 Top Header */}
            <div className="border-b border-[#0E1116] pb-3 flex items-baseline justify-between">
              <div>
                <span className="font-serif text-2xl text-[#0E1116] font-normal">Judith Kerr</span>
                <span className="font-mono text-xs sm:text-sm text-[#57595D] ml-2">Executive Dossier / Section II</span>
              </div>
              <span className="font-mono text-xs sm:text-sm text-[#9B7853]">{profile.email}</span>
            </div>

            {/* Strategic NGO Initiatives */}
            <div className="cv-section space-y-4">
              <h2 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-1.5 print-mono-xs">
                Founded Strategic Initiatives & International Outreach
              </h2>

              <div className="space-y-4">
                {strategicInitiatives.map((init, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-lg sm:text-xl text-[#0E1116] font-medium leading-snug print-heading-md">
                        {init.title}
                      </h3>
                      <span className="font-mono text-xs sm:text-sm text-[#9B7853] font-medium print-mono-xs">{init.role}</span>
                    </div>
                    <div className="font-sans text-xs sm:text-sm text-[#57595D] leading-relaxed print-compact-text space-y-1">
                      {init.description.split('\n\n').map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Civic Appointments */}
            <div className="cv-section space-y-2.5">
              <h2 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-1.5 print-mono-xs">
                Civic Appointments & Board Governance
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {civicAppointments.map((civic, idx) => (
                  <div key={idx} className="border border-[#E5E5E0] p-3 space-y-1 bg-[#FBFBF9]">
                    <h4 className="font-serif text-sm sm:text-base font-semibold text-[#0E1116] leading-tight">
                      {civic.organization}
                    </h4>
                    <p className="font-mono text-xs text-[#9B7853] uppercase">{civic.role}</p>
                    <p className="font-sans text-xs text-[#8A8880] leading-relaxed">{civic.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education, Designations & Honors */}
            <div className="cv-section space-y-2.5">
              <h2 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-1.5 print-mono-xs">
                Education, Academic Honors & Designations
              </h2>

              <div className="divide-y divide-[#E5E5E0]">
                {educationAndHonors.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 first:pt-0">
                    <div>
                      <h4 className="font-serif text-base sm:text-lg text-[#0E1116] font-medium leading-snug">
                        {item.degreeOrTitle}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#57595D]">{item.institution}</p>
                    </div>
                    <span className="font-mono text-xs sm:text-sm text-[#9B7853] shrink-0 font-medium print-mono-xs">
                      {item.yearOrStatus}
                    </span>
                  </div>
                ))}
              </div>
              <p className="pt-1.5 text-[11px] font-sans text-[#8A8880] italic print-compact-text">
                * Conferred numerous additional specialized certificates, executive credentials, and community honors across career.
              </p>
            </div>

            {/* Strategic Advisory Scopes */}
            <div className="cv-section space-y-2">
              <h2 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#0E1116] font-semibold border-b border-[#E5E5E0] pb-1.5 print-mono-xs">
                Advisory Consultation & Speaking Mandates
              </h2>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-sans text-xs sm:text-sm text-[#57595D] pt-0.5 print-compact-text">
                {advisoryAreas.map((area, idx) => (
                  <span key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#9B7853]"></span>
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Page 2 Bottom Classification & Official Endorsement */}
            <div className="pt-3 border-t border-[#E5E5E0] flex items-center justify-between font-mono text-xs text-[#8A8880] print-mono-xs">
              <span>Executive Dossier — Complete Record Verified</span>
              <span className="text-[#9B7853] font-semibold">Page 02 of 02</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Quick-Action Bar */}
        <div
          data-print-hide="true"
          className="border-t border-[#E5E5E0] px-6 py-3 bg-[#FBFBF9] flex items-center justify-between no-print"
        >
          <button
            type="button"
            onClick={scrollModalToTop}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#8A8880] hover:text-[#0E1116] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#9B7853]" />
            <span>Back to Top of CV</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs uppercase tracking-wider text-[#0E1116] hover:text-[#9B7853] transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
