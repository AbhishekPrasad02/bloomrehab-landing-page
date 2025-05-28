
const StepItem = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-bloom-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            A simple three-step process designed for optimal patient outcomes
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StepItem 
              number="1"
              title="Initial Assessment"
              description="Personalized evaluation of patient needs by our expert team, establishing baseline measurements and goals"
            />
            
            <StepItem 
              number="2"
              title="Tailored Therapy"
              description="Customized rehabilitation programs using our advanced system, combining technology with evidence-based protocols"
            />
            
            <StepItem 
              number="3"
              title="Progress Tracking"
              description="Detailed analytics to monitor improvement over time, with adjustments to optimize recovery outcomes"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
