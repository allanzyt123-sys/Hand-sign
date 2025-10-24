import React, { useState } from 'react';
import GlassButton from '../components/GlassButton';
import GlassCard from '../components/GlassCard';
const TranslatorPage = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [translatedText, setTranslatedText] = useState('');
  const toggleCamera = () => {
    setCameraActive(!cameraActive);
    if (!cameraActive) {
      // Simulate translation after camera is turned on
      setTimeout(() => {
        setTranslating(true);
        simulateTranslation();
      }, 2000);
    } else {
      setTranslating(false);
      setTranslatedText('');
    }
  };
  const simulateTranslation = () => {
    const phrases = ['Hello, nice to meet you.', 'My name is SignBridge.', 'How are you today?', 'Thank you for using SignBridge.', "I'm learning sign language."];
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTranslatedText(phrases[currentIndex]);
      currentIndex = (currentIndex + 1) % phrases.length;
      if (!cameraActive) {
        clearInterval(interval);
      }
    }, 3000);
    return () => clearInterval(interval);
  };
  return <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Live AI Hand Sign Translator
          </h1>
          <p className="text-xl text-gray-600">
            Experience real-time translation from sign language to text.
          </p>
        </div>
        {/* Translator Interface */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Camera Preview */}
            <div className="lg:w-1/2">
              <GlassCard className="p-6 h-full">
                <h2 className="text-xl font-semibold mb-4">Camera Input</h2>
                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative">
                  {cameraActive ? <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-t-transparent border-violet rounded-full animate-spin"></div>
                    </div> : <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <p>Camera preview will appear here</p>
                      </div>
                    </div>}
                </div>
                <div className="mt-6 flex justify-center">
                  <GlassButton onClick={toggleCamera} variant={cameraActive ? 'coral' : 'primary'} size="lg">
                    {cameraActive ? 'Stop Camera' : 'Start Camera'}
                  </GlassButton>
                </div>
              </GlassCard>
            </div>
            {/* Text Output */}
            <div className="lg:w-1/2">
              <GlassCard className="p-6 h-full">
                <h2 className="text-xl font-semibold mb-4">
                  Translation Output
                </h2>
                <div className="bg-white bg-opacity-50 rounded-xl p-6 h-[300px] flex flex-col">
                  {translating ? <>
                      <div className="mb-4 flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm text-green-600">
                          Translating...
                        </span>
                      </div>
                      <div className="flex-grow flex items-center justify-center">
                        <p className="text-2xl text-gray-700 text-center transition-all duration-500">
                          {translatedText}
                        </p>
                      </div>
                    </> : <div className="flex-grow flex items-center justify-center text-gray-500">
                      <p className="text-center">
                        Translation will appear here once you start the camera
                      </p>
                    </div>}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Powered by SignBridge AI Engine v2.0
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
        {/* Instructions */}
        <div className="mt-16 max-w-3xl mx-auto">
          <GlassCard>
            <h2 className="text-xl font-semibold mb-4">
              How to Use the Translator
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                Click the "Start Camera" button to activate your device camera
              </li>
              <li>Position your hands clearly in the camera view</li>
              <li>Make sign language gestures at a moderate pace</li>
              <li>
                The AI will process and translate your signs to text in
                real-time
              </li>
              <li>
                For best results, ensure good lighting and a clear background
              </li>
            </ol>
          </GlassCard>
        </div>
      </div>
    </div>;
};
export default TranslatorPage;