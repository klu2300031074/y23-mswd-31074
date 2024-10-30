import React, { useState, useEffect } from 'react';

const EmployeeData = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/api/employee-data')
      .then(response => response.json())
      .then(data => setEmployeeData(data));
  }, []);

  return (
    <div>
      <h1>Employee Data</h1>
      {employeeData ? <pre>{JSON.stringify(employeeData, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default EmployeeData;
