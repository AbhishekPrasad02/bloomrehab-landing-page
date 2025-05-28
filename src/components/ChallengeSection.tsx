
const StatCard = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="stat-card h-full">
      <p className="text-3xl md:text-4xl font-bold text-bloom-600 mb-2">{number}</p>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

const ChallengeSection = () => {
  return (
    <section id="challenge" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Addressing India's Rehabilitation Crisis
          </h2>
          <p className="text-lg text-gray-600">
            Stroke is a leading cause of long-term disability in India, creating an urgent need for accessible rehabilitation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            number="3rd" 
            text="Stroke is the third leading cause of disability worldwide"
          />
          <StatCard 
            number="19.5 lakh" 
            text="Indians left bedridden by stroke annually"
          />
          <StatCard 
            number="0.59" 
            text="Physiotherapists available per 10,000 people in India"
          />
          <StatCard 
            number="1/3" 
            text="Patients discontinue rehabilitation within the first year"
          />
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-full md:w-1/3">
              <img 
                src="/lovable-uploads/33236237-11e5-4d50-827a-b2e25ee7bfb8.png"
                alt="Rehab Technology" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
                The Therapy Gap
              </h3>
              <p className="text-gray-600 mb-4">
                With millions needing rehabilitation and only a fraction receiving adequate care, India faces a critical therapy gap. Traditional rehabilitation is expensive, resource-intensive, and often inaccessible to many patients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Limited access to specialists</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span>High therapy costs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Insufficient equipment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Poor patient adherence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
