import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    async function fetchFlashcards() {
      const response = await fetch('/api/flashcards');
      const data = await response.json();
      setFlashcards(data);
    }

    fetchFlashcards();
  }, []);

  return (
    <div>
      <Navigation />
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-6">All Flashcards</h1>
        <div className="grid grid-cols-3 gap-4">
          {flashcards.map((flashcard) => (
            <div key={flashcard.id} className="card">
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
