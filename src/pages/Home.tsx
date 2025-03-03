import React, { useState } from 'react';
import { ArrowRight, BrainCircuit, Pencil, Users, BarChart3, X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
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
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-4">
              {feature.miniDescription}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

const Home = () => {
  const firstRowFeatures = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
      title: "Influencer Marketing",
      miniDescription: "Strategic influencer partnerships for maximum impact.",
      description: "Our comprehensive influencer marketing solutions help brands connect with their target audience through authentic partnerships. We handle everything from influencer selection to campaign execution and performance tracking."
    },
    {
      icon: <Pencil className="w-8 h-8 text-indigo-400" />,
      title: "Content Creation",
      miniDescription: "Engaging content that tells your brand story.",
      description: "From compelling visuals to engaging copy, our content creation team crafts high-quality materials that resonate with your audience and drive engagement across all platforms."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "Influencer Matching",
      miniDescription: "Perfect influencer-brand partnerships.",
      description: "Our advanced matching system ensures your brand connects with influencers who share your values and can authentically represent your products to their engaged audience."
    }
  ];

  const secondRowFeatures = [
    {
      icon: <ArrowRight className="w-8 h-8 text-indigo-400" />,
      title: "Campaign Management",
      miniDescription: "End-to-end campaign execution and monitoring.",
      description: "We handle every aspect of your campaign from planning to execution, ensuring smooth delivery and maximum impact while keeping you informed every step of the way."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      title: "Analytics & Reporting",
      miniDescription: "Data-driven insights for campaign optimization.",
      description: "Our comprehensive analytics and reporting system provides real-time insights into campaign performance, helping you understand ROI and optimize future campaigns for better results."
    }
  ];

  return (
    <div className="w-screen">
      {/* Hero Section */}
      <section className="w-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-300 text-transparent bg-clip-text">
              Marketing
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join a community of passionate developers building the future through code, collaboration, and continuous learning.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href="https://github.com/NSTSDC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors flex items-center gap-2"
              >
                Learn More
              </a>
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
      <section className="w-screen bg-gradient-to-b from-slate-800 to-slate-900 py-20">
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
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">Expert Team</h3>
                  </div>
                  <p className="text-indigo-100 group-hover:text-white transition-colors">
                    Our team of marketing specialists brings years of experience in digital marketing and influencer partnerships.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">Data-Driven</h3>
                  </div>
                  <p className="text-indigo-100 group-hover:text-white transition-colors">
                    Make informed decisions with our comprehensive analytics and performance tracking systems.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                      <BrainCircuit className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">Strategic Approach</h3>
                  </div>
                  <p className="text-indigo-100 group-hover:text-white transition-colors">
                    We develop tailored strategies that align with your brand values and business objectives.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">End-to-End Service</h3>
                  </div>
                  <p className="text-indigo-100 group-hover:text-white transition-colors">
                    From planning to execution and reporting, we handle every aspect of your marketing campaigns.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl">
                  Connect with Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
