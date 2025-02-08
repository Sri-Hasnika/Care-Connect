import React, { useState } from 'react';
import axios from 'axios';
import { Brain, AlertCircle } from 'lucide-react';

const seasonalSymptoms = [
  'Fever', 'Cough', 'Headache', 'Body Aches', 'Sore Throat', 'Runny Nose', 'Fatigue',
];

const HealthInsights = () => {
  const [symptoms, setSymptoms] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleSymptomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedSymptoms(prev =>
      checked ? [...prev, value] : prev.filter(symptom => symptom !== value)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Combine both text input and selected seasonal symptoms
    const input = symptoms || selectedSymptoms.join(', ');

    // Call the Google AutoML API
    try {
      const response = await axios.post('https://automl.googleapis.com/v1/projects/careconnectlite/locations/us-central1/models/{your-model-id}:predict', {
        headers: {
          Authorization: `Bearer AIzaSyDNGlNmcXV2JwLq-h_Sxs-SpfIoob9vVWo`,
        },
        data: {
          payload: {
            textSnippet: {
              content: input,
            },
          },
        },
      });

      // Process the response
      const analysisResult = response.data.payload[0].displayName;
      setAnalysis(`Based on your symptoms, it seems like you may have ${analysisResult}. Please consult a doctor for proper diagnosis.`);
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
