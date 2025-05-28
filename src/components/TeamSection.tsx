
import { Linkedin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-1 text-gray-900">{name}</h3>
      <p className="text-purple-600 font-medium mb-4">{role}</p>
      <p className="text-center text-gray-600 max-w-xs">{bio}</p>
      
      <div className="mt-4">
        <a href="#" className="text-gray-400 hover:text-bloom-600 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            The Minds Behind BloomRehab
          </h2>
          <p className="text-lg text-gray-600">
            Our multidisciplinary team combines expertise in robotics, healthcare, and business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <TeamMember 
            name="Prashanth Jonna"
            role="CEO"
            image="/lovable-uploads/3b253154-a132-4659-9f69-6461e31f352b.png"
            bio="With extensive experience in healthcare innovation, Prashanth leads our vision to revolutionize rehabilitation technology."
          />
          
          <TeamMember 
            name="Abhishek Prasad"
            role="CTO"
            image="/lovable-uploads/e9207149-be46-4a81-8075-dab70755f4ea.png"
            bio="An expert in robotics and medical devices, Abhishek drives the technological development of our rehabilitation systems."
          />
          
          <TeamMember 
            name="Saurya Mishra"
            role="Technical Advisor"
            image="/lovable-uploads/5abb6bfa-0540-4152-9b70-f6b4fa06d9dd.png"
            bio="Saurya brings valuable insights from years of experience in healthcare technology implementation and optimization."
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
