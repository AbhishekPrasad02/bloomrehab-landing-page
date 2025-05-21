
import { ArrowRight } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  subDesc: string;
  icon: React.ReactNode;
}

const BenefitCard = ({ title, description, subDesc, icon }: BenefitCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100 h-full">
      <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500">{subDesc}</p>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <a href="#" className="text-bloom-600 font-medium flex items-center text-sm hover:text-bloom-700 transition-colors">
          Learn more <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Key Benefits
          </h2>
          <p className="text-lg text-gray-600">
            Our innovative system offers multiple advantages for patients, healthcare providers, and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            title="Comprehensive Care"
            description="Complete arm, leg and gait rehabilitation in one system"
            subDesc="Supports patients with unilateral conditions from neurological and orthopedic cases"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-bloom-600">
                <path d="M16 6.5C16 8.433 14.433 10 12.5 10C10.567 10 9 8.433 9 6.5C9 4.567 10.567 3 12.5 3C14.433 3 16 4.567 16 6.5Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 13V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 13.5V13C5 12.4477 5.44772 12 6 12H18C18.5523 12 19 12.4477 19 13V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
          />
          
          <BenefitCard 
            title="Cost-Effective Solution"
            description="1/5th the combined cost of similar rehabilitation equipment"
            subDesc="Sustainable investment for hospitals and clinics"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-bloom-600">
                <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="14" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
          />
          
          <BenefitCard 
            title="Enhanced Patient Experience"
            description="27 engaging video games for therapy adherence"
            subDesc="Advanced analytics for tracking measurable progress"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-bloom-600">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 14C8.5 15.5 10 17 12 17C14 17 15.5 15.5 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
