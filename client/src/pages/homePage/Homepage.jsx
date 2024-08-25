import { Link } from 'react-router-dom';
import Hero from '../../component/hero/Hero';
import Studentlistings from '../../component/studentlistings/studentlistings';
import './Homepage.css';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Studentlistings isHome={true} />
      <div className="allStudent">
        <Link to={'/students'} className="allStudentBtn">
          View All Atudents
        </Link>
      </div>
    </>
  );
};

export default Homepage;
