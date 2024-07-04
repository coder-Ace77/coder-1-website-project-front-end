import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './css/Editorial.css';

const Editorial = () => {
    const { quesName } = useParams();
    const [editorial, setEditorial] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/ques/${quesName}/editorial`)
            .then(response => {
                setEditorial(response.data.editorial);
            })
            .catch(error => {
                console.error('There was an error fetching the editorial!', error);
            });
    }, [quesName]);

    if (!editorial) {
        return <div className="editorial-page">Loading...</div>;
    }

    return (
        <div className="editorial-page">
            <h2>Editorial</h2>
            <div className="editorial-content">
                <pre>{editorial}</pre>
            </div>
        </div>
    );
};

export default Editorial;
