import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import CustomButton from './CustomButton';
import './css/RightSection.css';

const RightSection = ({ onSubmissionSuccess }) => {
    const { quesName } = useParams();
    const [code, setCode] = useState('// Write your code here');
    const [language, setLanguage] = useState('cpp'); // Default language
    const [notification, setNotification] = useState({ show: false, message: '', isSuccess: false });

    useEffect(() => {
        const savedCode = localStorage.getItem(`${quesName}-${language}-code`);
        if (savedCode) {
            setCode(savedCode);
        }
    }, [quesName, language]);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        const savedCode = localStorage.getItem(`${quesName}-${e.target.value}-code`);
        if (savedCode) {
            setCode(savedCode);
        } else {
            setCode('// Write your code here');
        }
    };

    const handleEditorChange = (value) => {
        setCode(value);
        localStorage.setItem(`${quesName}-${language}-code`, value);
    };

    const handleSubmit = () => {
        const submissionData = {
            code: code,
            name: quesName,
            lang: language
        };

        axios.post('http://localhost:5000/submit', submissionData, { withCredentials: true })
            .then(response => {
                const { status, message } = response.data;
                console.log('Submission successful:', response.data);
                setNotification({ show: true, message, isSuccess: status });
                if (status) {
                    onSubmissionSuccess();
                }
                setTimeout(() => {
                    setNotification({ show: false, message: '', isSuccess: false });
                }, 5000);
            })
            .catch(error => {
                setNotification({ show: true, message: 'Server error, please try again later.', isSuccess: false });
                setTimeout(() => {
                    setNotification({ show: false, message: '', isSuccess: false });
                }, 5000);
            });
    };

    return (
        <div className="right-section">
            <div className="section-header">
                <select value={language} onChange={handleLanguageChange} className="language-select">
                    <option value="cpp">C++</option>
                    <option value="c">C</option>
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                </select>
                <div>
                    <CustomButton color="grey">
                        Run Test Cases
                    </CustomButton>
                    <CustomButton color="green" onClick={handleSubmit}>
                        Submit
                    </CustomButton>
                </div>
            </div>
            <div className="monaco-editor">
                <Editor
                    language={language === 'c' ? 'cpp' : language} // Adjusting for C to default to C++
                    theme="vs-dark"
                    value={code}
                    onChange={handleEditorChange}
                />
            </div>
            {notification.show && (
                <div className={`notification ${notification.isSuccess ? 'success' : 'error'}`}>
                    {notification.message}
                </div>
            )}
        </div>
    );
};

export default RightSection;
