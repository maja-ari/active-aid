
import React, { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import UserGoals from './components/UserGoals';
import ExerciseRecommendations from './components/ExerciseRecommendations';
import Settings from './components/Settings';
import ChatInterface from './components/ChatInterface';

// Update UserGoalsData interface to match the one in UserGoals.tsx
interface UserGoalsData {
  age: number;
  sex: 'male' | 'female' | 'other';
  targetWeight: number;
  weightGoal: 'lose' | 'maintain' | 'gain';
}

const App: React.FC = () => {
  const [userGoals, setUserGoals] = useState<UserGoalsData | null>(null);
  const [activeTab, setActiveTab] = useState('goals');
  
  const handleGoalsSubmit = (goals: UserGoalsData) => {
    setUserGoals(goals);
    setActiveTab('assistant'); // Switch to assistant tab after submitting goals
  };

  // Calculate BMI when needed (for ExerciseRecommendations)
  const calculateBMI = () => {
    // Default to a normal BMI if no data available
    // In a real app, you would calculate this from height and weight
    return 22; // Example normal BMI value
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-gradient-to-b from-activeaid-lightaqua to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 md:p-8">
        <header className="max-w-5xl mx-auto mb-8">
          <h1 className="text-4xl font-bold text-activeaid-primary text-center">
            ActiveAid Wellbeing Assistant
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
            Your personalized health and wellbeing companion
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6">
            <div className="flex flex-wrap border-b dark:border-gray-700">
              <button
                onClick={() => setActiveTab('goals')}
                className={`py-2 px-4 ${
                  activeTab === 'goals'
                    ? 'border-b-2 border-activeaid-primary text-activeaid-primary'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Your Goals
              </button>
              <button
                onClick={() => setActiveTab('exercise')}
                className={`py-2 px-4 ${
                  activeTab === 'exercise'
                    ? 'border-b-2 border-activeaid-primary text-activeaid-primary'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
                disabled={!userGoals}
              >
                Exercise
              </button>
              <button
                onClick={() => setActiveTab('assistant')}
                className={`py-2 px-4 ${
                  activeTab === 'assistant'
                    ? 'border-b-2 border-activeaid-primary text-activeaid-primary'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                AI Assistant
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-2 px-4 ${
                  activeTab === 'settings'
                    ? 'border-b-2 border-activeaid-primary text-activeaid-primary'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Settings
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {activeTab === 'goals' && (
              <UserGoals onSubmit={handleGoalsSubmit} />
            )}

            {activeTab === 'exercise' && userGoals && (
              <ExerciseRecommendations bmi={calculateBMI()} />
            )}

            {activeTab === 'assistant' && (
              <ChatInterface />
            )}

            {activeTab === 'settings' && (
              <Settings />
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
