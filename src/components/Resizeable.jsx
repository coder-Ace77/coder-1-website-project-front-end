import React, { useState } from 'react';
import CodeEditor from './code_editor';
import '../components/css/resize.css';


const ResizableDiv = () => {
  const [verticalSplitterPos, setVerticalSplitterPos] = useState(window.innerWidth / 2);
  const [horizontalSplitterPos, setHorizontalSplitterPos] = useState(window.innerHeight / 2);

  const handleVerticalMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleVerticalMouseMove);
    document.addEventListener('mouseup', handleVerticalMouseUp);
  };

  const handleVerticalMouseMove = (e) => {
    setVerticalSplitterPos(e.clientX);
  };

  const handleVerticalMouseUp = () => {
    document.removeEventListener('mousemove', handleVerticalMouseMove);
    document.removeEventListener('mouseup', handleVerticalMouseUp);
  };

  const handleHorizontalMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleHorizontalMouseMove);
    document.addEventListener('mouseup', handleHorizontalMouseUp);
  };

  const handleHorizontalMouseMove = (e) => {
    setHorizontalSplitterPos(e.clientY);
  };

  const handleHorizontalMouseUp = () => {
    document.removeEventListener('mousemove', handleHorizontalMouseMove);
    document.removeEventListener('mouseup', handleHorizontalMouseUp);
  };

  return (
    <div className="ResizableDiv">
      <div style={{ width: verticalSplitterPos }} className="left-div">
        Question
      </div>
      <div
        onMouseDown={handleVerticalMouseDown}
        style={{ left: verticalSplitterPos }}
        className="vertical-splitter"
      />
      <div style={{ left: verticalSplitterPos + 10 }} className="right-div">
        <div style={{ height: horizontalSplitterPos }} className="top-div">
          <CodeEditor />
        </div>
        <div
          onMouseDown={handleHorizontalMouseDown}
          style={{ top: horizontalSplitterPos }}
          className="horizontal-splitter"
        />
        <div style={{ top: horizontalSplitterPos + 10 }} className="bottom-div">
          Test Cases
        </div>
      </div>
    </div>
  );
};

export default ResizableDiv;
