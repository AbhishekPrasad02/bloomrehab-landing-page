
const ComparisonSection = () => {
  const comparisonData = [
    { 
      feature: 'Footprint',
      bloomRehab: '6075 sq cm',
      competitors: '15,000-30,000 sq cm',
      advantage: 'Up to 80% smaller'
    },
    { 
      feature: 'Functionality',
      bloomRehab: 'Spatial Arm, Leg, Unilateral Gait',
      competitors: 'Limited to specific limbs',
      advantage: 'All-in-one solution'
    },
    { 
      feature: 'Cost',
      bloomRehab: '₹20 Lakhs',
      competitors: '₹1.2-7 Crores',
      advantage: 'Up to 85% cost savings'
    },
    { 
      feature: 'Ease of Use',
      bloomRehab: 'Initial setup assistance only',
      competitors: 'Requires technician for operation',
      advantage: 'Lower operational costs'
    }
  ];

  return (
    <section id="comparison" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            The BloomRehab Difference
          </h2>
          <p className="text-lg text-gray-600">
            See how our solution compares to traditional rehabilitation equipment
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-md">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Feature</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-bloom-600">BloomRehab</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Competitors</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-green-600">Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-gray-900 font-medium">{item.feature}</td>
                  <td className="py-4 px-6 text-bloom-600">{item.bloomRehab}</td>
                  <td className="py-4 px-6 text-gray-600">{item.competitors}</td>
                  <td className="py-4 px-6 text-green-600">{item.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
