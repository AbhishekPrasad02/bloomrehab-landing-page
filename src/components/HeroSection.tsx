
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Accelerating Stroke Recovery Through Robotic Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              The world's first all-in-one robotic rehabilitation system, delivering comprehensive therapy at 1/5th the cost
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="btn-primary text-lg">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="border-2 border-bloom-600 text-bloom-600 hover:bg-bloom-50 text-lg">
                Learn More
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 font-medium">
              Trusted by leading medical institutions including NIMHANS and Apollo Hospitals
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-bloom-400 to-purple-400 opacity-30 blur-md"></div>
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="BloomRehab system in use" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium bg-bloom-600/90 inline-block px-3 py-1 rounded-full">
                    Next generation rehabilitation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
