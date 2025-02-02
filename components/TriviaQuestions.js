import { useState } from 'react';
import confetti from 'canvas-confetti';

const TriviaQuestions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0); // Added state to track the score
  const [questions, setQuestions] = useState([
    // Dummy data for questions
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris"
    },
    // Add more questions here
  ]);

  const handleAnswer = (option) => {
    // Check if the answer is correct
    const isCorrect = questions[currentQuestionIndex].answer === option;
    if (isCorrect) {
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setScore(score + 1); // Increment score if the answer is correct
    }

    // Save the user's answer
    setUserAnswers([...userAnswers, { question: questions[currentQuestionIndex].question, isCorrect }]);

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <ul>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li key={index} onClick={() => handleAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
      {/* Display the current score */}
      <p>Your score: {score}/{currentQuestionIndex}</p>
    </div>
  );
};

export default TriviaQuestions;
