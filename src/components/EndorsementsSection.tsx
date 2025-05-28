
const EndorsementsSection = () => {
  return (
    <section id="endorsements" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Supported By
          </h2>
          <p className="text-lg text-gray-600">
            Leading healthcare institutions trust and recommend BloomRehab
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="w-48 h-24 flex items-center justify-center transition-all duration-300">
            <img 
              src="/lovable-uploads/31f5a60f-6c23-4bc3-bc65-37b2e145c450.png" 
              alt="Antler" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="w-48 h-24 flex items-center justify-center transition-all duration-300">
            <img 
              src="/lovable-uploads/3b40d85b-4b33-4fcc-92b5-937deacabb1b.png" 
              alt="IIMB NSRCEL" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndorsementsSection;
