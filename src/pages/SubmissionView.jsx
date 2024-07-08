// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import '../css/SubmissionView.css';
// import NavBar from '../components/nav_bar';

// const SubmissionView = () => {
//     const { id } = useParams();
//     const [submission, setSubmission] = useState(null);
//     const [question, setQuestion] = useState(null);

//     useEffect(() => {
//         const fetchSubmission = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/submission/view/${id}`, { withCredentials: true });
//                 console.log(response.data);
//                 if (response.data.status) {
//                     setSubmission(response.data.submission);
//                     setQuestion(response.data.submission.name);
//                 }
//             } catch (error) {
//                 console.error('Error fetching submission:', error);
//             }
//         };

//         fetchSubmission();
//     }, [id]);

//     if (!submission || !question) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <NavBar />
//             <div className="submission-details">
//                 <h1>{question.name}</h1>
//                 <pre className="submission-code">
//                     <code>{submission.code}</code>
//                 </pre>
//                 <div className={`submission-status ${submission.status.toLowerCase()}`}>
//                     {submission.status}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SubmissionView;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/SubmissionView.css';
import NavBar from '../components/nav_bar';

const SubmissionView = () => {
    const { id } = useParams();
    const [submission, setSubmission] = useState(null);
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        const fetchSubmission = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/submission/view/${id}`, { withCredentials: true });
                console.log(response.data);
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
                <div className={`submission-status `}>
                    {submission.status}
                </div>
                <pre className="submission-code">
                    <code>{submission.code}</code>
                </pre>
            </div>
        </div>
    );
};

export default SubmissionView;

