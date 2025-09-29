import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";
import { questions } from "./data/questions";
import styles from "./App.module.css";

function App() {
  const [current, setCurrent] = useState(0); 
  const [score, setScore] = useState(0); 
  const [finished, setFinished] = useState(false); 
  const [time, setTime] = useState(15); 

  useEffect(() => {
  })}
export default App;
