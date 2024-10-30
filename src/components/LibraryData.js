import React, { useState, useEffect } from 'react';

const LibraryData = () => {
  const [libraryData, setLibraryData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/api/library-data')
      .then(response => response.json())
      .then(data => setLibraryData(data));
  }, []);

  return (
    <div>
      <h1>Library Data</h1>
      {libraryData ? <pre>{JSON.stringify(libraryData, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default LibraryData;
