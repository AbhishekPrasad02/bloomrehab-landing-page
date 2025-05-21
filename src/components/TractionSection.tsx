
const AchievementCard = ({ title, icon }: { title: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-4">
        {icon}
      </div>
      <p className="text-gray-800">{title}</p>
    </div>
  );
};

const TractionSection = () => {
  return (
    <section id="traction" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Traction & Validation
          </h2>
          <p className="text-lg text-gray-600">
            We're proud of our progress in bringing BloomRehab to institutions across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <AchievementCard 
            title="Secured LOIs from Punarvas & BCNRC Clinics"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bloom-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          
          <AchievementCard 
            title="Winner of IIMB NSRCEL 5 Lakh Grant"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bloom-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          
          <AchievementCard 
            title="Indian Patent Filed (TRL-5)"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bloom-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="bg-white rounded-xl p-8 max-w-3xl shadow-sm border border-gray-100">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
              <p className="text-gray-600 mb-6">
                BloomRehab is set to transform rehabilitation care across India, making advanced therapy accessible to thousands of patients who currently lack adequate care options.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-bloom-600">500+</p>
                  <p className="text-sm text-gray-500">Potential patients reached</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-bloom-600">5+</p>
                  <p className="text-sm text-gray-500">Institution partnerships</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-bloom-600">85%</p>
                  <p className="text-sm text-gray-500">Cost reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TractionSection;
