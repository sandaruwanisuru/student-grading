import { useEffect, useState } from 'react';
import Studentlisting from '../studentlisting/studentlisting';
import './Studentlistings.css';

const Studentlistings = ({ isHome = false }) => {
  const [students, setStudents] = useState([]);

  const apiurl = isHome
    ? 'http://localhost:3001/api/student?_limit=3'
    : ` http://localhost:3001/api/student`;

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await fetch(apiurl);
        const data = await res.json();
        console.log(data);
        setStudents(data);
      } catch (error) {
        console.log(' fetching error', error);
      }
    };

    fetchStudent();
  }, [apiurl]);

  return (
    <div className="Studentlistingscontainer">
      <h2 className="title">Find Students </h2>
      <div className="grid">
        {students.map((student) => (
          <Studentlisting student={student} key={student._id} />
        ))}
      </div>
    </div>
  );
};

export default Studentlistings;
