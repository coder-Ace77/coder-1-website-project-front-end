// src/components/SubmissionSection.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/SubmissionSection.css';
import { useParams } from 'react-router-dom';

const SubmissionSection = ({ques}) => {
    const [submissions, setSubmissions] = useState([]);


    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                console.log(ques);
                const url = `http://localhost:5000/submissions/${ques}`;
                console.log(url);
                const response = await axios.get(url, { withCredentials: true });
                console.log(response.data);
                if (response.data.status) {
                    setSubmissions(response.data.submissions.reverse());
                }
            } catch (error) {
                console.error('Error fetching submissions:', error);
            }
        };

        fetchSubmissions();
    }, [ques]);

    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="submission-section">
            {submissions.map((submission, index) => (
                <div key={index} className="submission-card">
                    <div className="submission-header">
                        <span>Status: {submission.status}</span>
                        <button onClick={() => toggleExpand(index)}>
                            {expandedId === index ? 'Collapse' : 'Expand'}
                        </button>
                    </div>
                    <div className={`submission-code ${expandedId === index ? 'expanded' : 'collapsed'}`}>
                        <pre>
                            <code>
                                {expandedId === index ? submission.code : submission.code.split('\n').slice(0, 3).join('\n') + '...'}
                            </code>
                        </pre>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SubmissionSection;
