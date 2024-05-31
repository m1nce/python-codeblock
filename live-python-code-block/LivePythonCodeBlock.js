import React, { useState } from 'react';
import axios from 'axios';

const LivePythonCodeBlock = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const executeCode = async () => {
    try {
      const response = await axios.post('http://localhost:8000/execute', { code });
      setOutput(response.data.stdout || response.data.stderr || response.data.error);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your Python code here..."
      ></textarea>
      <br />
      <button onClick={executeCode}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
};

export default LivePythonCodeBlock;
