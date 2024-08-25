import './StudentPage.css';
import { Link, useParams, useLoaderData, useNavigate } from 'react-router-dom';

const StudentPage = () => {
  const student = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteProfile = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/student/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete student profile');
      }

      // Optionally, handle success (e.g., navigate away, show a message, etc.)
    } catch (error) {
      console.error('Error:', error.message);
    }
    navigate('/students');
  };

  return (
    <div className="studentContainer">
      <h1 className="studentProfile">Student Profile</h1>
      <div className="studentHeader">
        <h2 className="studentName">Name: {student.name}</h2>
        <span className="studentClass">Class: {student.class}</span>
      </div>
      <div className="studentDetails">
        <div className="gradeHeader">
          <h4>Subject</h4>
          <h4>Mark</h4>
        </div>
        {student.grades.map((grade) => (
          <div className="gradeItem" key={grade._id}>
            <div className="subject">
              <span>{grade.subject}</span>
            </div>
            <div className="score">
              <span>{grade.score}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="studentAction">
        <Link className="editButton" to={`/student-edit/${student._id}`}>
          Edit Student Profile
        </Link>
        <button
          className="deleteButton"
          type="submit"
          onClick={() => deleteProfile(student._id)}
        >
          Delete Profile
        </button>
      </div>
    </div>
  );
};

const studentLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:3001/api/student/${params.id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch student data');
  }
  const data = await res.json();
  return data;
};

export { StudentPage as default, studentLoader };
