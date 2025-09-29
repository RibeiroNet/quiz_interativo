import questions from "../..data/question"
import styles from "./QuestionCard.module.css";

export default function Questions () {
    const questionList = questions.map(questions => (
        <div key={questionList.id}>
        <span className="pergunta">{question.question}</span>
        <span className="opção">{question.options}</span>
        </div>
    ));

    return (
        <div className="questions-container">
            {questionList}
        </div>
    );
};


