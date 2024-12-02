import Row2 from './Row2'
import Row3 from './Row3'
import Row1 from './Row1'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/mainpage'); // Redirect to /mainpage
  }

  return (
    <div className="pt-24"> {/* Adjust the padding-top to match your navbar height */}
      {/* Title and Back button in the same line */}
      <div className="flex justify-between items-center mb-4 font-normal">
        <h1 className="text-4xl font-bold text-white ml-2">Auditor's Dashboard</h1>
        
        <button 
          onClick={handleBack} 
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Back
        </button>
      </div>

      {/* Dashboard rows */}
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  )
}

export default Dashboard
