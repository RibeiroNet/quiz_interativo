import React from "react"
import styles from "./QuestionCard.module.css"

export default function QuestionCard({ question, onAnswer }) {
  return (
    <div className={styles.card}>
      <h2>{question.question}</h2>
      <div>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className={styles.option}
          >
            {String.fromCharCode(65 + index)} - {option}
          </button>
        ))}
      </div>
    </div>
  );
}
