import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ButtonAppBar from './components/ButtonAppBar';
import StudentData from './components/StudentData';
import EmployeeData from './components/EmployeeData';
import CourseData from './components/CourseData';
import DepartmentData from './components/DepartmentData';
import LibraryData from './components/LibraryData';

function App() {
  return (
    <Router>
      <div className="App">
        <ButtonAppBar />
        {/* Add Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/student-data">Student Data</Link></li>
            <li><Link to="/employee-data">Employee Data</Link></li>
            <li><Link to="/course-data">Course Data</Link></li>
            <li><Link to="/department-data">Department Data</Link></li>
            <li><Link to="/library-data">Library Data</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/student-data" element={<StudentData />} />
          <Route path="/employee-data" element={<EmployeeData />} />
          <Route path="/course-data" element={<CourseData />} />
          <Route path="/department-data" element={<DepartmentData />} />
          <Route path="/library-data" element={<LibraryData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
