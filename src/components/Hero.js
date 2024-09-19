import './Hero.css';
import HeroImg from '../assets/icons_assets/restauranfood.jpg';
import { Link, useNavigate } from 'react-router-dom';
export default function Hero () {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/reservations');
  };
  return (
    <div className="container-fluid" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-6 left">
            <h1>Little Lemon</h1>
            <h3>Kurdistan</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipies served with modern twist.</p>
            <button className="btn" onClick={handleButtonClick}>
              Reserve a table
            </button>
          </div>
          <div className="col-6 right">
            <img src={HeroImg} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}