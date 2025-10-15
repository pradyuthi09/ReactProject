import React, { useState, useEffect } from 'react';
import { wordData } from '../data/words';
import './Game.css';

// Helper to shuffle letters
const shuffleWord = (word) => {
  const arr = word.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
};

function Game() {
  const [difficulty, setDifficulty] = useState('easy');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);

  const filteredWords = wordData[difficulty];

  useEffect(() => {
    const highScore = localStorage.getItem("highScore") || 0;
    console.log("High Score:", highScore);
  }, []);

  const checkAnswer = () => {
    if(userInput.trim().toLowerCase() === filteredWords[currentIndex].word.toLowerCase()){
      setFeedback('✅ Correct!');
      setScore(score + 1);
      localStorage.setItem(
        "highScore",
        Math.max(score + 1, localStorage.getItem("highScore") || 0)
      );
    } else {
      setFeedback('❌ Try again!');
    }
  };

  const nextWord = () => {
    setUserInput('');
    setFeedback('');
    setShowHint(false);
    if(currentIndex + 1 < filteredWords.length){
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Game Over! You scored ${score}/${filteredWords.length}`);
      setCurrentIndex(0);
      setScore(0);
    }
  };

  return (
    <div className="game-container">
      <h1>Scramble It!</h1>

      {/* Difficulty selector */}
      <div className="select-container">
        <label>
          Level: 
          <select 
            value={difficulty} 
            onChange={e => { setDifficulty(e.target.value); setCurrentIndex(0); setScore(0); setFeedback(''); }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      </div>

      {/* Scrambled word */}
      <p className="scrambled-word">{shuffleWord(filteredWords[currentIndex].word)}</p>

      {/* User input */}
      <input 
        type="text" 
        placeholder="Your guess..." 
        value={userInput} 
        onChange={e => setUserInput(e.target.value)}
      />

      {/* Buttons */}
      <div>
        <button className="btn-check" onClick={checkAnswer}>Check Answer</button>
        <button className="btn-next" onClick={nextWord}>Next Word</button>
      </div>

      {/* Feedback */}
      <p className={`feedback ${feedback.includes('Correct') ? 'correct' : 'wrong'}`}>
        {feedback}
      </p>

      {/* Hint */}
      <p className="hint">
        {showHint ? filteredWords[currentIndex].hint : 
          <button className="show-hint-btn" onClick={() => setShowHint(true)}>Show Hint</button>}
      </p>

      {/* Score */}
      <p className="score">Score: {score}</p>
    </div>
  );
}

export default Game;
