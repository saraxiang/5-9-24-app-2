import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');

  const handleStartGame = () => {
    // Placeholder for starting the game, to be implemented
    console.log('Game started for:', name);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Welcome to Kids Trivia Game!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        className="mb-4 p-2 text-lg border-2 border-blue-500 rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleStartGame}
      >
        Start Game
      </button>
    </main>
  );
}
