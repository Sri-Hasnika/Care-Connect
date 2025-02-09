import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Brain, AlertCircle } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const seasonalSymptoms = [
  'Fever', 'Cough', 'Headache', 'Body Aches', 'Sore Throat', 'Runny Nose', 'Fatigue',
];

const HealthInsights = () => {
  const [symptoms, setSymptoms] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [chartData, setChartData] = useState<any>(null);

  const input = symptoms || selectedSymptoms.join(', ');

  const handleSymptomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedSymptoms(prev =>
      checked ? [...prev, value] : prev.filter(symptom => symptom !== value)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Use the Google Generative AI API (Gemini Model)
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyDNGlNmcXV2JwLq-h_Sxs-SpfIoob9vVWo");

      // Load the Gemini model (or other models available)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Define the more confident and clear prompt
      const prompt = `You are an AI health assistant. Based on the following symptoms: ${input}, provide a clear diagnosis with the likelihood of the condition. Also, suggest treatments and their success rate:`;

      // Request AI-generated content
      const result = await model.generateContent(prompt);

      // Handle the AI-generated result
      const aiResponse = result.response.text();
      setAnalysis(aiResponse);

      // Generate a DV graph based on simulated data for treatment success rate
      const simulatedTreatmentData = {
        labels: ['Treatment A', 'Treatment B', 'Treatment C'],
        datasets: [
          {
            label: 'Treatment Success Rate',
            data: [80, 65, 90], // Success rates of treatments (in %)
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      setChartData(simulatedTreatmentData);
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      setAnalysis('Sorry, we encountered an issue while analyzing your symptoms. Please try again later.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">AI Health Insights</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <Brain className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Symptom Analysis</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Describe your symptoms</label>
              <textarea
                rows={4}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your symptoms here..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select common symptoms</label>
              {seasonalSymptoms.map((symptom) => (
                <div key={symptom} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={symptom}
                    value={symptom}
                    checked={selectedSymptoms.includes(symptom)}
                    onChange={handleSymptomChange}
                    className="mr-2"
                  />
                  <label htmlFor={symptom} className="text-gray-700">{symptom}</label>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Analyze Symptoms
            </button>
          </form>
        </div>

        {analysis && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Analysis Results</h2>
            </div>
            <p className="text-gray-700">{analysis}</p>

            {/* Chart.js Graph */}
            {chartData && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Treatment Success Rate</h3>
                <Chart type="bar" data={chartData} />
              </div>
            )}

            <div className="mt-4 p-4 bg-yellow-50 rounded-md">
              <p className="text-sm text-yellow-700">
                Note: This is an AI-powered preliminary analysis. Always consult with a healthcare
                professional for proper medical advice.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthInsights;
