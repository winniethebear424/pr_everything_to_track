
import React, {useState} from 'react';
import './App.css';

function App(){
    const [textInput, setTextInput] = useState('');
    const [fileInput, setFileInput] = useState(null);

    const handleTextChange = (e) => {
        setTextInput(e.target.value);
    };
    const handleFileChange = (e) => {
        setFileInput(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        console.log('Text Input:', textInput);
        console.log('File Input:', fileInput);
    };

    return (
        <div className = 'App'>
            <h1> Small Full Stack Project </h1>
            <div>
                <label htmlFor = 'textInput'> Text Input: </label>
                <input
                    type = 'text'
                    id = 'textInput'
                    value = {textInput}
                    onChange = {handleTextChange}
                />
            </div>
            <div>
                <label htmlFor = 'fileInput'> File Input: </label>
                <input
                    type = 'file'
                    id = 'fileInput'
                    accept = '.txt, .pdf, .doc'
                    onChange = {handleFileChange}
                />
                <span>{fileInput ? fileInput.name: 'No file chosen'}</span>
            </div>
            <button onClick = {handleSubmit}> Submit </button>
        </div>
    );

    export default App;
}