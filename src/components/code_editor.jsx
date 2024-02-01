import Editor from '@monaco-editor/react';

const CodeEditor = () => {
    return (
        <Editor defaultLanguage="javascript" font theme='vs-dark' options={{ fontSize: '16' }} />
    );
}

export default CodeEditor;
