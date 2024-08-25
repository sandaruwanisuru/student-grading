import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Learning Management plaform</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
          dolorem. Nisi temporibus tenetur perspiciatis quaerat? Totam
          exercitationem facere ipsam odit. Sed, eius autem adipisci alias nisi
          consequatur veritatis suscipit doloribus?
        </p>
      </div>
      <div className="cards">
        <div className="card student">
          <h2>Student</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <Link className="heroLinks " to="/students">
            Find You
          </Link>
        </div>
        <div className="card teacher">
          <h2>Teacher</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <Link className="heroLinks" to="/students-add">
            Add Student
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
