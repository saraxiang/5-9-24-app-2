import React from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-6">All Flashcards</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="card">
            <div className="card-front">test1</div>
            <div className="card-back">test2</div>
          </div>
          <div className="card">
            <div className="card-front">test3</div>
            <div className="card-back">test4</div>
          </div>
          <div className="card">
            <div className="card-front">test5</div>
            <div className="card-back">test6</div>
          </div>
        </div>
      </main>
      <footer className="text-center py-4">@Copyright 2024 Flash Card App</footer>
    </div>
  );
}
