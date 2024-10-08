import './Hero.css';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/images/hero/restauranfood.webp';
export default function Hero () {
  return (
    <div className="container-fluid" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 left">
            <h1>Little Lemon</h1>
            <h3>Kurdistan</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipies served with modern twist.</p>
            <Link className="btn btn-outline-dark px-4" aria-label="Reserve a table" aria-current="page" to="/reservations">
              Reserve a table
            </Link>
          </div>
          <div className="col-12 col-lg-6 right">
            <img src={HeroImg} className="heroPic img-fluid" alt="Restaurant Food"/>
          </div>
        </div>
      </div>
    </div>
  );
}