import React from "react"
import styles from "./Header.module.css"

export default function Header({ current, total, time }) {
  return (
    <div className={styles.header}>
      <h1>Quiz</h1>
      <p>
        Questão {current + 1} de {total}
      </p>
      <p>Tempo restante: {time}s</p>
    </div>
  );
}
