import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import CustomButton from './CustomButton';
import './css/RightSection.css';

const RightSection = () => {
    const { quesName } = useParams();
    const [code, setCode] = useState('// Write your code here');
    const [notification, setNotification] = useState({ show: false, message: '', isSuccess: false });

    const handleSubmit = () => {
        const submissionData = {
            user: 'dummyUser',
            code: code,
            name: quesName,
            lang: 'cpp'
        };

        axios.post('http://localhost:5000/submit', submissionData)
            .then(response => {
                const { status, message } = response.data;
                console.log('Submission successful:', response.data);
                setNotification({ show: true, message, isSuccess: status });
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
                <select>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
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
                    language="cpp"
                    theme="vs-dark"
                    defaultValue="// Start coding here..."
                    onChange={(value, event) => { setCode(value); }}
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

