import React, { useState } from 'react';
import Navigation from '../components/Navigation';

export default function CreateFlashcard() {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

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
        alert('Flashcard created successfully!');
        setFront('');
        setBack('');
      } else {
        alert(`Failed to create flashcard: ${data.message}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div>
      <Navigation />
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-6">Create a New Flashcard</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Front of the flashcard"
            value={front}
            onChange={(e) => setFront(e.target.value)}
            className="mb-4 p-2 border border-gray-300"
            required
          />
          <input
            type="text"
            placeholder="Back of the flashcard"
            value={back}
            onChange={(e) => setBack(e.target.value)}
            className="mb-4 p-2 border border-gray-300"
            required
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save Flashcard
          </button>
        </form>
      </main>
      <footer className="text-center py-4">@Copyright 2024 Flash Card App</footer>
    </div>
  );
}
