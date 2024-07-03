// LeftSection.js

import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import './css/LeftSection.css';

const LeftSection = () => {
    const [activeSection, setActiveSection] = useState('description'); // Default active section

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="left-section">
            <div className="toggle-buttons">
                <ToggleButton
                    color={'grey'}
                    active={activeSection === 'description'}
                    onClick={() => handleSectionChange('description')}
                >
                    Problem Description
                </ToggleButton>
                <ToggleButton
                    color={'grey'}
                    active={activeSection === 'editorial'}
                    onClick={() => handleSectionChange('editorial')}
                >
                    Editorial
                </ToggleButton>
                <ToggleButton
                    color={'grey'}
                    active={activeSection === 'testcases'}
                    onClick={() => handleSectionChange('testcases')}
                >
                    Test Cases
                </ToggleButton>
                <ToggleButton
                    color={'grey'}
                    active={activeSection === 'submission'}
                    onClick={() => handleSectionChange('submission')}
                >
                    Submission
                </ToggleButton>
            </div>
            <div className="section-content">
                {/* Render content based on activeSection */}
                {/* Example: */}
                {activeSection === 'description' && <div>Problem Description Section</div>}
                {activeSection === 'editorial' && <div>Editorial Section</div>}
                {activeSection === 'submission' && <div>Submission Section</div>}
                {activeSection === 'testcases' && <div>Test Cases Section</div>}
            </div>
        </div>
    );
}

export default LeftSection;
