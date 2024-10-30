import React, { useState, useEffect } from 'react';

const StudentData = () => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/api/student-data')
      .then(response => response.json())
      .then(data => setStudentData(data));
  }, []);

  return (
    <div>
      <h1>Student Data</h1>
      {studentData ? <pre>{JSON.stringify(studentData, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default StudentData;
