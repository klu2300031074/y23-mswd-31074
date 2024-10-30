import React, { useState, useEffect } from 'react';

const CourseData = () => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/api/course-data')
      .then(response => response.json())
      .then(data => setCourseData(data));
  }, []);

  return (
    <div>
      <h1>Course Data</h1>
      {courseData ? <pre>{JSON.stringify(courseData, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default CourseData;
