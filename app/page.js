import { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for starting the game with the entered name
    console.log(`Game started for: ${name}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Trivia Game!</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          className="mb-4 p-2 text-center text-lg border-2 border-blue-500 rounded-md"
          required
          value={name}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Game
        </button>
      </form>
    </main>
  );
}
