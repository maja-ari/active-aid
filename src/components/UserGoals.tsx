
import React, { useState } from 'react';
import { Target } from 'lucide-react';

interface UserGoalsProps {
  onSubmit: (goals: UserGoalsData) => void;
}

interface UserGoalsData {
  age: number;
  sex: 'male' | 'female' | 'other';
  targetWeight: number;
  weightGoal: 'lose' | 'maintain' | 'gain';
}

const UserGoals = ({ onSubmit }: UserGoalsProps) => {
  const [formData, setFormData] = useState<UserGoalsData>({
    age: 0,
    sex: 'other',
    targetWeight: 0,
    weightGoal: 'maintain'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-6 h-6 text-activeaid-primary" />
        <h2 className="text-2xl font-bold text-activeaid-primary">Your Goals</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Age</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-activeaid-primary focus:border-activeaid-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sex</label>
          <select
            value={formData.sex}
            onChange={(e) => setFormData({...formData, sex: e.target.value as 'male' | 'female' | 'other'})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-activeaid-primary focus:border-activeaid-primary"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Target Weight (kg)</label>
          <input
            type="number"
            value={formData.targetWeight}
            onChange={(e) => setFormData({...formData, targetWeight: parseInt(e.target.value)})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-activeaid-primary focus:border-activeaid-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Weight Goal</label>
          <select
            value={formData.weightGoal}
            onChange={(e) => setFormData({...formData, weightGoal: e.target.value as 'lose' | 'maintain' | 'gain'})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-activeaid-primary focus:border-activeaid-primary"
          >
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-activeaid-primary hover:bg-activeaid-midaqua rounded-md transition-colors"
        >
          Save Goals
        </button>
      </form>
    </div>
  );
};

export default UserGoals;
