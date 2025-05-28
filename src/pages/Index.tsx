
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ChallengeSection from '@/components/ChallengeSection';
import SolutionSection from '@/components/SolutionSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SolutionsForSection from '@/components/SolutionsForSection';
import ComparisonSection from '@/components/ComparisonSection';
import EndorsementsSection from '@/components/EndorsementsSection';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <BenefitsSection />
        <HowItWorksSection />
        <SolutionsForSection />
        <ComparisonSection />
        <EndorsementsSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
