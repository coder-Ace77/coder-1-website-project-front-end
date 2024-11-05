import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../css/Code.css';
import request from '../control/api';

const Code = () => {
    const [activeSection, setActiveSection] = useState('description');
    const [testCaseResults, setTestCaseResults] = useState(null);
    const [isRunningTests, setIsRunningTests] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: '', isSuccess: false });
    const [isLoading, setIsLoading] = useState(true);

    // Simulating loading state (for demonstration)
    React.useEffect(() => {
        // Simulate a delay to showcase the loading skeletons
        setTimeout(() => setIsLoading(false), 2000);
    }, []);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleRunTestCases = (code, language, quesName) => {
        setIsRunningTests(true);
        const testData = {
            code: code,
            name: quesName,
            lang: language
        };

        request.post('/runsample', testData, { withCredentials: true })
            .then(response => {
                const results = response.data;
                if (results.status === false) {
                    setNotification({ show: true, message: results.msg, isSuccess: false });
                    setTimeout(() => {
                        setNotification({ show: false, message: '', isSuccess: false });
                    }, 5000);
                } else {
                    setTestCaseResults(results);
                    setActiveSection('testcases');
                }
            })
            .catch(err => {
                setNotification({ show: true, message: "Error while running test cases", isSuccess: false });
                setTimeout(() => {
                    setNotification({ show: false, message: '', isSuccess: false });
                }, 5000);
            })
            .finally(() => {
                setIsRunningTests(false);
            });
    };

    const handleSubmissionResponse = (status) => {
        if (status) {
            setActiveSection('submission');
        } else {
            setActiveSection('description');
        }
    };

    return (
        <div className="home">
            <NavBar />
            <div className="main-container">
                {notification.show && (
                    <div className={`notification ${notification.isSuccess ? 'success' : 'error'}`}>
                        {notification.message}
                    </div>
                )}

                {isLoading ? (
                    <div className="loading-skeletons">
                        <Skeleton height={300} width="100%" borderRadius={8} />
                        <Skeleton height={300} width="100%" borderRadius={8} style={{ marginTop: '20px' }} />
                    </div>
                ) : (
                    <>
                        <LeftSection
                            activeSection={activeSection}
                            onSectionChange={handleSectionChange}
                            testCaseResults={testCaseResults}
                        />
                        <RightSection
                            onSubmissionResponse={handleSubmissionResponse}
                            onRunTestCases={handleRunTestCases}
                            isRunningTests={isRunningTests}
                            notification={notification}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Code;
