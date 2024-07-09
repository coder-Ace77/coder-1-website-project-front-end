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
                <div className="search-tags-section">
                    <input type="text" placeholder="Search questions..." className="search-bar" />
                </div>
                <div className="horizontal-question-list">
                    {questions.map((question, index) => (
                        index%2 === 0 ?
                        <div
                            key={index}
                            className="question-item-even"
                            onClick={() => handleQuestionClick(question)}
                        >
                            {question}
                        </div>: <div
                            key={index}
                            className="question-item-odd"
                            onClick={() => handleQuestionClick(question)}
                        >
                            {question}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionListPage;
