import { useState } from 'react';
import confetti from 'canvas-confetti';

const TriviaGame = () => {
  // Dummy data for trivia questions
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris"
    },
    // More questions can be added here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleSubmitAnswer = (option) => {
    // Check if the answer is correct
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      // Trigger confetti animation for correct answer
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    // Save the answer
    setUserAnswers([...userAnswers, option]);

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Game is over, here we can redirect to the results page or handle the end of the game
    }
  };

  return (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button key={index} onClick={() => handleSubmitAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <div>
        <p>Your score: {score}</p>
        <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      </div>
    </div>
  );
};

export default TriviaGame;
