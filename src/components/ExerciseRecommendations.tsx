
import React from 'react';
import { Target } from 'lucide-react';

const ExerciseRecommendations = ({ bmi }: { bmi: number }) => {
  let recommendation = "";
  let bmiCategory = "";

  // Determine BMI category
  if (bmi < 18.5) {
    bmiCategory = "underweight";
    recommendation = "Consider exercises that build muscle mass, such as weight lifting or resistance training. Focus on a balanced diet to support muscle growth.";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = "normal";
    recommendation = "Maintain a balanced fitness routine with a mix of cardio and strength training. Regular physical activity is key to staying healthy.";
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = "overweight";
    recommendation = "Incorporate more cardio exercises like brisk walking, jogging, or cycling to help burn calories. Combine with a healthy diet for weight management.";
  } else {
    bmiCategory = "obese";
    recommendation = "Focus on low-impact exercises such as swimming, walking, or yoga to protect your joints. Consult with a healthcare provider or fitness professional for a tailored plan.";
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-6 h-6 text-activeaid-primary" />
        <h3 className="text-xl font-semibold text-activeaid-primary">Exercise Recommendations</h3>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">BMI Category: <span className="font-medium text-gray-700 dark:text-gray-300">{bmiCategory}</span></p>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{recommendation}</p>
    </div>
  );
};

export default ExerciseRecommendations;
