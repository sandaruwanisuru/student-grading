import './Studentlisting.css';
import { Link } from 'react-router-dom';

const Studentlisting = ({ student }) => {
  return (
    <div className="Studentlistingcontainer">
      <div className="top">
        <span>{student.name}</span>
        <span>{student.class} grade</span>
      </div>
      {/* <div className="bottom">
        <h4>Marks:</h4>
        {student.grades.map((grade, index) => (
          <ul key={index} className="subjectList">
            <li>{grade.subject} :</li>
            <li> {grade.score}</li>
          </ul>
        ))}
      </div> */}
      <Link className="studentLink" to={`/student/${student._id}`}>
        Read More
      </Link>
    </div>
  );
};

export default Studentlisting;
