import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/QuestionList.css';
import NavBar from '../components/nav_bar';

const QuestionListPage = () => {
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/questionlist')
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the questions!', error);
            });
    }, []);

    const handleQuestionClick = (quesName) => {
        navigate(`/ques/${quesName}`);
    };

    return (
        <div>
            <NavBar />
        <div className="question-list-page">
            <div className="question-list">
                {questions.map((question, index) => (
                    <div
                        key={index}
                        className="question-item"
                        onClick={() => handleQuestionClick(question.name)}
                    >
                        {question.name}
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default QuestionListPage;
