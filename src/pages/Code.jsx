// src/pages/Code.js
import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';
import '../css/Code.css';

const Code = () => {
    const [activeSection, setActiveSection] = useState('description'); // Default active section

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="home">
            <NavBar />
            <div className="main-container">
                <LeftSection activeSection={activeSection} onSectionChange={handleSectionChange} />
                <RightSection onSubmissionSuccess={() => handleSectionChange('submission')} />
            </div>
        </div>
    );
}

export default Code;
