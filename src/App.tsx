import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { StrategicInitiatives } from './components/StrategicInitiatives';
import { LeadershipExperience } from './components/LeadershipExperience';
import { CivicGovernance } from './components/CivicGovernance';
import { EducationHonors } from './components/EducationHonors';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExecutiveCVModal } from './components/ExecutiveCVModal';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#0E1116] flex flex-col selection:bg-[#9B7853]/20 selection:text-[#0E1116]">
      {/* Website View Wrapper (Strictly excluded from print output to guarantee 2-page CV) */}
      <div id="website-content" className="flex flex-col min-h-screen no-print">
        {/* Editorial Sticky Header */}
        <Header onOpenCVModal={() => setIsCVModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
          <ImpactMetrics />
          <StrategicInitiatives />
          <LeadershipExperience />
          <CivicGovernance />
          <EducationHonors />
          <ContactSection />
        </main>

        {/* Editorial Footer */}
        <Footer />

        {/* Floating Scroll to Top Button */}
        <ScrollToTop />
      </div>

      {/* Printable & Interactive Executive CV Modal */}
      <ExecutiveCVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}

export default App;
