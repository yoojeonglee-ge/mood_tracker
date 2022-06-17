import React, { useState } from 'react';
import { overgeneralization, perfectionism, fortuneTelling } from './api/distortionAPI';
import './App.css';

function App() {
  const distortionList = ['overgeneralization', 'perfectionism', 'fortune telling'];
  const statement = (distortion: string, isTrue: boolean): string => isTrue ? `You may have the cognitive distortion ${distortion}.` : '';

  const [log, setLog] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    setResult( statement(distortionList[0], overgeneralization(log)) );
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setLog(event.target.value);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea value={log} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {result}
    </div>
  );
}

export default App;
