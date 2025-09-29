Objetivo do Projeto

Este projeto é um quiz interativo desenvolvido em React com o propósito de aplicar conceitos importantes do React, como useState, useEffect, passagem de props, CSS Modules, e manipulação de tempo e estado. O quiz conta com 10 questões de múltipla escolha sobre React, onde o usuário interage com uma interface de perguntas, respostas e temporizador, além de obter um resultado no final com a pontuação, tempo gasto e acertos.

Header
O componente Header exibe as informações da questão atual, o total de questões, e o temporizador de cada questão.

QuestionCard
O componente QuestionCard é responsável por exibir o enunciado da questão e suas alternativas de resposta, além de gerenciar a seleção de uma resposta e avançar para a próxima questão.

ScoreBoard
O componente ScoreBoard exibe o resultado do quiz após o usuário responder todas as questões. Ele mostra o desempenho detalhado do usuário, incluindo as respostas corretas, incorretas e o tempo gasto em cada questão.

A estrutura do projeto está organizada da seguinte forma:
src/
├─ components/
│  ├─ Header/
│  │  ├─ index.jsx
│  │  └─ Header.module.css
│  ├─ QuestionCard/
│  │  ├─ index.jsx
│  │  └─ QuestionCard.module.css
│  ├─ ScoreBoard/
│  │  ├─ index.jsx
│  │  └─ ScoreBoard.module.css
├─ data/
│  └─ questions.js
├─ App.jsx
├─ App.module.css
├─ main.jsx

Como Executar o Quiz
1. Clonar o repositório
git clone https://github.com/seu-usuario/quiz-react.git
cd quiz-react

2. Instalar as dependências
npm install

3. Inicie o projeto com o comando:
npm start
