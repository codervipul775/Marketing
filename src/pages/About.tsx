import React, { useState } from "react";
import { Users, Rocket, Target, Mail, X } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  mini_bio: string;
  detailed_bio?: string;
  expertise?: string[];
  achievements?: string[];
  contact?: {
    email?: string;
    linkedin?: string;
  };
}

const Modal = ({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 max-w-3xl w-full shadow-2xl transform transition-all duration-300 scale-100 opacity-100 animate-modalIn overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
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

const About = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Ansh Pushpak",
      role: "Digital Marketing Strategist",
      image:
        "https://media-hosting.imagekit.io//40143ff12a9d402b/IMG_5745.JPG?Expires=1836386124&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g10Ui1QqeeZQdo~4T-ViN7FV3xoUtQJ2nbpRsxY9R2bBS0wSWBXbN67S2rdsWTGjARa24rMP9CsHyr1XK7QwrZLjsvRvHqhrOC3ewjGjUWmamQtL-BICe6yj9eMF3L0GGpOMDdEUCmLIAtxJ6AgJas3ISR9QhoYOFDCP-yBRcPtNuEAxwPMzlzYh2msxJppjf3UbycAh2~p~Au81lpypbbGbpeTkVeLj-LVdhkrfZr0yJtuqViu9BPcAw1cosdoQwa0ZKE6Tr2vCPo46CRGv8rrvn7J2YIB9DjKaAyxeSNBplGXGfJC3h4dTFQiU3MLPP~cVLWXMlfpv~Nprm9~bhw__",
      mini_bio:
        "5+ years of experience in social media growth, influencer marketing, and content creation.",
      detailed_bio:
        "Ansh Pushpak is a digital marketing strategist with 5+ years of experience in social media growth, influencer marketing, and content creation. He has also worked for a news agency in the field of content creation and marketing. At SRCC, he played a key role in scaling Instagram pages to over 100K+ followers, achieving millions of impressions and engagements through strategic campaigns. He has led high-impact digital promotions for major college events, driving brand visibility and audience interaction. With expertise in performance marketing, PR, and viral content creation, Ansh brings a data-driven approach to every campaign. His skills in Adobe Creative Suite, social media analytics, and brand storytelling make him a driving force behind Influenz’s marketing success. ",
      expertise: [
        "Social Media Growth Strategy",
        "Content Creation & Marketing",
        "Influencer Marketing",
        "Performance Marketing",
        "PR Management",
        "Adobe Creative Suite",
        "Social Media Analytics",
        "Brand Storytelling"
      ],
      achievements: [
        "Scaled Instagram pages to over 100K+ followers",
        "Achieved millions of impressions through strategic campaigns",
        "Led successful digital promotions for major college events",
        "Experience in news agency content creation",
        "Proven track record in viral content creation"
      ],
      contact: {
        email: "anshpushpak@gmail.com",
        linkedin: "https://www.linkedin.com/in/ansh-pushpak-701482202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    },
    {
      name: "Gourav",
      role: "Marketing Geek",
      image: "https://media-hosting.imagekit.io//84e2d94e67904036/Gourav.jpg?Expires=1836386255&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iopu8qPB6Nhot7OzQfjNb8qhdA1gtCophLXL9DDc3ZXyuXi7B4GpXOlb2V02YndSUz~1sUxhs9aj7nlF4dKebmeUOi7rsT182Cs2usWTasEhT3eAjZctwhEYjvt05VnJDYlFqBjmsi1ibnbrA9aTcydiOyKStWdowm-F2PhziPzSAlw27ZVG6Xt6cTA-8Amo5q29qSxluryiXEc672SBhxe6c073q4DvzoTzhBxqKdp9Fqesx4I4L1GlS8P5ipbk3pMzf23swAYGPGiBN1ooUljwkVRcPFNVScMCB3RhZV919BDMK0d7R6poMq2td3412To~sU1LMTrR8FqSc2g8jQ__",
      mini_bio:
        "Expertise in brand partnerships, digital engagement, and campaign execution.",
      detailed_bio:
        "Gourav is a marketing geek with expertise in brand partnerships, digital engagement, and campaign execution. At SRCC, he has led marketing outreach for large-scale events like Histrionica and Crossroads, managing campaigns that reached over 47.3 million people and attracted 55,000+ attendees. He has collaborated with top brands including Reliance, McDonald's, Sony, and ONGC, executing high-impact digital marketing and influencer-driven campaigns. With experience in managing ₹50+ lakh in marketing funds and overseeing multi-channel promotional strategies, Gourav specialises in data-driven brand positioning, content marketing, and audience engagement. ",
      expertise: [
        "Brand Partnerships",
        "Digital Marketing Strategy",
        "Event Marketing",
        "Campaign Management",
        "Data-Driven Brand Positioning",
        "Content Marketing",
        "Audience Engagement",
        "Multi-Channel Marketing"
      ],
      achievements: [
        "Led marketing for Histrionica and Crossroads events reaching 47.3M+ people",
        "Attracted 55,000+ attendees through strategic campaigns",
        "Managed ₹50+ lakh in marketing funds",
        "Collaborated with major brands like Reliance, McDonald's, Sony, and ONGC",
        "Successfully executed influencer-driven campaigns"
      ],
      contact: {
        email: "gourav62391@gmail.com",
        linkedin: "https://www.linkedin.com/in/gourav62391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black  bg-clip-text">
            About Us
          </h1>
          <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
            We're a team of marketing experts dedicated to helping businesses
            grow and succeed in the digital age
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-2">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-l from-gray-500 to-gray-100 bg-transparent/40 rounded-2xl p-8  transition-colors">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-slate-700">
                To empower businesses with innovative marketing solutions that
                drive growth and create lasting impact.
              </p>
            </div>
            <div className="bg-gradient-to-l from-gray-500 to-gray-100 bg-transparent/40 rounded-2xl p-8  transition-colors">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-slate-700">
                To be the leading force in transforming how businesses connect
                with their audiences in the digital world.
              </p>
            </div>
            <div className="bg-gradient-to-l from-gray-500 to-gray-100 bg-transparent/40 rounded-2xl p-8  transition-colors">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Our Values</h3>
              <p className="text-slate-700">
                Innovation, integrity, and client success are at the core of
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl overflow-hidden group transition-colors cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-indigo-400 mt-2 text-lg">{member.role}</p>
                  <p className="text-slate-400 mt-4 text-lg leading-relaxed">
                    {member.mini_bio}
                  </p>
                  <button className="mt-6 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium">
                    View Full Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
        {selectedMember && (
          <div className="text-white">
            <div className="flex items-start gap-6 mb-8">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                <p className="text-indigo-400 text-xl mt-2">
                  {selectedMember.role}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About</h3>
                <p className="text-slate-300 leading-relaxed">
                  {selectedMember.detailed_bio}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.expertise?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {selectedMember.achievements?.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <div className="flex items-center gap-4">
                  {selectedMember.contact?.email && (
                    <a
                      href={`mailto:${selectedMember.contact.email}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600/20 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  )}
                  {selectedMember.contact?.linkedin && (
                    <a
                      href={`https://${selectedMember.contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600/20 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-6 h-6 text-indigo-700" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-black mb-6">
              Ready to take your marketing to the next level? We'd love to hear
              from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
