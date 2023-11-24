import React, { useState } from 'react';
import './TakeQuiz.css';
import Sidebar from "./Sidebar";

function TakeQuiz() {
  const [score, setScore] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizStatus, setQuizStatus] = useState('');

  const quizzes = [
    {
      question: "What is the name of the male protagonist in the book The Time Traveler's Wife?",
      options: ['Claire', 'Henry', 'Rachel', 'Gomez'],
      correctAnswer: 'Henry',
    },
    {
      question: 'The One Ring was created by which dark lord?',
      options: ['Morgoth', ' Saruman', ' Gollum', 'Sauron'],
      correctAnswer: 'Sauron',
    },
    {
      question: 'What is the name of the wizard who guides and assists the Fellowship of the Ring?',
      options: ['Dumbledore', 'Radagast', 'Gandalf', 'Merlin'],
      correctAnswer: 'Gandalf',
    },
    {
      question: 'Addie LaRue makes a Faustian bargain with a dark force to gain what ability?',
      options: ['Eternal youtht', 'Invisibility', 'Time travel', 'Superhuman strength'],
      correctAnswer: 'Invisibility',
    },
    {
      question: "Addie's life takes place in multiple time periods, including which of the following?",
      options: [' 18th century France', ' Victorian London', 'Modern-day New York', 'All of the above'],
      correctAnswer: 'All of the above',
    },
    // Add more quizzes here
  ];

  const handleOptionClick = (selectedOption, correctAnswer) => {
    if (selectedOption === correctAnswer) {
      setScore(score + 10);
      setQuizStatus('correct');
    } else {
      setQuizStatus('wrong');
    }
  };

  const handleNextQuiz = () => {
    setCurrentQuiz(currentQuiz + 1);
    setQuizStatus(''); // Reset quiz status
  };

  const currentQuizData = quizzes[currentQuiz];

  // Sample data for the table rows
  const tableRowsData = [
    { id: 1, name: "The Time Traveler's Wife", date: '2023-10-05', subscriptionID: 'XYZ456' },
    { id: 2, name: 'The Lord of the Rings', date: '2023-10-06', subscriptionID: 'DEF789' },
    { id: 3, name: 'The Invisible Life of Addie LaRue', date: '2023-10-06', subscriptionID: 'DEF789' },
    // Add more data here
  ];

  return (
    <>
    <div className="quiz-page">
      <div className="ebook-section">
        <h2>Select From Your Active Subscription</h2>
        <table className="ebook-table">
          <thead>
            <tr>
              <th>E-Book ID</th>
              <th>E-Book Name</th>
              <th>Subscription Date</th>
              <th>Subscription ID</th>
            </tr>
          </thead>
          <tbody>
            {tableRowsData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.subscriptionID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="quiz-box">
      <h2>Quiz</h2>
      {currentQuizData && (
        <>
          <p>{currentQuizData.question}</p>
          <ul>
            {currentQuizData.options.map((option, index) => (
              <li
                key={index}
                onClick={() =>
                  handleOptionClick(option, currentQuizData.correctAnswer)
                }
                className={
                  quizStatus === 'correct' && currentQuizData.correctAnswer === option
                    ? 'correct'
                    : quizStatus === 'wrong' && currentQuizData.correctAnswer === option
                    ? 'wrong'
                    : ''
                  }
                >
                  {option}
                </li>
              ))}
            </ul>
          </>
        )}
        {quizStatus && (
          <p>
            {quizStatus === 'correct' ? 'Correct Answer!' : 'Wrong Answer!'} The correct answer is{' '}
            {currentQuizData.correctAnswer}.
          </p>
        )}
        {currentQuiz < quizzes.length - 1 && (
          <button className="next-button" onClick={handleNextQuiz}>
          Next Quiz
        </button>
      )}
      <p>Score: {score}</p>
    </div>
    <Sidebar />
    </>
  );
}

export default TakeQuiz;
