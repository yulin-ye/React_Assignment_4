import { useEffect, useState } from 'react';
import LecturerCard from './LecturerCard';
import { fetchLecturers } from './util/api';
import './App.css';

function App() {
  const [lecturers, setLecturers] = useState(null);

  useEffect(() => {
    const loadLecturers = async () => {
      setLecturers(await fetchLecturers());
    };

    loadLecturers();
  }, []);

  return (
    <div className='home-page'>
      <div className="lecturer-cards-wrapper">
        {lecturers?.map((lecturer, index) => (
          <LecturerCard key={`${new Date()}-${index}`} lecturer={lecturer} />
        ))}
      </div>
    </div>
  );
}

export default App;
