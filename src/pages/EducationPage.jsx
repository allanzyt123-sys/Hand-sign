import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';
// Sample alphabet signs (in a real app, these would be actual sign language images)
const alphabetSigns = [{
  letter: 'A',
  image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'B',
  image: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'C',
  image: 'https://images.unsplash.com/photo-1596079890657-7d76f4d2053b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'D',
  image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'E',
  image: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'F',
  image: 'https://images.unsplash.com/photo-1596079890657-7d76f4d2053b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'G',
  image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'H',
  image: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'I',
  image: 'https://images.unsplash.com/photo-1596079890657-7d76f4d2053b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'J',
  image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'K',
  image: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'L',
  image: 'https://images.unsplash.com/photo-1596079890657-7d76f4d2053b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'M',
  image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'N',
  image: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'O',
  image: 'https://images.unsplash.com/photo-1596079890657-7d76f4d2053b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'P',
  image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'Q',
  image: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'R',
  image: 'https://images.unsplash.com/photo-1596079890657-7d76f4d2053b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'S',
  image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'T',
  image: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'U',
  image: 'https://images.unsplash.com/photo-1596079890657-7d76f4d2053b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'V',
  image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'W',
  image: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'X',
  image: 'https://images.unsplash.com/photo-1596079890657-7d76f4d2053b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'Y',
  image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}, {
  letter: 'Z',
  image: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}];
// Quiz questions
const quizQuestions = [{
  id: 1,
  image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  options: ['A', 'B', 'C', 'D'],
  correctAnswer: 'A'
}, {
  id: 2,
  image: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  options: ['E', 'F', 'B', 'H'],
  correctAnswer: 'B'
}, {
  id: 3,
  image: 'https://images.unsplash.com/photo-1596079890657-7d76f4d2053b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  options: ['I', 'C', 'K', 'L'],
  correctAnswer: 'C'
}];
const EducationPage = () => {
  const [quizActive, setQuizActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const handleAnswerSelect = answer => {
    setSelectedAnswer(answer);
    if (answer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
      } else {
        setShowResult(true);
      }
    }, 1000);
  };
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer('');
  };
  return <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Learn the Language of Hands
          </h1>
          <p className="text-xl text-gray-600">Every gesture tells a story.</p>
        </div>
        {!quizActive ? <>
            {/* Alphabet Grid */}
            <div className="mb-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                Sign Language Alphabet
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {alphabetSigns.map(sign => <GlassCard key={sign.letter} className="hover:shadow-glow-violet">
                    <div className="aspect-square relative overflow-hidden rounded-xl mb-3">
                      <img src={sign.image} alt={`Sign for letter ${sign.letter}`} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-center">
                      {sign.letter}
                    </h3>
                  </GlassCard>)}
              </div>
            </div>
            {/* Start Quiz CTA */}
            <div className="glass p-8 rounded-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Ready to test your knowledge?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Take a quick quiz to see how well you remember the sign language
                alphabet.
              </p>
              <GlassButton onClick={() => setQuizActive(true)} variant="primary" size="lg">
                Start Mini Quiz
              </GlassButton>
            </div>
          </> : <div className="max-w-3xl mx-auto">
            <GlassCard className="p-8">
              {!showResult ? <>
                  <div className="mb-6">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-violet h-2.5 rounded-full" style={{
                  width: `${(currentQuestion + 1) / quizQuestions.length * 100}%`
                }}></div>
                    </div>
                    <p className="text-right text-sm text-gray-500 mt-2">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </p>
                  </div>
                  <h2 className="text-2xl font-semibold mb-6">
                    Can you guess this sign?
                  </h2>
                  <div className="flex justify-center mb-8">
                    <div className="w-64 h-64 rounded-xl overflow-hidden">
                      <img src={quizQuestions[currentQuestion].image} alt="Sign to guess" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {quizQuestions[currentQuestion].options.map(option => <button key={option} onClick={() => handleAnswerSelect(option)} disabled={!!selectedAnswer} className={`p-4 rounded-xl text-lg font-medium transition-all ${selectedAnswer === option ? option === quizQuestions[currentQuestion].correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : 'glass hover:shadow-glow-violet'}`}>
                        {option}
                      </button>)}
                  </div>
                </> : <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-4">
                    Quiz Complete!
                  </h2>
                  <p className="text-4xl font-bold mb-6">
                    {score} / {quizQuestions.length}
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    {score === quizQuestions.length ? "Perfect! You've mastered the basics!" : score >= quizQuestions.length / 2 ? 'Good job! Keep practicing to improve.' : 'Practice makes perfect. Try again!'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <GlassButton onClick={restartQuiz} variant="primary">
                      Try Again
                    </GlassButton>
                    <GlassButton onClick={() => setQuizActive(false)} variant="secondary">
                      Back to Learning
                    </GlassButton>
                  </div>
                </div>}
            </GlassCard>
          </div>}
      </div>
    </div>;
};
export default EducationPage;