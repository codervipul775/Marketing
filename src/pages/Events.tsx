import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Link as LinkIcon, X } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendees: number;
  description: string;
  image: string;
  longDescription?: string;
  speakers?: string[];
  agenda?: string[];
}

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 max-w-3xl w-full shadow-2xl transform transition-all duration-300 scale-100 opacity-100 animate-modalIn overflow-y-auto max-h-[90vh]"
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

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "Digital Marketing Summit 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Tech Hub, Silicon Valley",
      category: "Conference",
      attendees: 500,
      description: "Join industry leaders for a day of insights into the latest digital marketing trends and strategies.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
      longDescription: "The Digital Marketing Summit 2025 brings together the brightest minds in digital marketing for a day of learning, networking, and inspiration. Discover cutting-edge strategies, hear from industry pioneers, and stay ahead of the curve in the ever-evolving digital landscape.",
      speakers: [
        "Sarah Johnson - CEO, Digital First",
        "Mike Zhang - Head of Growth, TechGiant",
        "Lisa Patel - Social Media Strategist"
      ],
      agenda: [
        "10:00 AM - Opening Keynote: The Future of Digital Marketing",
        "11:30 AM - Panel Discussion: AI in Marketing",
        "2:00 PM - Workshop: Data-Driven Decision Making",
        "4:00 PM - Closing Session: Implementation Strategies"
      ]
    },
    {
      id: 2,
      title: "Influencer Marketing Workshop",
      date: "March 20, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual Event",
      category: "Workshop",
      attendees: 200,
      description: "Learn how to create and execute successful influencer marketing campaigns.",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800",
      longDescription: "Master the art of influencer marketing in this intensive workshop. Learn how to identify the right influencers, create compelling campaigns, and measure success. Perfect for marketing professionals looking to enhance their influencer marketing strategies.",
      speakers: [
        "Alex Rivera - Influencer Marketing Expert",
        "Emma Chen - Brand Partnerships Lead"
      ],
      agenda: [
        "2:00 PM - Influencer Selection Strategies",
        "2:45 PM - Campaign Planning & Execution",
        "3:30 PM - Analytics & ROI Measurement"
      ]
    },
    {
      id: 3,
      title: "Content Creation Masterclass",
      date: "April 5, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Creative Studio, Downtown",
      category: "Workshop",
      attendees: 100,
      description: "Master the art of creating engaging content for multiple platforms.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
      longDescription: "Elevate your content creation skills in this hands-on masterclass. Learn advanced techniques for creating compelling content across different platforms, understanding audience engagement, and developing a consistent brand voice.",
      speakers: [
        "David Lee - Content Director",
        "Rachel Smith - Creative Strategist"
      ],
      agenda: [
        "11:00 AM - Content Strategy Fundamentals",
        "12:30 PM - Platform-Specific Best Practices",
        "2:00 PM - Hands-on Content Creation Workshop"
      ]
    },
    {
      id: 4,
      title: "Marketing Analytics Conference",
      date: "April 15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Grand Hotel Conference Center",
      category: "Conference",
      attendees: 300,
      description: "Deep dive into data-driven marketing strategies and analytics tools.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800",
      longDescription: "Join us for a comprehensive exploration of marketing analytics. Learn how to leverage data to drive marketing decisions, optimize campaigns, and demonstrate ROI. Features hands-on sessions with popular analytics tools and expert-led discussions.",
      speakers: [
        "Tom Wilson - Analytics Director",
        "Maria Garcia - Data Science Lead",
        "James Kim - Marketing Operations Manager"
      ],
      agenda: [
        "9:00 AM - Analytics Tools Overview",
        "11:00 AM - Data Visualization Techniques",
        "2:00 PM - Predictive Analytics Workshop",
        "4:30 PM - ROI Measurement Strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-white to-indigo-300 text-transparent bg-clip-text">
            Upcoming Events
          </h1>
          <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
            Join us for exciting marketing events, workshops, and conferences
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="bg-slate-800/50 rounded-2xl overflow-hidden group hover:bg-slate-800 transition-colors"
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-sm font-medium">
                        View Details
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 md:p-8 md:w-2/3 flex flex-col ${index % 2 === 1 ? 'md:items-end md:text-right' : ''}`}>
                    <div className={`flex items-center gap-3 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="bg-indigo-600/10 text-indigo-400 px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </div>
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                      <div className="text-slate-400 text-sm">{event.date}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-4">
                      {event.title}
                    </h3>

                    <p className="text-slate-400 mt-2 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className={`flex items-center gap-3 text-slate-400 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <Clock className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className={`flex items-center gap-3 text-slate-400 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className={`flex items-center gap-3 text-slate-400 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <Users className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <span>{event.attendees} Attendees</span>
                      </div>
                    </div>
                  
                    <div className={`flex items-center gap-4 mt-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                      <button 
                        onClick={() => setSelectedEvent(event)}
                        className="bg-slate-700/50 text-white py-3 px-6 rounded-xl hover:bg-slate-700 transition-colors flex items-center gap-2"
                      >
                        <LinkIcon className="w-4 h-4" />
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
        {selectedEvent && (
          <div className="text-white">
            <div className="relative h-48 -mx-8 -mt-8 mb-8">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
              <div className="absolute bottom-4 left-8">
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm inline-block mb-2">
                  {selectedEvent.category}
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {selectedEvent.title}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-gray-400">
                <Calendar className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>{selectedEvent.date}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>{selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>{selectedEvent.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Users className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>{selectedEvent.attendees} Attendees</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">About the Event</h3>
                <p className="text-gray-400 leading-relaxed">
                  {selectedEvent.longDescription}
                </p>
              </div>

              {selectedEvent.speakers && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Speakers</h3>
                  <ul className="space-y-2">
                    {selectedEvent.speakers.map((speaker, index) => (
                      <li key={index} className="text-gray-400">
                        • {speaker}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedEvent.agenda && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Agenda</h3>
                  <ul className="space-y-2">
                    {selectedEvent.agenda.map((item, index) => (
                      <li key={index} className="text-gray-400">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Events;
