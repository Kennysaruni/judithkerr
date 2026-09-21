import { type FC } from 'react';
import { Award, Compass, BookOpen, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const LeadershipProfile: FC = () => {
  const { leadershipProfile } = portfolioData;

  if (!leadershipProfile) return null;

  return (
    <section id="profile" className="border-b border-[#E5E5E0] bg-[#FBFBF9] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-[#E5E5E0]">
            <div className="lg:col-span-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block font-bold">
                Executive Profile & Competencies
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1116] font-bold tracking-tight">
                {leadershipProfile.title}
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="font-sans text-sm sm:text-base text-[#1A1D20] font-semibold leading-relaxed">
                A multidisciplinary leadership ethos integrating Christian faith, psychological understanding, trauma-informed care, and community empowerment.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Personality & Leadership Core (3 Columns / Editorial Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 pb-10">
          <ScrollReveal delay={100}>
            <div className="border border-[#E5E5E0] p-6 bg-[#F5F5F0]/60 space-y-3 h-full hover:border-[#9B7853] transition-colors duration-300">
              <div className="w-9 h-9 rounded-xs bg-[#0E1116] text-[#FBFBF9] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#9B7853]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0E1116]">
                Resilient & Purpose-Driven Leadership
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1A1D20] font-semibold leading-relaxed">
                {leadershipProfile.personalityProfile[0]}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="border border-[#E5E5E0] p-6 bg-[#F5F5F0]/60 space-y-3 h-full hover:border-[#9B7853] transition-colors duration-300">
              <div className="w-9 h-9 rounded-xs bg-[#0E1116] text-[#FBFBF9] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#9B7853]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0E1116]">
                Holistic Whole-Person Perspective
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1A1D20] font-semibold leading-relaxed">
                {leadershipProfile.personalityProfile[1]}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="border border-[#E5E5E0] p-6 bg-[#F5F5F0]/60 space-y-3 h-full hover:border-[#9B7853] transition-colors duration-300">
              <div className="w-9 h-9 rounded-xs bg-[#0E1116] text-[#FBFBF9] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#9B7853]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0E1116]">
                Lifelong Learning & Relational Engagement
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1A1D20] font-semibold leading-relaxed">
                {leadershipProfile.personalityProfile[2]}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Professional Experience Narrative & Research Focus */}
        <ScrollReveal delay={150}>
          <div className="pt-8 border-t border-[#E5E5E0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7853] font-bold block">
                  Multidisciplinary Practice
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0E1116] font-bold">
                  Professional Experience & Leadership Foundations
                </h3>
              </div>
              <div className="space-y-3 font-sans text-xs sm:text-sm text-[#1A1D20] font-semibold leading-relaxed">
                {leadershipProfile.experienceSummary.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Master's Thesis & Research Card */}
              <div className="mt-4 p-5 bg-[#F6F2EC]/40 border-l-4 border-[#9B7853] border border-[#E5E5E0] space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#9B7853]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#9B7853] font-bold">
                    Master's Research & Academic Thesis
                  </span>
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#0E1116] italic">
                  &ldquo;{leadershipProfile.thesisTitle}&rdquo;
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#1A1D20] font-semibold leading-relaxed">
                  {leadershipProfile.thesisDescription}
                </p>
              </div>
            </div>

            {/* Areas of Professional Experience (13 Bullet Points) */}
            <div className="lg:col-span-5 bg-[#F5F5F0] border border-[#E5E5E0] p-6 space-y-4">
              <div className="border-b border-[#E5E5E0] pb-3 flex items-center justify-between">
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-bold">
                  Areas of Professional Experience
                </h4>
                <span className="font-mono text-xs text-[#9B7853] font-bold">13 Domains</span>
              </div>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#1A1D20] font-semibold">
                {leadershipProfile.areasOfExperience.map((area, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#9B7853] shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Professional Mission Banner */}
        <ScrollReveal delay={250}>
          <div className="mt-10 p-6 sm:p-8 bg-[#0E1116] text-[#FBFBF9] border border-[#242933] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#9B7853]" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] font-bold">
                  Professional & Ministry Mission
                </span>
              </div>
              <p className="font-serif text-base sm:text-lg text-[#FBFBF9] font-bold leading-relaxed italic">
                &ldquo;{leadershipProfile.mission}&rdquo;
              </p>
            </div>
            <a
              href="#inquiries"
              className="inline-flex items-center justify-center shrink-0 text-xs uppercase tracking-[0.16em] font-bold text-[#0E1116] bg-[#FBFBF9] hover:bg-[#9B7853] hover:text-[#FBFBF9] transition-colors px-5 py-3 border border-transparent"
            >
              Connect with Judith
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
