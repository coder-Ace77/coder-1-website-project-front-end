import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../control/api'; // Use your custom Axios instance
import '../css/QuestionList.css';
import NavBar from '../components/nav_bar';
import TagSearchComponent from '../components/TagSearchComponent';

const QuestionListPage = () => {
    const [questions, setQuestions] = useState([]);
    const [tags, setTags] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        request.get('/questionlist')
            .then(response => {
                setQuestions(response.data);
                setFilteredQuestions(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the questions!', error);
            });
    }, []);

    const handleTagChange = (selectedTags) => {
        setTags(selectedTags);
        filterQuestions(selectedTags);
    };

    const filterQuestions = (selectedTags) => {
        if (selectedTags.length === 0) {
            setFilteredQuestions(questions);
        } else {
            const filtered = questions.filter(question =>
                selectedTags.every(tag => question.tags.includes(tag))
            );
            setFilteredQuestions(filtered);
        }
    };

    const clearFilter = () => {
        setTags([]);
        setFilteredQuestions(questions);
    };

    const handleQuestionClick = (quesName) => {
        navigate(`/ques/${quesName}`);
    };

    return (
        <div>
            <NavBar />
            <div className="question-list-page">
                <div className="search-tags-section">
                    <TagSearchComponent selectedTags={tags} onTagChange={handleTagChange} />
                    {tags.length > 0 && (
                        <button className="clear-filter-btn" onClick={clearFilter}>Clear Filter</button>
                    )}
                </div>
                <div className="horizontal-question-list">
                    {filteredQuestions.map((question, index) => (
                        <div
                            key={index}
                            className={index % 2 === 0 ? "question-item-even" : "question-item-odd"}
                            onClick={() => handleQuestionClick(question.name)}
                        >
                            {question.name}
                        </div>
                    ))}
                    {filteredQuestions.length === 0 && (
                        <div className="no-results">
                            No questions found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestionListPage;
