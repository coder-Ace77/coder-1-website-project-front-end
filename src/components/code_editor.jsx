import Editor from '@monaco-editor/react';
import { useState, useReducer, useRef } from 'react';
import axios from 'axios';

const CodeEditor = (props) => {
    const editorRef = useRef(null);
    const TestCasesRun = () => {
        if (editorRef.current) {
            let value = editorRef.current.getValue();
            axios({
                method: 'post',
                url: 'http://localhost:5000/testcases',
                data: {
                    code: value,
                    id: props.id,
                    language: props.language,
                    user: props.user,
                }
            }).then((res) => {
                console.log(res.data);
                const result = res.data;
                if (result.status === 'success') {
                    alert('All test cases passed');
                }
                else {
                    alert('Some test cases failed');
                }
            })
        }
    }

    const SubmitHandler = () => {
        if (editorRef.current) {
            let value = editorRef.current.getValue();
            axios({
                method: 'post',
                url: 'http://localhost:5000/submit',
                data: {
                    code: value,
                    id: props.id,
                    language: props.language,
                    user: props.user,
                }
            }).then((res) => {
                console.log(res.data);
                const result = res.data;
                if (result.status === 'success') {
                    alert('All test cases passed');
                }
                else {
                    alert('Some test cases failed');
                }
            })
        }
    }

    return (
        <span>
            <Editor defaultLanguage="javascript" font theme='vs-dark' options={{ fontSize: '16' }} ref={editorRef} />
            <button onClick={TestCasesRun}>Run test cases</button>
            <button onClick={SubmitHandler}>Submit</button>
        </span>
    );
}

export default CodeEditor;
