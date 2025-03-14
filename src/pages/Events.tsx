import React, { useState } from 'react';
import { MapPin, Users, Link as LinkIcon, X } from 'lucide-react'; // Removed unused Calendar


interface Event {
  id: number;
  title: string;
  location: string;
  category: string;
  attendees: number;
  description: string;
  image: string;
  longDescription?: string;
  Guests?: string[];
  agenda?: string[];
  highlights?: string[];
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
      title: "SRCC Business Conclave – Asia’s Largest Undergraduate Management Fest",
      location: "SRCC Campus, New Delhi",
      category: "Business Conclave",
      attendees: 30000,
      description: "Join industry leaders for a day of insights into the latest digital marketing trends and strategies.",
      image: "https://www.indiafilings.com/learn/wp-content/uploads/2019/05/Global-Entrepreneurship-Summit.jpg",
      longDescription: "The SRCC Business Conclave is a premier platform that brings together global business icons, policymakers, and industry leaders to discuss emerging trends, economic insights, and the future of business. As Asia’s largest undergraduate management fest, it has built a reputation for hosting visionary leaders and changemakers, attracting thousands of attendees and generating millions of digital impressions. ",
      Guests: [
        "Nitin Gadkari",
        "Naveen Jindal",
        "Swami Mukundananda",
        "Aman Dhattarwal & Shradha Khapra ",
        "Kiran Bedi",
        "Sundararaman Ramamurthy ",
      ],
      highlights: [
        "With a massive digital reach and a strong industry presence, the SRCC Business Conclave continues to shape conversations that influence the future of business and policy, making it a must-attend event for aspiring professionals and corporate leaders alike."
      ]
    },
    {
      id: 2,
      title: "Crossroads – SRCC's Annual Cultural Extravaganza ",
      location: "SRCC Campus, New Delhi",
      category: "Cultural",
      attendees: 100000,
      description: "Learn how to create and execute successful influencer marketing campaigns.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      longDescription: "Crossroads, the annual cultural festival of SRCC, is one of North India’s largest college fests, drawing 100,000+ attendees. It features electrifying concerts, thrilling competitions, and star-studded performances, making it a grand celebration of music, art, and entertainment. With an unmatched vibe, Crossroads offers four days of unforgettable energy, creativity, and excitement.",
      Guests: [
        "Salim–Sulaiman ",
        "Shankar–Ehsaan–Loy",
        "Papon",
      ],
      highlights: [
        "Beyond stellar performances, Crossroads offers many activities, including engaging competitions, vibrant stalls, and a lively fun zone, ensuring a holistic festive experience for all attendees.",
        "The festival attracts many attendees each year, reflecting its popularity and significance in the cultural landscape. "
      ]
    },
    {
      id: 3,
      title: "Histrionica – SRCC's Annual Theatre Festival ",
      location: "SRCC Campus, New Delhi",
      category: "Theatre",
      attendees: 50000,
      description: "Master the art of creating engaging content for multiple platforms.",
      image: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
      longDescription: "Histrionica is the esteemed annual theatre festival of Shri Ram College of Commerce (SRCC), celebrated for its rich tradition of theatrical excellence and cultural significance. Over the years, the festival has served as a vibrant platform for thespians and artists, drawing attention from theatre enthusiasts nationwide",
      Guests: [
        "Farhan Akhtar",
        "Vidya Balan",
        "Randeep Hooda",
        "Rajkummar Rao",
        "Vinay Pathak",
        "Adil Hussain",
        "Piyush Mishra",
        "Manoj Bajpayee"
      ],
      highlights: [
        "The festival showcases a wide array of theatrical productions, from classic plays to contemporary performances, providing a platform for emerging talent and established artists alike.",
        "Histrionica offers workshops conducted by industry experts, fostering skill development and offering deeper insights into various aspects of theatre, including direction, scriptwriting, and production."
      ]
    },

  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden mb-3">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black  bg-clip-text">
            Our Events
          </h1>

        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="bg-gradient-to-l from-gray-500 to-gray-100 bg-transparent/40 rounded-2xl overflow-hidden group transition-colors"
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className={`p-6 md:p-8 md:w-2/3 flex flex-col ${index % 2 === 1 ? 'md:items-end md:text-right' : ''}`}>
                    <div className={`flex items-center gap-3 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="bg-indigo-600/10 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mt-4">
                      {event.title}
                    </h3>

                    <p className="text-black mt-2 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className={`flex items-center gap-3 text-black ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className={`flex items-center gap-3 text-black ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
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
                        Explore More
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

            <div>
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

              {selectedEvent.Guests && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Guests</h3>
                  <ul className="space-y-2">
                    {selectedEvent.Guests.map((speaker, index) => (
                      <li key={index} className="text-gray-400">
                        • {speaker}
                      </li>
                    ))}
                  </ul>
                </div>

              )}

              {selectedEvent.highlights && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Highlights</h3>
                  <ul className="space-y-2">
                    {selectedEvent.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-400">
                        • {highlight}
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
