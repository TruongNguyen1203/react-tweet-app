const { Link } = require("react-router-dom");

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New Tweet</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};
export default Nav;
