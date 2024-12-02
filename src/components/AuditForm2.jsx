import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com'; // Import EmailJS

const AuditForm2 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [apiResponse, setApiResponse] = useState('');
  const [responseTitle, setResponseTitle] = useState(''); // State to hold dynamic title
  const [loading, setLoading] = useState(false);
  const [manualAuditLoading, setManualAuditLoading] = useState(false);
  const [autoAuditLoading, setAutoAuditLoading] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [coachingLoading, setCoachingLoading] = useState(false);
  const [responses, setResponses] = useState({}); // State to hold responses

  const questionMapping = {
    "Did the agent greet the customer properly?": "Did the agent greet the customer properly(yes or no) and why please keep it short?",
    "Did the agent verify customer identity?": "Did the agent verify customer identity(yes or no) and why please keep it short?",
    "Did the agent explain the purpose of the call?": "Did the agent explain the purpose of the call (Debt collection)(yes or no) and why please keep it short?",
    "Did the agent explain outstanding amount discussed clearly?": "Did the agent explain outstanding amount discussed clearly(yes or no) and why please keep it short?",
    "Did the agent offer payment options?": "Did the agent offer payment options(yes or no) and why please keep it short?",
    "Was the customer cooperative with the agent?": "During the call, was the customer cooperative with the agent(yes or no) and why please keep it short?",
    "Did the agent discuss an installment plan?": "Did the agent discuss an installment plan(yes or no) and why please keep it short?",
    "Did the customer agree to pay outstanding due?": "Did the customer agree to pay outstanding due(yes or no) and why please keep it short?",
    "Did the agent handle objections/questions professionally?": "Did the agent handle objections/questions professionally(yes or no) and why please keep it short?",
    "Were there any escalations or disputes?": "Were there any escalations or disputes(yes or no) and why please keep it short?",
    "Did the agent follow up on customer queries?": "Did the agent follow up on customer queries(yes or no) and why please keep it short?",
    "Was any inappropriate language used by the agent?": "Was any inappropriate language used by the agent(yes or no) and why please keep it short?",
    "Did the agent summarize the call?": "Did the agent summarize the call(yes or no) and why please keep it short?",
    "Did the agent confirm the customer understood the agreement?": "Did the agent confirm the customer understood the agreement(yes or no) and why please keep it short?",
    "Was the customer thanked for their time?": "Was the customer thanked for their time(yes or no) and why please keep it short?",
    "Were any follow-up actions required?": "Were any follow-up actions required, please keep it short?",
  };
  
  const questions = Object.keys(questionMapping);

  const handleClearResponse = (question) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: { answer: null, comment: '' }, // Reset answer and comment
    }));
  };
  
  const handleManualAudit = async () => {
    setManualAuditLoading(true);
    setResponseTitle('Call Transcript');
    try {
      const response = await fetch('http://localhost:9090/api/audit/manual', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setApiResponse(data.transcript);
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiResponse('An error occurred while fetching the data.');
    } finally {
      setManualAuditLoading(false);
    }
  };
  
  const handleAutoAudit = async () => {
    setAutoAuditLoading(true);
    setResponseTitle('Call aspect');

    try {
      const response = await fetch('http://localhost:9090/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: `${questions.join(' ')} + answer in yes or no only.` }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('API Response:', data);
  
      if (data.success) {
        const initialResponses = {};
        questions.forEach((question) => {
          const answer = data.answers[questionMapping[question]];
          if (answer) {
            initialResponses[question] = {
              answer: answer.toLowerCase().includes('yes'),
              comment: answer,
            };
          } else {
            initialResponses[question] = {
              answer: false,
              comment: 'No answer provided',
            };
          }
        });
        setResponses(initialResponses);
      } else {
        console.error('API response was not successful:', data);
        setApiResponse('Error: ' + data.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiResponse('An error occurred while fetching the data.');
    } finally {
      setAutoAuditLoading(false);
    }
  };
  
  const handleSummary = async () => {
    setSummaryLoading(true);
    setResponseTitle('Call Summary');

    try {
      const response = await fetch('http://localhost:9090/api/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch summary');
      }
  
      const data = await response.json();
      if (data.success) {
        setApiResponse(data.cohereResponse);
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error fetching summary:', error);
    } finally {
      setSummaryLoading(false);
    }
  };
  
  const handleCoaching = async () => {
    setCoachingLoading(true);
    setResponseTitle('Coaching aspect');
    try {
      const response = await fetch('http://localhost:9090/api/coaching', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch coaching feedback');
      }
  
      const data = await response.json();
      if (data.success) {
        setApiResponse(data.cohereResponse);
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error fetching coaching feedback:', error);
    } finally {
      setCoachingLoading(false);
    }
  // Send email only if inappropriate language is marked as 'Yes'
  
  
};

const sendWarningEmail = () => {
  const templateParams = {
    to_name: cunsultant?.name || "Consultant", // Added safe fallback if 'name' is not present
    to_email: 'lovishmiglani.121@gmail.com', // Recipient email
    subject: 'Warning: Inappropriate Language Used',
    message: 'A warning has been triggered for inappropriate language used by the agent during the call.',
  };

  emailjs.send('service_x73ul3k', 'template_y9nh88h', templateParams, 'hOCnWw0C_MdTr4PTv')
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};

const handleResponseChange = (question, answer) => {
  setResponses((prevResponses) => ({
    ...prevResponses,
    [question]: {
      ...prevResponses[question],
      answer: answer,
    },
  }));
};

  return (
    <div className="flex w-[90%]">
  <div className="flex justify-start p-4 w-full">
    <form className="bg-gray-900 p-6 rounded-lg shadow-lg w-full">
      <div className="flex justify-between mb-4">
        <h2 className=" text-white font-bold">Quality Parameters</h2>
        <div className="flex space-x-4">
        <button
            type="button"
            onClick={handleSummary}
            className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700"
            disabled={summaryLoading}
          >
            {summaryLoading ? 'Loading...' : 'Summary'}
          </button>
          <button
            type="button"
            onClick={handleCoaching}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            disabled={coachingLoading}
          >
            {coachingLoading ? 'Loading...' : 'Coaching'}
          </button>
          <button
            type="button"
            onClick={handleAutoAudit}
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-500"
            disabled={autoAuditLoading}
          >
            {autoAuditLoading ? 'Loading...' : 'Auto Audit'}
          </button>
          <button
            type="button"
            onClick={handleManualAudit}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
            disabled={manualAuditLoading}
          >
            {manualAuditLoading ? 'Loading...' : 'Manual Audit'}
          </button>
        </div>
      </div>

      {apiResponse && (
        <div className="mt-4">
          <h3 className="text-white font-bold mb-2">{responseTitle}</h3>
          <textarea
            className="w-full h-32 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={apiResponse}
            readOnly
          />
        </div>
      )}

      {questions.map((question) => (
        <div key={question} className="flex flex-col mt-2">
          <label className="text-white mb-1">{question}</label>
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name={question}
                  value="yes"
                  className="hidden" // Hide the default radio button
                  checked={responses[question]?.answer === true}
                  onChange={() => handleResponseChange(question, true)}
                />
                <span className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                  {responses[question]?.answer === true && (
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                  )}
                </span>
                <span className="ml-2 text-white">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name={question}
                  value="no"
                  className="hidden" // Hide the default radio button
                  checked={responses[question]?.answer === false}
                  onChange={() => handleResponseChange(question, false)}
                />
                <span className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
                  {responses[question]?.answer === false && (
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </span>
                <span className="ml-2 text-white">No</span>
              </label>
            </div>
            <button
              type="button"
              onClick={() => handleClearResponse(question)}
              className="text-red-500 hover:underline"
            >
              Clear
            </button>
          </div>
          <textarea
            className="w-full h-20 mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Additional comments..."
            value={responses[question]?.comment || ''}
            onChange={(e) => handleCommentChange(question, e.target.value)}
          />
        </div>
      ))}
    </form>
  </div>
</div>
  );
};
export default AuditForm2;
