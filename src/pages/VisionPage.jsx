import React from 'react';
import GlassCard from '../components/GlassCard';
const roadmapItems = [{
  phase: 'Prototype',
  title: 'Initial Concept',
  description: 'Development of core AI recognition algorithm and basic user interface.',
  status: 'completed',
  date: '2023 Q1',
  icon: '🧪'
}, {
  phase: 'Beta',
  title: 'Community Testing',
  description: 'Limited release with focus on gathering user feedback and improving accuracy.',
  status: 'completed',
  date: '2023 Q3',
  icon: '🔍'
}, {
  phase: 'Full AI Translator',
  title: 'Complete Feature Set',
  description: 'Launch of comprehensive translation capabilities with improved recognition and educational content.',
  status: 'current',
  date: '2024 Q2',
  icon: '🚀'
}, {
  phase: 'Global Release',
  title: 'Worldwide Availability',
  description: 'Support for multiple sign languages and dialects with localized interfaces.',
  status: 'upcoming',
  date: '2025 Q1',
  icon: '🌎'
}, {
  phase: 'Mobile Integration',
  title: 'On-the-Go Access',
  description: 'Native mobile applications with offline capabilities for iOS and Android.',
  status: 'upcoming',
  date: '2025 Q3',
  icon: '📱'
}, {
  phase: 'AR/VR Experience',
  title: 'Immersive Learning',
  description: 'Augmented and virtual reality experiences for enhanced sign language education.',
  status: 'future',
  date: '2026',
  icon: '🥽'
}];
const VisionPage = () => {
  return <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Where We're Going
          </h1>
          <p className="text-xl text-gray-600">
            Our vision and roadmap for a more connected future.
          </p>
        </div>
        {/* Vision Statement */}
        <div className="mb-20">
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                At SignBridge, we envision a world where communication barriers
                between Deaf and hearing communities no longer exist. We're
                building technology that empowers individuals to connect,
                understand, and express themselves freely, regardless of their
                hearing ability.
              </p>
              <p className="text-lg">
                Our mission extends beyond just translation. We aim to foster
                understanding, promote sign language education, and create
                inclusive spaces where everyone's voice can be heard—whether
                spoken or signed.
              </p>
              <p className="text-lg">
                Through artificial intelligence, we're creating tools that adapt
                to users, learn from interactions, and continuously improve to
                meet the real-world needs of the communities we serve.
              </p>
            </div>
          </GlassCard>
        </div>
        {/* Roadmap Timeline */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Development Roadmap
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-violet/30 rounded-full"></div>
            {/* Timeline Items */}
            <div className="space-y-16">
              {roadmapItems.map((item, index) => <div key={item.phase} className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-violet"></div>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <GlassCard className={`
                      p-6
                      ${item.status === 'completed' ? 'border-green-400 border-2 border-opacity-50' : item.status === 'current' ? 'border-violet border-2 border-opacity-70 shadow-glow-violet' : ''}
                    `}>
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-1">{item.phase}</h3>
                      <h4 className="text-violet font-medium mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">
                          {item.date}
                        </span>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${item.status === 'completed' ? 'bg-green-100 text-green-700' : item.status === 'current' ? 'bg-violet/20 text-violet' : 'bg-gray-100 text-gray-600'}`}>
                          {item.status === 'completed' ? 'Completed' : item.status === 'current' ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                    </GlassCard>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        {/* Closing Statement */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
            Together, we build a world without silence.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us on our journey to create technology that brings people
            together and ensures everyone has a voice.
          </p>
        </div>
      </div>
    </div>;
};
export default VisionPage;