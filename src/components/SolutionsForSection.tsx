
interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ title, price, features, isPopular = false }: PricingCardProps) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border ${isPopular ? 'border-bloom-500 scale-105' : 'border-gray-200'}`}>
      {isPopular && (
        <div className="bg-bloom-600 text-white text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className={`p-8 ${isPopular ? 'bg-white' : 'bg-white'}`}>
        <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
        <div className="mb-6">
          <p className="text-3xl font-bold text-bloom-600">{price}</p>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-bloom-600 mr-2 mt-0.5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            isPopular 
              ? 'bg-bloom-600 hover:bg-bloom-700 text-white' 
              : 'bg-white border-2 border-bloom-600 text-bloom-600 hover:bg-bloom-50'
          }`}
        >
          Select Plan
        </button>
      </div>
    </div>
  );
};

const SolutionsForSection = () => {
  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Solutions For
          </h2>
          <p className="text-lg text-gray-600">
            Flexible options designed for different healthcare settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="For Hospitals & Clinics"
            price="₹20 lakhs/unit + ₹2 lakhs/year"
            features={[
              "Premium system",
              "Unlimited usage",
              "27 video games for therapy",
              "Advanced analytics platform",
              "Dedicated support team",
            ]}
            isPopular={true}
          />
          
          <PricingCard 
            title="For Rehabilitation Centers"
            price="₹300/session"
            features={[
              "Subscription model",
              "Unlimited usage",
              "18 video games",
              "Basic analytics",
              "Regular updates",
            ]}
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Need a custom solution? <a href="#contact" className="text-bloom-600 font-medium hover:underline">Contact our team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsForSection;
