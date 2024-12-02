// AudioPlayer.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AuditForm = () => {
    const location = useLocation(); // Get location object
    const [startDate, setStartDate] = useState(new Date());
    const [consultant, setConsultant] = useState(null);
  
    useEffect(() => {
      if (location.state && location.state.consultant) {
        setConsultant(location.state.consultant); // Set the consultant data
      }
    }, [location.state]);
  
    if (!consultant) {
      return; // Display loading while consultant data is being fetched
    }

    return (
      <div className="bg-gray-900 rounded-lg shadow-lg p-4 w-[87%]">
        <h2 className="text-white font-bold mb-2">Consultant Conversation</h2>
        <Conversation consultant={consultant} />
        <audio controls className="w-full">
          <source src={consultant.call} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
};

const Conversation = ({ consultant }) => {
  return (
      <h2 className="text-gray-700 font-bold mb-2"></h2>
  );
};

export default AuditForm;


