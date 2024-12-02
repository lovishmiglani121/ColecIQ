import React, { useState } from 'react';
import axios from 'axios';

const AudioUpload = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [avayaId, setAvayaId] = useState('');
  const [lastEvaluation, setLastEvaluation] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0); // New state for progress

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !name || !employeeId || !avayaId || !lastEvaluation) {
      setMessage('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('audioFile', file);
    formData.append('name', name);
    formData.append('employee_id', employeeId);
    formData.append('avaya_id', avayaId);
    formData.append('last_evaluation', lastEvaluation);
    formData.append('description', description);

    try {
      await axios.post('http://localhost:8080/api/audio/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted); // Update progress state
        },
      });
      setMessage('Audio file uploaded successfully');
    } catch (error) {
      setMessage('Failed to upload file');
    }
  };

  return (
    <div>
      <h2>Upload Audio File</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Avaya ID:</label>
          <input
            type="text"
            value={avayaId}
            onChange={(e) => setAvayaId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Evaluation Date:</label>
          <input
            type="date"
            value={lastEvaluation}
            onChange={(e) => setLastEvaluation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Select audio file:</label>
          <input type="file" accept="audio/*" onChange={handleFileChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      {progress > 0 && (
        <div style={{ marginTop: '20px' }}>
          <progress value={progress} max="100" />
          <span>{progress}%</span>
        </div>
      )}
    </div>
  );
};

export default AudioUpload;
