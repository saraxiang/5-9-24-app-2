/* use client */
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import TriviaQuestions from '../components/TriviaQuestions';

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');

  const handleStartGame = () => {
    if (playerName.trim() !== '') {
      setGameStarted(true);
    } else {
      alert('Please enter your name to start the game.');
    }
  };

  return (
    <div>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        {!gameStarted ? (
          <>
            <h1 className="text-4xl font-bold mb-6">Welcome to the Trivia Game!</h1>
            <input
              type="text"
              placeholder="Enter your name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="mb-4 p-2 border border-gray-300"
            />
            <button onClick={handleStartGame} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start Game
            </button>
          </>
        ) : (
          <TriviaQuestions playerName={playerName} />
        )}
      </main>
    </div>
  );
}
