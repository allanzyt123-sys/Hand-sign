import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
const teamMembers = [{
  name: 'Hazri',
  role: 'Frontend Designer',
  quote: 'Designing empathy through pixels.',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  bio: 'Allan brings 8 years of UI/UX experience with a focus on accessibility. He leads our design team with a passion for creating interfaces that work for everyone.'
}, {
  name: 'Alvin',
  role: 'Research & Content',
  quote: 'Bridging understanding through every gesture.',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  bio: 'With a background in linguistics and sign language interpretation, Zurainah ensures our content is accurate, respectful, and truly helpful to the Deaf community.'
}, {
  name: 'Kak "G"',
  role: 'AI Engineer',
  quote: 'Teaching machines to understand human expression.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  bio: 'Miguel specializes in computer vision and machine learning with a PhD from MIT. He leads the development of our sign language recognition algorithms.'
}, {
  name: 'avlin',
  role: 'Community Manager',
  quote: 'Building bridges between communities.',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
  bio: 'Priya works directly with Deaf communities worldwide to gather feedback and ensure SignBridge meets real-world needs. She organizes workshops and outreach programs.'
}, {
  name: 'Allan',
  role: 'Backend Developer',
  quote: 'Creating the foundation for meaningful connections.',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  bio: "Jordan architected SignBridge's cloud infrastructure and API services. His work ensures our translation services are fast, reliable, and scalable globally."
}];
const TeamPage = () => {
  return <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            The Humans Behind the Hands
          </h1>
          <p className="text-xl text-gray-600">
            Meet our passionate team dedicated to connecting communities.
          </p>
        </div>
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => <TeamMemberCard key={member.name} member={member} />)}
        </div>
        {/* Join Us Section */}
        <div className="mt-20">
          <GlassCard className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're always looking for passionate individuals who want to make a
              difference. If you're excited about accessibility and technology,
              we'd love to hear from you.
            </p>
            <a href="#" className="inline-block glass bg-violet bg-opacity-90 text-white px-6 py-3 rounded-full font-medium hover:shadow-glow-violet transition-all">
              View Open Positions
            </a>
          </GlassCard>
        </div>
      </div>
    </div>;
};
const TeamMemberCard = ({
  member
}) => {
  const [showBio, setShowBio] = useState(false);
  return <GlassCard className="overflow-hidden transition-all duration-500 relative group" onMouseEnter={() => setShowBio(true)} onMouseLeave={() => setShowBio(false)}>
      <div className="aspect-[3/4] overflow-hidden">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 relative">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-violet font-medium">{member.role}</p>
        <p className="mt-2 text-gray-600 italic">"{member.quote}"</p>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-t from-violet to-aqua bg-opacity-90 p-6 flex items-center justify-center transition-all duration-500 ${showBio ? 'opacity-95' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-center text-white">
          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
          <p className="font-medium mb-4">{member.role}</p>
          <p>{member.bio}</p>
        </div>
      </div>
    </GlassCard>;
};
export default TeamPage;