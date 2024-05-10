import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Trivia Game!</h1>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter your name"
          className="mb-4 p-2 text-center text-lg border-2 border-blue-500 rounded-md"
          required
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
