import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header>
      <h1>Product Management System</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
