import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './AddStudent.css';
import { useNavigate } from 'react-router';

const AddStudent = () => {
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [grades, setGrades] = useState([{ subject: '', score: '' }]);

  const navigate = useNavigate();

  const handleGradeChange = (index, field, value) => {
    const newGrades = [...grades];
    newGrades[index][field] = value;
    setGrades(newGrades);
  };

  const addGrade = () => {
    setGrades([...grades, { subject: '', score: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      name: studentName,
      class: studentClass,
      grades: grades.map((grade) => ({
        subject: grade.subject,
        score: Number(grade.score),
      })),
    };
    console.log(studentData);
    try {
      const response = await fetch('http://localhost:3001/api/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });
    } catch (error) {
      console.error('Error:', error.message);
    }

    navigate('/students');
  };
  return (
    <div className="formsection">
      <form onSubmit={handleSubmit}>
        <h2>Add Students</h2>
        <div className="top">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={studentName}
              placeholder="Enter Student Name.."
              name="name"
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="grade">Class</label>
            <input
              type="text"
              name="class"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              required
            />
          </div>
        </div>
        {grades.map((grade, index) => (
          <div key={index} className="bottom">
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                value={grade.subject}
                onChange={(e) =>
                  handleGradeChange(index, 'subject', e.target.value)
                }
              />

              <label htmlFor="mark">Mark</label>
              <input
                type="text"
                name="mark"
                value={grade.mark}
                onChange={(e) =>
                  handleGradeChange(index, 'score', e.target.value)
                }
              />
            </div>
          </div>
        ))}

        <p className="addButton" type="submit" onClick={addGrade}>
          Add Subject
        </p>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
