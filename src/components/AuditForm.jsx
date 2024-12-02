import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { saveAs } from 'file-saver'; // To download the generated file
import { Document, Packer, Paragraph, TextRun } from 'docx'; // To generate the Word document
import emailjs from 'emailjs-com';

const AuditForm = () => {
  const location = useLocation(); // Get location object
  const [startDate, setStartDate] = useState(new Date());
  const [consultant, setConsultant] = useState(null);
  const [formData, setFormData] = useState({
    caseId: '',
    requestType: 'Addition Request',
    resolved: 'No',
    comments: '',
    actionable: 'Coaching', // Set default value for actionable
  });
  const [coachingLoading, setCoachingLoading] = useState(false);
  const [coachingSummary, setCoachingSummary] = useState(""); // State for the coaching summary
  const [responseTitle, setResponseTitle] = useState('Consultant'); // For response title

  useEffect(() => {
    console.log("Location state:", location.state); 
    setConsultant(location.state)// Log the entire location state
    if (location.state && location.state.consultant) {
      setConsultant(location.state.consultant);
      setFormData(location.state)
      setFormData((prevData) => ({
        ...prevData,
        caseId: location.state.consultant.CaseId || '', // Pre-fill Case ID with fallback
        name: location.state.consultant.name,
      }));
    } else {
      console.warn("Consultant data is not available in the location state.");
    }
  }, [location.state]);

  if (!consultant) {
    return <div>Loading...</div>; // Display loading while consultant data is being fetched
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCoaching = async () => {
    setCoachingLoading(true);
    setResponseTitle('Consultant');
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
        setCoachingSummary(data.cohereResponse); // Store the fetched coaching feedback in state
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error fetching coaching feedback:', error);
    } finally {
      setCoachingLoading(false);
    }
  };

  const generateWordDocument = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Audit Form Submission',
                  bold: true,
                  size: 32,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: '\n',
                  break: 1,  // Adding a line break
                }),
              ],
            }),
            // Consultant Name
            new Paragraph({
              children: [
                new TextRun({
                  text: `Consultant Name: `,
                  bold: true,
                }),
                new TextRun(consultant?.name || "N/A"),
              ],
            }),
            // Employee ID
            new Paragraph({
              children: [
                new TextRun({
                  text: `Employee ID: `,
                  bold: true,
                }),
                new TextRun(consultant?.employeeNumber || ''),
              ],
            }),
            // Case ID
            new Paragraph({
              children: [
                new TextRun({
                  text: `Case ID: `,
                  bold: true,
                }),
                new TextRun(consultant?.caseId || ''),
              ],
            }),
            // Date
            new Paragraph({
              children: [
                new TextRun({
                  text: `Date: `,
                  bold: true,
                }),
                new TextRun(startDate ? startDate.toLocaleDateString() : "N/A"),
              ],
            }),
            // Request Type
            new Paragraph({
              children: [
                new TextRun({
                  text: `Request Type: `,
                  bold: true,
                }),
                new TextRun(formData?.requestType || "N/A"),
              ],
            }),
            // Resolved Status
            new Paragraph({
              children: [
                new TextRun({
                  text: `Resolved: `,
                  bold: true,
                }),
                new TextRun(formData?.resolved ? 'Yes' : 'No'),
              ],
            }),
            // QA Comments
            new Paragraph({
              children: [
                new TextRun({
                  text: `QA Comments: `,
                  bold: true,
                }),
                new TextRun(formData?.comments || "N/A"),
              ],
            }),
            // Actionable
            new Paragraph({
              children: [
                new TextRun({
                  text: `Actionable: `,
                  bold: true,
                }),
                new TextRun(formData?.actionable || "N/A"),
              ],
            }),
            // Coaching Summary (if applicable)
            new Paragraph({
              children: [
                new TextRun({
                  text: `Coaching Summary: `,
                  bold: true,
                }),
                new TextRun(coachingSummary || "N/A"),
              ],
            }),
          ],
        },
      ],
    });

    try {
      const blob = await Packer.toBlob(doc);
      saveAs(blob, 'AuditForm.docx');
    } catch (error) {
      console.error("Error generating document:", error);
    }
  };

  const handleredirect = () => {
    // You can add any logic you need before navigation here
    navigate('/mainpage');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    generateWordDocument(); // Pass the correct values
  };

  const sendEmail = async () => {
    let templateParams;

    if (formData.actionable === "Misbehavior/Inappropriate Language") {
      templateParams = {
        to_name: consultant?.name || "Consultant",
        to_email: 'lovishmiglani.121@gmail.com',
        subject: 'Warning: Inappropriate Language Use by',
        message: 'A warning has been triggered for inappropriate language used by the agent during the call.',
      };
    } else if (formData.actionable === "Coaching") {
      // Template for Coaching with coachingSummary included
      await handleCoaching();
      console.log(coachingSummary);
      templateParams = {
        to_name: consultant?.name || "Consultant",
        to_email: 'lovishmiglani.121@gmail.com',
        subject: 'Coaching Session Feedback for ',
        message: `A coaching session is required for the agent based on recent performance. Here is the coaching summary:\n\n${coachingSummary}`, // Include coaching feedback
      };
    } else if (formData.actionable === "Violation of Guidelines") {
      templateParams = {
        to_name: consultant?.name || "Consultant",
        to_email: 'lovishmiglani.121@gmail.com',
        subject: 'Warning: Violation of Company Guidelines by ',
        message: 'A violation of company guidelines has been detected in the recent call.',
      };
    } else {
      templateParams = {
        to_name: consultant?.name || "Consultant",
        to_email: 'lovishmiglani.121@gmail.com',
        subject: 'Actionable Update',
        message: 'An update on the recent performance review.',
      };
    }

    // Send the email using emailjs
    try {
      await emailjs.send('service_x73ul3k', 'template_y9nh88h', templateParams, 'hOCnWw0C_MdTr4PTv');
      alert("Email sent successfully!");
    } catch (error) {
      console.error('Error sending email:', error);
      alert("Failed to send the email.");
    }
  };

  return (
    <div className="flex">
      <div className="flex justify-start p-4 w-full max-w-md">
        <form className="bg-gray-900 p-6 rounded-lg shadow-lg w-full" onSubmit={handleSubmit}>
          <h2 className="text-white font-bold mb-4">Tracking Parameters</h2>
          <div className="flex items-center mb-4">
            <img
              src={consultant.photo} // Use the correct path to your image
              alt="Consultant"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{consultant.name}</h3>
              <p className="text-gray-400">Employee ID: {consultant.employeeNumber}</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Case ID</label>
            <input
              type="text"
              name="caseId"
              value={formData.caseId}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Case ID"
              required // Ensure this field is required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Date</label>
            <div className="flex items-center">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                dateFormat="dd/MM/yyyy"
              />
              <FaCalendarAlt className="ml-2 text-gray-500" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Request Type</label>
            <select
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Addition Request">Addition Request</option>
              <option value="Removal Request">Removal Request</option>
              <option value="Update Request">Update Request</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Resolved Status</label>
            <select
              name="resolved"
              value={formData.resolved}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">QA Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter comments"
              rows="3"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Actionable</label>
            <select
              name="actionable"
              value={formData.actionable}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Coaching">Coaching</option>
              <option value="Misbehavior/Inappropriate Language">Misbehavior/Inappropriate Language</option>
              <option value="Violation of Guidelines">Violation of Guidelines</option>
            </select>
          </div>

          <button
            type="button"
            onClick={sendEmail}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
          >
            Send Email
          </button>

          <button
            type="submit"
            className="bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 w-full"

          >
            Generate Document
            
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuditForm;
