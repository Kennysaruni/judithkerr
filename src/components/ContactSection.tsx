import { useState, type FormEvent, type FC } from 'react';
import { Check, Mail, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: FC = () => {
  const { profile, advisoryAreas } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'Executive Advisory & Governance',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      inquiryType: 'Executive Advisory & Governance',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="inquiries" className="border-b border-[#E5E5E0] bg-[#FBFBF9] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#E5E5E0]">
          <div className="lg:col-span-6 space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block">
              Direct Access & Engagements
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0E1116] font-normal tracking-tight">
              Initiate Strategic Dialogue
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="font-sans text-base text-[#57595D] leading-relaxed">
              Accepting inquiries for executive advisory roles, board governance, keynote addresses, and high-impact international humanitarian partnerships.
            </p>
          </div>
        </div>

        {/* Split Editorial Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Left Column: Direct Channels & Advisory Areas */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                Direct Executive Channels
              </h3>

              {/* Minimal inline list without square icon boxes */}
              <div className="space-y-4">
                <div className="py-3 border-b border-[#E5E5E0]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8880] block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-serif text-xl sm:text-2xl text-[#0E1116] hover:text-[#9B7853] transition-colors flex items-center gap-3"
                  >
                    <Mail className="w-4 h-4 text-[#9B7853] stroke-[1.5]" />
                    <span>{profile.email}</span>
                  </a>
                </div>

                <div className="py-3 border-b border-[#E5E5E0]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8880] block mb-1">
                    Direct Telephone
                  </span>
                  <a
                    href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
                    className="font-serif text-xl sm:text-2xl text-[#0E1116] hover:text-[#9B7853] transition-colors flex items-center gap-3"
                  >
                    <Phone className="w-4 h-4 text-[#9B7853] stroke-[1.5]" />
                    <span>{profile.phone}</span>
                  </a>
                </div>

                <div className="py-3 border-b border-[#E5E5E0]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8880] block mb-1">
                    Headquarters & Reach
                  </span>
                  <div className="font-serif text-lg text-[#0E1116] flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#9B7853] stroke-[1.5]" />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Focus Areas */}
            <div className="space-y-4 pt-2">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                Advisory Consultation Scopes
              </h3>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#57595D]">
                {advisoryAreas.map((area, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9B7853]"></span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Executive Inquiry Form */}
          <div className="lg:col-span-7 border border-[#E5E5E0] p-8 sm:p-12 bg-[#FBFBF9]">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-12 h-12 mx-auto border border-[#9B7853] flex items-center justify-center text-[#9B7853]">
                  <Check className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0E1116]">
                    Inquiry Successfully Transmitted
                  </h3>
                  <p className="font-sans text-sm text-[#57595D] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your communication has been routed directly to Judith Kerr&apos;s executive desk. Expect a formal response within 24–48 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#0E1116] border border-[#0E1116] px-6 py-3 hover:bg-[#0E1116] hover:text-[#FBFBF9] transition-all"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#E5E5E0] pb-4">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                    Executive Communication Form
                  </h3>
                  <p className="font-sans text-xs text-[#8A8880] mt-1">
                    All correspondence is held in strict professional confidence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="form-name"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#0E1116]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Eleanor Vance"
                      className="w-full px-4 py-3 bg-white border border-[#E5E5E0] text-sm text-[#0E1116] focus:border-[#0E1116] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="form-org"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#0E1116]"
                    >
                      Organization / Entity
                    </label>
                    <input
                      id="form-org"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Global Health Foundation"
                      className="w-full px-4 py-3 bg-white border border-[#E5E5E0] text-sm text-[#0E1116] focus:border-[#0E1116] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="form-email"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#0E1116]"
                    >
                      Official Email *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.org"
                      className="w-full px-4 py-3 bg-white border border-[#E5E5E0] text-sm text-[#0E1116] focus:border-[#0E1116] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="form-phone"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#0E1116]"
                    >
                      Telephone (Optional)
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (416) 000-0000"
                      className="w-full px-4 py-3 bg-white border border-[#E5E5E0] text-sm text-[#0E1116] focus:border-[#0E1116] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="form-type"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#0E1116]"
                  >
                    Inquiry Engagement Scope
                  </label>
                  <select
                    id="form-type"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E5E5E0] text-sm text-[#0E1116] focus:border-[#0E1116] focus:outline-none transition-colors"
                  >
                    <option value="Executive Advisory & Governance">Executive Advisory & Organizational Governance</option>
                    <option value="Keynote Speaking / Panel Address">Keynote Speaking & Panel Leadership</option>
                    <option value="International NGO Strategic Partnership">International NGO Strategic Partnership</option>
                    <option value="Municipal Crisis / Housing Consultation">Municipal Crisis / Housing Hub Consultation</option>
                    <option value="Board Directorship Inquiry">Board Directorship & Panel Appointment</option>
                    <option value="Media & Press Inquiry">Media & Academic Dialogue</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="form-message"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#0E1116]"
                  >
                    Statement of Intent / Inquiry *
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please outline the nature of your proposed initiative, timeline, and institutional context..."
                    className="w-full px-4 py-3 bg-white border border-[#E5E5E0] text-sm text-[#0E1116] focus:border-[#0E1116] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0E1116] text-[#FBFBF9] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#9B7853] transition-colors disabled:opacity-50 focus:outline-none cursor-pointer"
                >
                  {submitting ? (
                    <span>Transmitting Correspondence...</span>
                  ) : (
                    <>
                      <span>Transmit Official Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
