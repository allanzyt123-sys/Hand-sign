import React from 'react';
import GlassButton from '../components/GlassButton';
const HomePage = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Connecting</span> the Silent
                World to the Sound of Understanding
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                An AI-powered bridge for the Deaf and Hearing community.
              </p>
              <GlassButton to="/translator" variant="primary" size="lg">
                Start the Journey
              </GlassButton>
            </div>
            <div className="md:w-1/2 relative">
              <div className="glass rounded-3xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Sign language communication" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-violet/30 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Statement */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white/0 to-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Our Mission
          </h2>
          <div className="glass p-8 rounded-3xl">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              SignBridge is built to empower communication and equality through
              technology.
            </p>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            How SignBridge Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-violet/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                AI-Powered Recognition
              </h3>
              <p className="text-gray-600">
                Our advanced AI models recognize and interpret hand signs in
                real-time with high accuracy.
              </p>
            </div>
            <div className="glass glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-aqua/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-aqua" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Bidirectional Translation
              </h3>
              <p className="text-gray-600">
                Translate from sign language to text and from speech to visual
                sign language cues.
              </p>
            </div>
            <div className="glass glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Learn & Practice</h3>
              <p className="text-gray-600">
                Interactive lessons to help both hearing and deaf individuals
                learn sign language.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto glass rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet/20 to-aqua/20"></div>
          <div className="relative p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to bridge the communication gap?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join SignBridge today and be part of a more inclusive world where
              everyone can communicate without barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton to="/education" variant="primary">
                Learn Sign Language
              </GlassButton>
              <GlassButton to="/translator" variant="secondary">
                Try Live Translator
              </GlassButton>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;