// RightSection.js
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import axios from 'axios';
import CustomButton from './CustomButton';
import React from 'react';
import './css/RightSection.css';

const RightSection = () => {
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
                    <CustomButton color="green">
                        Submit
                    </CustomButton>
                </div>
                
            </div>
            <div className="monaco-editor">
                <Editor
                    language="cpp"
                    theme="vs-dark"
                    defaultValue="// Start coding here..."
                />
            </div>
        </div>
    );
}

export default RightSection;
