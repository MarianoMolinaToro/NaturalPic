import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-success mb-4 p-4 fs-3">
      <Link to="/" className="text-white"> Home </Link> 📷 <Link to="/favoritos" className="text-white"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
