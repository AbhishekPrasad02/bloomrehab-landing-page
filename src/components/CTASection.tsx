
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-bloom-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Rehabilitation Care?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Join the leading healthcare institutions already benefiting from our innovative technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-bloom-600 hover:bg-gray-100">
              Contact Us for a Demonstration
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Download Information Package
            </Button>
          </div>
          
          <p className="text-sm text-white/80">
            Our team will respond within 24 hours to schedule your personalized demo
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
