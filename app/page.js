import { useState } from 'react';
import TriviaQuestions from '../components/TriviaQuestions'; // Import the TriviaQuestions component

export default function Home() {
  const [name, setName] = useState('');
  const [gameStarted, setGameStarted] = useState(false); // State to track if the game has started

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGameStarted(true); // Set game to started
    console.log(`Game started for: ${name}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Trivia Game!</h1>
      {!gameStarted ? ( // Conditionally render input and button if game has not started
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
      ) : (
        <TriviaQuestions /> // Render the TriviaQuestions component when the game starts
      )}
    </main>
  );
}
