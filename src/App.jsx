import { useEffect, useState } from 'react';
import LecturerCard from './LecturerCard';
import './App.css';

function App() {
  const [lecturers, setLecturers] = useState(null);

  useEffect(() => {
    const url = 'https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers'

    fetch(url, {
      method: 'GET'
    }).then(res => res.json()).then(result => setLecturers(result))
  }, []);

  return (
    <div className="lecturer-cards-wrapper">
        {lecturers?.map((lecturer, index) => (
          <LecturerCard key={`${new Date()}-${index}`} lecturer={lecturer} />
        ))}
    </div>
  );
}

export default App;
