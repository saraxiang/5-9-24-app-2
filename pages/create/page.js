'use client';

import { useState } from 'react';
import Layout from '../../components/Layout';

export default function CreateFlashcard() {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/flashcards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ front, back }),
      });

      const data = await response.json();

      if (response.ok) {
        // Reset the form fields
        setFront('');
        setBack('');
        // Provide user feedback for successful submission
        setMessage('Flashcard saved successfully!');
        setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
      } else {
        // Handle and display errors to the user
        setMessage(data.message || 'Failed to save the flashcard');
        setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
      }
    } catch (error) {
      // Handle and display errors to the user
      setMessage('An error occurred while saving the flashcard');
      setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <Layout>
      <div className="container mx-auto my-8 p-6 max-w-md bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Create a New Flashcard</h1>
        {message && <div className="mb-4 text-center text-green-500">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="front" className="block text-sm font-medium text-gray-700">Front</label>
            <input
              type="text"
              id="front"
              name="front"
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter front text"
              value={front}
              onChange={(e) => setFront(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="back" className="block text-sm font-medium text-gray-700">Back</label>
            <input
              type="text"
              id="back"
              name="back"
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter back text"
              value={back}
              onChange={(e) => setBack(e.target.value)}
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Save Flashcard</button>
        </form>
      </div>
    </Layout>
  );
}
