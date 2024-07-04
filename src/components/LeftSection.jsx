import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import './css/LeftSection.css';
import ProblemDescription from './ProblemDescription';
import Editorial from './Editorial';

const LeftSection = () => {
    const [activeSection, setActiveSection] = useState('description'); // Default active section

    const handleSectionChange = (section) =>{
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
                {activeSection === 'description' && <div><ProblemDescription/></div>}
                {activeSection === 'editorial' && <div><Editorial/></div>}
                {activeSection === 'submission' && <div>Submission Section</div>}
                {activeSection === 'testcases' && <div>Test Cases Section</div>}
            </div>
        </div>
    );
}

export default LeftSection;
