import { useState } from 'react';

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
      // Here we will add the animation for correct answer later
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
