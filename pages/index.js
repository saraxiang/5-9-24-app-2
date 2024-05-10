import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    async function fetchFlashcards() {
      console.log('Fetching flashcards...');
      try {
        const response = await fetch('/api/flashcards');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data received:', data);
        // Log the structure of the first flashcard object
        if (data.length > 0) {
          console.log('Structure of the first flashcard:', Object.keys(data[0]));
        }
        setFlashcards(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }

    fetchFlashcards();
  // Adding an empty dependency array to ensure fetchFlashcards is only called once
  }, []);

  return (
    <div>
      <Navigation />
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-6">All Flashcards</h1>
        <div className="grid grid-cols-3 gap-4">
          {flashcards.map((flashcard, index) => (
            <div key={index} className="card">
              <div className="card-front">{flashcard.front}</div>
              <div className="card-back">{flashcard.back}</div>
            </div>
          ))}
        </div>
      </main>
      <footer className="text-center py-4">@Copyright 2024 Flash Card App</footer>
    </div>
  );
}
