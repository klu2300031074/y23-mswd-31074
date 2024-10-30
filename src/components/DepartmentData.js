import React, { useState, useEffect } from 'react';

const DepartmentData = () => {
  const [departmentData, setDepartmentData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/api/department-data')
      .then(response => response.json())
      .then(data => setDepartmentData(data));
  }, []);

  return (
    <div>
      <h1>Department Data</h1>
      {departmentData ? <pre>{JSON.stringify(departmentData, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default DepartmentData;
