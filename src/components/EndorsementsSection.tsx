
const TestimonialCard = ({ 
  quote, 
  name, 
  title,
  image
}: { 
  quote: string; 
  name: string; 
  title: string;
  image: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <div className="flex items-start mb-6">
        <svg className="w-10 h-10 text-bloom-300 mr-2" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8v12H0V8h10zm12 0v12H12V8h10z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

const EndorsementsSection = () => {
  return (
    <section id="endorsements" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Backed by Medical Experts
          </h2>
          <p className="text-lg text-gray-600">
            Leading healthcare professionals trust and recommend BloomRehab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TestimonialCard 
            quote="BloomRehab represents a significant advancement in rehabilitation technology. Its comprehensive approach addresses a critical gap in stroke recovery care."
            name="Dr. Anupam Gupta"
            title="Professor at NIMHANS"
            image="https://randomuser.me/api/portraits/men/32.jpg"
          />
          
          <TestimonialCard 
            quote="The cost-effectiveness and clinical versatility of BloomRehab make it an excellent solution for institutions looking to enhance their rehabilitation services."
            name="Dr. Satish P Chandra"
            title="Former Director at NIMHANS"
            image="https://randomuser.me/api/portraits/men/46.jpg"
          />
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="w-40 h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-700">NIMHANS</span>
          </div>
          <div className="w-40 h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-700">Apollo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndorsementsSection;
