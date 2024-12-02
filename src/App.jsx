import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AudioUpload from "./components/AudioUpload";
import Dashboard from "./pages/dashboard/Dashboard";
import MainPage from "./components/MainPage";
import Auditpage from "./components/AuditPage";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute"; 

const App = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/audio/upload" element={<AudioUpload />} />
        <Route path="/mainpage" element={
            <MainPage />
        } />
        <Route path="/mainpage/dashboard" element={
            <Dashboard />
        } />
        <Route path="/mainpage/audit" element={
            <Auditpage />
        } />
      </Routes>
    </>
  );
};

export default App;
