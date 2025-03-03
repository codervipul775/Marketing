import React, { useState } from 'react';
import { Instagram, Twitter, Youtube, Globe, Mail, Linkedin } from 'lucide-react';
import Modal from '../components/Modal';

interface SocialLinks {
  instagram?: string;
  twitter?: string;
  youtube?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  letterboxd?: string;
  spotify?: string;
  blog?: string;
}

interface Contact {
  email?: string;
}

interface Influencer {
  id: number;
  name: string;
  role: string;
  tier: 'Macro-Influencers' | 'Mid-Tier Influencers' | 'Micro-Influencers';
  category: string;
  image: string;
  bio: string;
  detailed_bio: string;
  categories: string[];
  social_links: SocialLinks;
  contact?: Contact;
}

export default function Influencers() {
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);
  const [activeCategory, setActiveCategory] = useState('Business & Finance');
  const [activeTier, setActiveTier] = useState('All');

  const categories = [
    'Business & Finance',
    'Lifestyle & Fashion',
    'Tech & Startups',
    'Entertainment & Pop Culture',
    'Fitness & Health',
    'Travel & Adventure'
  ];

  const tiers = ['All', 'Macro-Influencers', 'Mid-Tier Influencers', 'Micro-Influencers'];

  const influencers: Influencer[] = [
    // Business & Finance
    {
      id: 1,
      name: "Alex Morgan",
      role: "Investment Strategist",
      tier: "Macro-Influencers",
      category: "Business & Finance",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800",
      bio: "Investment strategist and fintech expert with over 1M followers",
      detailed_bio: "Alex Morgan is a distinguished financial analyst and investment strategist with over a decade of experience in the financial markets. Through his content, he breaks down complex financial concepts and emerging market trends, making them accessible to his audience.",
      categories: ["Investment", "Fintech", "Cryptocurrency"],
      social_links: { twitter: "twitter.com/alexmorgan", linkedin: "linkedin.com/in/alexmorgan" }
    },
    {
      id: 2,
      name: "Emily Zhang",
      role: "Personal Finance Coach",
      tier: "Mid-Tier Influencers",
      category: "Business & Finance",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800",
      bio: "Making personal finance accessible for millennials",
      detailed_bio: "Emily Zhang specializes in debt management, budgeting, and investment strategies for young professionals. Her practical approach to financial literacy has helped thousands achieve their financial goals.",
      categories: ["Personal Finance", "Budgeting", "Investing"],
      social_links: { instagram: "instagram.com/emilyfinance", youtube: "youtube.com/@emilyfinance" }
    },
    {
      id: 3,
      name: "Marcus Chen",
      role: "Stock Market Analyst",
      tier: "Micro-Influencers",
      category: "Business & Finance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800",
      bio: "Technical analysis and stock market insights",
      detailed_bio: "Marcus Chen provides detailed stock market analysis and trading strategies. His technical expertise and educational content help traders make informed decisions.",
      categories: ["Stock Trading", "Technical Analysis", "Market Research"],
      social_links: { twitter: "twitter.com/marcuschen", youtube: "youtube.com/@marcuschen" }
    },

    // Lifestyle & Fashion
    {
      id: 4,
      name: "Sofia Martinez",
      role: "Fashion Designer",
      tier: "Macro-Influencers",
      category: "Lifestyle & Fashion",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800",
      bio: "Sustainable fashion advocate and designer",
      detailed_bio: "Sofia Martinez is revolutionizing sustainable fashion with her innovative designs and commitment to ethical manufacturing. Her influence spans from haute couture to everyday wear.",
      categories: ["Sustainable Fashion", "Design", "Ethical Fashion"],
      social_links: { instagram: "instagram.com/sofiamartinez", youtube: "youtube.com/@sofiamartinez" }
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Lifestyle Curator",
      tier: "Mid-Tier Influencers",
      category: "Lifestyle & Fashion",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800",
      bio: "Minimalist lifestyle and fashion content creator",
      detailed_bio: "James Wilson helps people build capsule wardrobes and adopt minimalist lifestyles. His content focuses on quality over quantity and sustainable living.",
      categories: ["Minimalism", "Men's Fashion", "Lifestyle"],
      social_links: { instagram: "instagram.com/jameswilson", website: "jameswilson.style" }
    },
    {
      id: 6,
      name: "Lily Chen",
      role: "Beauty Influencer",
      tier: "Micro-Influencers",
      category: "Lifestyle & Fashion",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800",
      bio: "Clean beauty advocate and skincare expert",
      detailed_bio: "Lily Chen focuses on clean beauty products and effective skincare routines. She educates her audience about ingredient consciousness and sustainable beauty practices.",
      categories: ["Clean Beauty", "Skincare", "Sustainable Beauty"],
      social_links: { instagram: "instagram.com/lilychen", youtube: "youtube.com/@lilychen" }
    },

    // Tech & Startups
    {
      id: 7,
      name: "Raj Patel",
      role: "Tech Entrepreneur",
      tier: "Macro-Influencers",
      category: "Tech & Startups",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800",
      bio: "Leading voice in tech innovation and startup ecosystem",
      detailed_bio: "Raj Patel is a serial entrepreneur sharing insights on AI, blockchain, and startup growth. His content helps founders and tech enthusiasts navigate the digital landscape.",
      categories: ["AI", "Startups", "Innovation"],
      social_links: { twitter: "twitter.com/rajpatel", linkedin: "linkedin.com/in/rajpatel" }
    },
    {
      id: 8,
      name: "Sarah Kim",
      role: "Product Manager",
      tier: "Mid-Tier Influencers",
      category: "Tech & Startups",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800",
      bio: "Product development and tech career insights",
      detailed_bio: "Sarah Kim shares her experience in product management and helps tech professionals advance their careers. Her content covers product strategy, development, and career growth.",
      categories: ["Product Management", "Career Growth", "Tech Industry"],
      social_links: { twitter: "twitter.com/sarahkim", linkedin: "linkedin.com/in/sarahkim" }
    },
    {
      id: 9,
      name: "David Lopez",
      role: "Developer Advocate",
      tier: "Micro-Influencers",
      category: "Tech & Startups",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800",
      bio: "Making coding accessible to everyone",
      detailed_bio: "David Lopez creates educational content for aspiring developers. He focuses on web development, coding best practices, and career transition into tech.",
      categories: ["Web Development", "Coding", "Tech Education"],
      social_links: { youtube: "youtube.com/@davidlopez", github: "github.com/davidlopez" }
    },

    // Entertainment & Pop Culture
    {
      id: 10,
      name: "Luna Park",
      role: "Entertainment Journalist",
      tier: "Macro-Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800",
      bio: "Breaking entertainment news and cultural commentary",
      detailed_bio: "Luna Park brings insider perspectives on entertainment industry trends and pop culture phenomena. Her analysis spans movies, music, and digital media.",
      categories: ["Entertainment", "Pop Culture", "Media"],
      social_links: { twitter: "twitter.com/lunapark", instagram: "instagram.com/lunapark" }
    },
    {
      id: 11,
      name: "Mike Thompson",
      role: "Film Critic",
      tier: "Mid-Tier Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800",
      bio: "In-depth film analysis and industry insights",
      detailed_bio: "Mike Thompson provides thoughtful analysis of contemporary cinema and streaming content. His reviews help audiences discover meaningful entertainment.",
      categories: ["Film Reviews", "Cinema", "Streaming"],
      social_links: { youtube: "youtube.com/@mikethompson", letterboxd: "letterboxd.com/mikethompson" }
    },
    {
      id: 12,
      name: "Nina Rodriguez",
      role: "Music Blogger",
      tier: "Micro-Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800",
      bio: "Discovering emerging music artists and trends",
      detailed_bio: "Nina Rodriguez spotlights up-and-coming musicians and analyzes music industry trends. Her platform helps independent artists reach new audiences.",
      categories: ["Music", "Indie Artists", "Industry Trends"],
      social_links: { spotify: "spotify.com/ninarodriguez", instagram: "instagram.com/ninarodriguez" }
    },

    // Fitness & Health
    {
      id: 13,
      name: "Marcus Lee",
      role: "Fitness Coach",
      tier: "Macro-Influencers",
      category: "Fitness & Health",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&w=800",
      bio: "Transforming lives through fitness and nutrition",
      detailed_bio: "Marcus Lee combines scientific research with practical fitness advice. His programs have helped thousands achieve their health and fitness goals.",
      categories: ["Fitness", "Nutrition", "Wellness"],
      social_links: { instagram: "instagram.com/marcuslee", youtube: "youtube.com/@marcuslee" }
    },
    {
      id: 14,
      name: "Emma Wilson",
      role: "Yoga Instructor",
      tier: "Mid-Tier Influencers",
      category: "Fitness & Health",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800",
      bio: "Making yoga accessible for modern lifestyles",
      detailed_bio: "Emma Wilson specializes in yoga for busy professionals. Her approach combines traditional practices with modern wellness principles.",
      categories: ["Yoga", "Mindfulness", "Wellness"],
      social_links: { instagram: "instagram.com/emmawilson", website: "emmawilson.yoga" }
    },
    {
      id: 15,
      name: "Dr. John Chen",
      role: "Health Educator",
      tier: "Micro-Influencers",
      category: "Fitness & Health",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800",
      bio: "Evidence-based health and wellness information",
      detailed_bio: "Dr. John Chen breaks down complex health topics into accessible information. He focuses on preventive health and lifestyle medicine.",
      categories: ["Health Education", "Preventive Health", "Lifestyle Medicine"],
      social_links: { twitter: "twitter.com/drjohnchen", website: "drjohnchen.health" }
    },

    // Travel & Adventure
    {
      id: 16,
      name: "Isabella Torres",
      role: "Travel Photographer",
      tier: "Macro-Influencers",
      category: "Travel & Adventure",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800",
      bio: "Capturing the world's most stunning destinations",
      detailed_bio: "Isabella Torres combines photography with storytelling to transport viewers to exotic locations. Her work has been featured in major travel publications.",
      categories: ["Travel Photography", "Adventure", "Culture"],
      social_links: { instagram: "instagram.com/isabellatorres", website: "isabellatorres.travel" }
    },
    {
      id: 17,
      name: "Tom Anderson",
      role: "Adventure Guide",
      tier: "Mid-Tier Influencers",
      category: "Travel & Adventure",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800",
      bio: "Extreme sports and outdoor adventures",
      detailed_bio: "Tom Anderson specializes in extreme sports and outdoor adventures. He guides viewers through challenging expeditions and survival skills.",
      categories: ["Extreme Sports", "Outdoor Life", "Adventure"],
      social_links: { youtube: "youtube.com/@tomanderson", instagram: "instagram.com/tomanderson" }
    },
    {
      id: 18,
      name: "Maya Patel",
      role: "Budget Travel Expert",
      tier: "Micro-Influencers",
      category: "Travel & Adventure",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800",
      bio: "Making world travel accessible on any budget",
      detailed_bio: "Maya Patel shares tips and strategies for budget-friendly world travel. She helps followers explore the world without breaking the bank.",
      categories: ["Budget Travel", "Solo Travel", "Travel Tips"],
      social_links: { instagram: "instagram.com/mayapatel", blog: "mayapateltravels.com" }
    }
  ];

  const filteredInfluencers = influencers.filter(influencer => 
    influencer.category === activeCategory && 
    (activeTier === 'All' || influencer.tier === activeTier)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-white to-indigo-300 text-transparent bg-clip-text">
            Our Influencers
          </h1>
          <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
            Discover industry leaders across different categories and influence tiers
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-indigo-600/20 hover:text-indigo-400'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`px-4 py-2 rounded-full ${
                  activeTier === tier
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-indigo-600/20 hover:text-indigo-400'
                } transition-colors`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Influencers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredInfluencers.map((influencer) => (
              <div
                key={influencer.id}
                className="bg-slate-800/50 rounded-2xl overflow-hidden group hover:bg-slate-800 transition-colors cursor-pointer"
                onClick={() => setSelectedInfluencer(influencer)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-indigo-600/80 text-white px-3 py-1 rounded-full text-sm">
                      {influencer.tier.split('-')[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{influencer.name}</h3>
                  </div>
                  <p className="text-indigo-400 text-sm mb-2">{influencer.role}</p>
                  <p className="text-slate-400 text-sm mb-4">{influencer.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {influencer.categories.map((category, index) => (
                      <span
                        key={index}
                        className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <button className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium">
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State */}
      {filteredInfluencers.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No influencers found in this category and tier combination.
          </p>
        </div>
      )}

      {/* Influencer Modal */}
      <Modal isOpen={!!selectedInfluencer} onClose={() => setSelectedInfluencer(null)}>
        {selectedInfluencer && (
          <div className="text-white">
            <div className="flex items-start gap-6 mb-8">
              <img
                src={selectedInfluencer.image}
                alt={selectedInfluencer.name}
                className="w-32 h-32 rounded-xl object-cover"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold">{selectedInfluencer.name}</h2>
                  <span className="bg-indigo-600/80 text-white px-3 py-1 rounded-full text-sm">
                    {selectedInfluencer.tier.split('-')[0]}
                  </span>
                </div>
                <p className="text-indigo-400 text-xl mt-2">{selectedInfluencer.role}</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About</h3>
                <p className="text-slate-300 leading-relaxed">{selectedInfluencer.detailed_bio}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInfluencer.categories.map((category, index) => (
                    <span key={index} className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-sm">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(selectedInfluencer.social_links).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={`https://${url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600/20 transition-colors"
                    >
                      {platform === 'instagram' && <Instagram className="w-4 h-4" />}
                      {platform === 'twitter' && <Twitter className="w-4 h-4" />}
                      {platform === 'youtube' && <Youtube className="w-4 h-4" />}
                      {platform === 'website' && <Globe className="w-4 h-4" />}
                      {platform === 'linkedin' && <Linkedin className="w-4 h-4" />}
                      {platform === 'github' && <Globe className="w-4 h-4" />}
                      {platform === 'letterboxd' && <Globe className="w-4 h-4" />}
                      {platform === 'spotify' && <Globe className="w-4 h-4" />}
                      {platform === 'blog' && <Globe className="w-4 h-4" />}
                      <span className="capitalize">{platform}</span>
                    </a>
                  ))}
                  {selectedInfluencer.contact?.email && (
                    <a
                      href={`mailto:${selectedInfluencer.contact.email}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600/20 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
