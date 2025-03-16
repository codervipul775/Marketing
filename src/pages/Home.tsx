import React, { useState } from 'react';
import { ArrowRight, BrainCircuit, Pencil, Users, BarChart3, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CollaboratorCarousel from '../components/CollaboratorCarousel';

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-white/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 max-w-lg w-full shadow-2xl transform transition-all duration-300 scale-100 opacity-100 animate-modalIn"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-slate-700/50 p-2"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

interface Feature {
  icon: React.ReactNode;
  title: string;
  miniDescription: string;
  description: string;
  keypoint_title: string;
  keypoint: string;
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        key={index}
        className="bg-slate-800/30 p-6 rounded-xl cursor-pointer group transition-all duration-300 hover:bg-slate-800/50 hover:scale-105 hover:shadow-xl"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {feature.miniDescription}
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex items-start gap-6 mb-6">
          <div className="p-4 rounded-lg bg-slate-700/50">
            {feature.icon}
          </div>
          <div className='justify-start items-start flex flex-col gap-2'>
            <h3 className="text-2xl font-bold justify-start text-start text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 justify-start text-start leading-relaxed text-lg mb-4">
              {feature.miniDescription}
            </p>
            <p className="text-gray-300 justify-start text-start leading-relaxed">
              {feature.description}
            </p>
            <h3 className="text-xl font-semibold justify-start text-start text-white mb-2">
              {feature.keypoint_title}
            </h3>
            <ul className="text-gray-300 justify-start text-start leading-relaxed list-disc list-inside">
              {feature.keypoint.split('\n').map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const firstRowFeatures = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
      title: "Influencer Marketing",
      miniDescription: "We connect brands with influencers to create impactful and engaging campaigns.",
      description: "We connect brands with the right influencers across Instagram, YouTube, and LinkedIn to create high-impact campaigns. Whether you're looking for macro-influencers or niche micro-influencers, we ensure authentic brand collaborations that engage audiences and drive conversions.",
      keypoint_title: "What We Offer:",
      keypoint: "Influencer sourcing & outreach \n Campaign strategy & execution."
    },
    {
      icon: <Pencil className="w-8 h-8 text-indigo-400" />,
      title: "Content Creation",
      miniDescription: "We create engaging visuals, videos, and copy to captivate your audience.",
      description: "In today’s digital world, engaging content is the key to capturing attention and building brand loyalty. At Influenz, we create high-impact visuals, compelling videos, and persuasive copy that not only tell your story but also drive meaningful engagement.",
      keypoint_title: "What We Offer:", 
      keypoint: "Social media creatives & viral-worthy videos \n SEO-optimised blogs & website content \n Authentic brand storytelling that connects"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "PR Articles",
      miniDescription: "We craft and publish PR articles to build credibility and authority.",
      description: "We help businesses build credibility through well-crafted PR articles published on reputed platforms. Our team writes engaging press releases and thought-leadership articles that strengthen brand authority.",
      keypoint_title: "What We Offer:", 
      keypoint: "PR strategy & planning \n Article writing & publishing \n Media outreach & brand positioning"
    }
  ];

  const secondRowFeatures = [
    {
      icon: <ArrowRight className="w-8 h-8 text-indigo-400" />,
      title: "Ads (Performance Marketing)",
      miniDescription: "We run data-driven ad campaigns to maximize reach and conversions.",
      description: "Our data-driven advertising strategies ensure your brand reaches the right audience with maximum ROI. From Google Ads to Facebook and Instagram promotions, we run high-converting ad campaigns.",
      keypoint_title: "What We Offer:", 
      keypoint: "Targeted digital ad campaigns \n Budget optimization \n Conversion rate tracking"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      title: "Strategy Consulting",
      miniDescription: "We provide expert marketing strategies to help brands grow and scale.",
      description: "We provide end-to-end marketing consultancy, crafting tailored strategies to help brands scale efficiently. From branding to social media growth, our expert insights give you a competitive edge.",
      keypoint_title: "What We Offer:", 
      keypoint: "Market research & competitor analysis \n Brand positioning & GTM strategy \n Digital growth planning"
    }
  ];

  return (
    <div className="w-screen">
      {/* Hero Section */}
      <section className="relative w-screen min-h-[80vh] py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left md:max-w-2xl">
              <h1 className="text-4xl text-center md:text-6xl font-bold mb-6 text-black">
                Elevate Your Influence with <span className="text-yellow-500 inline-block animate-pulse">INFLUENZ</span>
              </h1>
              <p className="text-slate-700 text-center text-lg md:text-xl mb-8 leading-relaxed">
                Unlock the full potential of influencer marketing and connect with your audience like never before. Drive impact, build trust, and grow your brand effortlessly!
              </p>
            </div>
            <div className="flex-1 relative">
              <img 
                src='https://media-hosting.imagekit.io//4d891ddf378d466f/vector.png?Expires=1836717236&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HUUbzxdwqxvBO7dI3YdbKvccQQYa42Tgds4g5zdxhIgj5iq4~YauwwDzXWkTwd4qDctp11RqQW4BcDay6M4mWlkRLes2iLHWjP7j4j6L4~EWvpyi40cTDAws7E2cnomXAJY0wNiVGwbWJVzv0qAgD1ozDt7uEoyPccZPI-c0sia~XUlM29ABUypMt~eP43MOGLU7JtY~I2sfUY0ajjCA4gN5vsxFS3~NsQkEpfN9c~UxCeL9N3jF~vtDZv7k7qdAzU6C~WCXkdg3eJvp9gonEND~0BdHZLe9og7BYz-aIOM2QtNMewWrNQs3j7uq8NZDcqssNuqUHE6AVq4lpHykpg__' 
                alt="Influenz Marketing" 
                className="w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-screen bg-[#0B1120] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white">
            Our Expertise
          </h2>
          <p className="text-center mb-16 text-gray-400">
            Elevate Your Brand With Our Services
          </p>
          <div className="max-w-6xl mx-auto">
            {/* First Row - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {firstRowFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
            
            {/* Second Row - 2 columns centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {secondRowFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="w-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-12 rounded-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
                Why Choose Us?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">Young & Dynamic Minds</h3>
                  </div>
                  <p className="text-indigo-100 group-hover:text-white transition-colors">
                    As SRCC students, we bring fresh, innovative ideas that stand out in today’s fast-changing market.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">Data-Driven Approach</h3>
                  </div>
                  <p className="text-indigo-100 group-hover:text-white transition-colors">
                    Every decision we make is backed by analytics to ensure the highest ROI.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                      <BrainCircuit className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">Strong Network & Industry Insights</h3>
                  </div>
                  <p className="text-indigo-100 group-hover:text-white transition-colors">
                    We leverage our extensive connections to create impactful marketing campaigns.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">Customized Strategies</h3>
                  </div>
                  <p className="text-indigo-100 group-hover:text-white transition-colors">
                    We tailor every campaign to fit your brand’s unique needs and target audience.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl group cursor-pointer md:col-span-2 md:mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">Cost-Effective Solutions</h3>
                  </div>
                  <p className="text-indigo-100 group-hover:text-white transition-colors">
                    Get top-notch marketing services at a competitive price, without compromising on quality.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl"
                >
                  Connect with Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborator Carousel */}
      <section className="w-screen bg-gradient-to-b from-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Our Collaborators
          </h2>
          <CollaboratorCarousel />
        </div>
      </section>
    </div>
  );
};

export default Home;
