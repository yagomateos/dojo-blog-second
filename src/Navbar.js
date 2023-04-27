import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 style={{
          color: '#f1356d'
        }}>
      <Link to="/">The Dojo Blog</Link></h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create"> {/* style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }} */}
        New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;