import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '../control/api';
import { CopyBlock, dracula } from 'react-code-blocks';
import '../css/SubmissionView.css';
import NavBar from '../components/nav_bar';

const SubmissionView = () => {
    const { id } = useParams();
    const [submission, setSubmission] = useState(null);
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        const fetchSubmission = async () => {
            try {
                const response = await request.get(`/submission/view/${id}`, { withCredentials: true });
                if (response.data.status) {
                    setSubmission(response.data.submission);
                    setQuestion(response.data.submission.name);
                }
            } catch (error) {
                console.error('Error fetching submission:', error);
            }
        };

        fetchSubmission();
    }, [id]);

    if (!submission || !question) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar />
            <div className="submission-details">
                <h1 className="question-title">{question}</h1>
                <div className="submission-info">
                    <div className="submission-user">Submitted by: {submission.user}</div>
                    <div className={`submission-status ${submission.status === 'Accepted' ? 'status-accepted' : 'status-rejected'}`}>
                        Status: {submission.status}
                    </div>
                    <div className="submission-verdict">Verdict: {submission.message}</div>
                    <div className="submission-time">Time Taken: {submission.time_taken || '0ms'}</div>
                </div>
                <CopyBlock text={submission.code} language='cpp' theme={dracula} showLineNumbers={true} />
            </div>
        </div>
    );
};

export default SubmissionView;
