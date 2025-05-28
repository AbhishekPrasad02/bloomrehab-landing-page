
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  return (
    <section id="solution" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Revolutionary All-in-One Rehabilitation Technology
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              BloomRehab offers a comprehensive, technology-driven solution for physical rehabilitation, combining multiple therapy modalities in a single compact system.
            </p>
            
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 mb-8">
              <div className="flex items-start">
                <div className="bg-bloom-600 rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Providing the utility of multiple rehabilitation machines combined in one system
                  </h4>
                  <p className="text-gray-600">
                    Our innovative design replaces the need for several separate rehabilitation machines, saving space, resources, and training time.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="btn-secondary">
              Learn More About Our Technology
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-blue-300 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/880d5404-3f7e-4582-b3d0-28e96e2c79d4.png"
                  alt="BloomRehab rehabilitation system in use" 
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/50 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl text-white font-semibold">Compact & Versatile Design</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
