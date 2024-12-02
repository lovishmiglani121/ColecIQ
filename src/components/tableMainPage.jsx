import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import lovishrecording from '../assets/Sample Calls trim.mp3'; // Adjust the path as needed
import pervrecording from '../assets/file.mp3';

import lovish from "../assets/Avatar/lovish.jpeg";
import vishakha from "../assets/Avatar/vishakha.jpeg";
import huzaifa from "../assets/Avatar/man.png";
import michael from "../assets/Avatar/man2.jpg";
import jane from "../assets/Avatar/woman.png";
import emily from "../assets/Avatar/woman (1).png";
import david from "../assets/Avatar/hacker.png";
import praveen from "../assets/Avatar/boy.png";
import sophia from "../assets/Avatar/woman1.png";
import robert from "../assets/Avatar/boy1.png";
import jessica from "../assets/Avatar/woman2.png";
import kevin from "../assets/Avatar/man1.png";
import alicia from "../assets/Avatar/woman3.png";
import brandon from "../assets/Avatar/man3.png";
import natalie from "../assets/Avatar/woman4.png";
import thomas from "../assets/Avatar/man4.png";
import olivia from "../assets/Avatar/woman5.png";
import matthew from "../assets/Avatar/man5.png";
import ethan from "../assets/Avatar/man6.png";
import isabella from "../assets/Avatar/woman6.png";


const TableComponent = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [consultants, setConsultants] = useState([
    {
      overallScore: 65.9,
      name: "Praveen Gandhi",
      employeeNumber: 999654,
      CaseId: 987000,
      lastEvaluation: "Sep 23 2024 11:00AM",
      photo: praveen, // Placeholder image for Huzaifa
      evaluationPeriod: "5 months",
      call: lovishrecording,
      probation: "Not Ended",
      coaching: "Yes",
    },
    {
      overallScore: 66.2,
      name: "Lovish Miglani",
      employeeNumber: 559929,
      CaseId: 559929,
      lastEvaluation: "Sep 19 2024 11:00AM",
      photo: lovish,
      evaluationPeriod: "6 months",
      call: lovishrecording,
      probation: "Not Ended",
      coaching: "Yes",
    },
    {
      overallScore: 74.4,
      name: "Vishakha Saini",
      employeeNumber: 564157,
      CaseId: 564157,
      lastEvaluation: "Sep 14 2024 2:57PM",
      photo: vishakha,
      evaluationPeriod: "1 year",
      call: pervrecording,
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 65.9,
      name: "Huzaifa",
      employeeNumber: 987654,
      CaseId: 987654,
      lastEvaluation: "Aug 23 2024 11:30AM",
      photo: huzaifa, // Placeholder image for Huzaifa
      evaluationPeriod: "3 months",
      probation: "Not Ended",
      coaching: "Yes",
    },
    {
      overallScore: 85.3,
      name: "Jane Smith",
      employeeNumber: 123456,
      CaseId: 123456,
      lastEvaluation: "Jul 18 2024 9:10AM",
      photo: jane , // Placeholder image
      evaluationPeriod: "1 year",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 72.1,
      name: "Michael Brown",
      employeeNumber: 112233,
      CaseId: 112233,
      lastEvaluation: "Jun 12 2024 3:20PM",
      photo: michael, // Placeholder image
      evaluationPeriod: "6 months",
      probation: "Not Ended",
      coaching: "Yes",
    },
    {
      overallScore: 69.7,
      name: "Emily White",
      employeeNumber: 998877,
      CaseId: 998877,
      lastEvaluation: "May 27 2024 1:45PM",
      photo: emily, // Placeholder image
      evaluationPeriod: "9 months",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 81.4,
      name: "David Green",
      employeeNumber: 445566,
      CaseId: 445566,
      lastEvaluation: "Apr 10 2024 4:00PM",
      photo: david, // Placeholder image
      evaluationPeriod: "1 year",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 91.2,
      name: "Sophia Williams",
      employeeNumber: 554433,
      CaseId: 554433,
      lastEvaluation: "Mar 22 2024 10:00AM",
      photo: sophia, // Placeholder image
      evaluationPeriod: "2 years",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 88.5,
      name: "Robert Johnson",
      employeeNumber: 332211,
      CaseId: 332211,
      lastEvaluation: "Feb 18 2024 12:45PM",
      photo: robert, // Placeholder image
      evaluationPeriod: "1.5 years",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 76.8,
      name: "Jessica Lee",
      employeeNumber: 778899,
      CaseId: 778899,
      lastEvaluation: "Jan 5 2024 9:30AM",
      photo: jessica, // Placeholder image
      evaluationPeriod: "10 months",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 82.3,
      name: "Kevin Harris",
      employeeNumber: 223344,
      CaseId: 223344,
      lastEvaluation: "Dec 15 2023 3:15PM",
      photo: kevin, // Placeholder image
      evaluationPeriod: "11 months",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 67.5,
      name: "Alicia Martinez",
      employeeNumber: 667788,
      CaseId: 667788,
      lastEvaluation: "Nov 28 2023 10:20AM",
      photo: alicia, // Placeholder image
      evaluationPeriod: "7 months",
      probation: "Not Ended",
      coaching: "Yes",
    },
    {
      overallScore: 93.4,
      name: "Brandon Lee",
      employeeNumber: 223311,
      CaseId: 223311,
      lastEvaluation: "Oct 17 2023 5:00PM",
      photo: brandon, // Placeholder image
      evaluationPeriod: "2 years",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 89.2,
      name: "Natalie Cooper",
      employeeNumber: 556677,
      CaseId: 556677,
      lastEvaluation: "Sep 9 2023 1:40PM",
      photo: natalie, // Placeholder image
      evaluationPeriod: "1.5 years",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 78.9,
      name: "Thomas Evans",
      employeeNumber: 884422,
      CaseId: 884422,
      lastEvaluation: "Aug 1 2023 2:10PM",
      photo: thomas, // Placeholder image
      evaluationPeriod: "8 months",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 79.6,
      name: "Olivia Parker",
      employeeNumber: 112245,
      CaseId: 112245,
      lastEvaluation: "Jul 22 2023 11:50AM",
      photo: olivia, // Placeholder image
      evaluationPeriod: "1 year",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 68.3,
      name: "Matthew Davis",
      employeeNumber: 987789,
      CaseId: 987789,
      lastEvaluation: "Jun 18 2023 3:30PM",
      photo: matthew, // Placeholder image
      evaluationPeriod: "7 months",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 90.5,
      name: "Isabella Taylor",
      employeeNumber: 445522,
      CaseId: 445522,
      lastEvaluation: "May 10 2023 10:40AM",
      photo: isabella, // Placeholder image
      evaluationPeriod: "2 years",
      probation: "Ended",
      coaching: "No",
    },
    {
      overallScore: 71.4,
      name: "Ethan Clark",
      employeeNumber: 332244,
      CaseId: 332244,
      lastEvaluation: "Apr 4 2023 4:50PM",
      photo: ethan, // Placeholder image
      evaluationPeriod: "9 months",
      probation: "Ended",
      coaching: "No",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredConsultant, setHoveredConsultant] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 5, y: 5 });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredConsultants = consultants.filter((consultant) =>
    consultant.employeeNumber.toString().includes(searchTerm)
  );

  const handleMouseEnter = (consultant, event) => {
    setHoveredConsultant(consultant);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredConsultant(null);
  };

  const handleEvaluate = (consultant) => {
    // console.log(consultant)
   
    navigate("/mainpage/audit", { state: { consultant } }); // Pass consultant data
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Consultants</h2>
        <input
          type="text"
          placeholder="Search by Employee ID"
          className="px-4 py-2 border rounded-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b bg-gray-100">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-900">Employee Score</th>
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th className="px-6 py-4 font-medium text-gray-900">Employee ID</th>
              <th className="px-6 py-4 font-medium text-gray-900">Case ID</th>
              <th className="px-6 py-4 font-medium text-gray-900">Date </th>
              <th className="px-6 py-4 font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredConsultants.length > 0 ? (
              filteredConsultants.map((consultant, index) => (
                <tr
                  key={index}
                  className="border-b relative hover:bg-gray-800 hover:text-white"
                  onMouseEnter={(event) => handleMouseEnter(consultant, event)}
                  onMouseLeave={handleMouseLeave}
                >
                  <td className="px-6 py-4">{consultant.overallScore}</td>
                  <td className="px-6 py-4 flex items-center">
                    <img
                      src={consultant.photo}
                      alt={`${consultant.name}'s photo`}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {consultant.name}
                  </td>
                  <td className="px-6 py-4">{consultant.employeeNumber}</td>
                  <td className="px-6 py-4">{consultant.CaseId}</td>
                  <td className="px-6 py-4">{consultant.lastEvaluation}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEvaluate(consultant)} // Pass consultant to handleEvaluate
                      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-blue-700"
                    >
                      Audit Now
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No matching employee found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {hoveredConsultant && (
  <div
    className="absolute bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-60"
    style={{
      left: `${mousePosition.x + 50}px`, // Increase the distance from the mouse pointer
      top: `${mousePosition.y + 50}px`,
      width: "250px",
    }}
  >
    <div className="flex items-center mb-4">
      <img
        src={hoveredConsultant.photo}
        alt={`${hoveredConsultant.name}'s photo`}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="text-lg text-gray-700 font-semibold">{hoveredConsultant.name}</h3>
        <p className="text-sm text-gray-500">ID: {hoveredConsultant.employeeNumber}</p>
      </div>
    </div>
    <p className="text-gray-700">
      <strong>Overall Score:</strong> {hoveredConsultant.overallScore}
    </p>
    <p className="text-gray-700">
      <strong>Probationary Period:</strong> {hoveredConsultant.probation}
    </p>
    <p className="text-gray-700">
      <strong>Evaluation Period:</strong> {hoveredConsultant.evaluationPeriod}
    </p>
    <p className="text-gray-700">
      <strong>Coaching:</strong> {hoveredConsultant.coaching}
    </p>
  </div>
)}
    </div>
  );
};

export default TableComponent;
