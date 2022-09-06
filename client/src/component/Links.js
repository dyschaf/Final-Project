import { NavLink, useLocation, Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/SignUp"> SignUp </Link>
        <Link to="/Login"> Login </Link>
        <Link to="/Logout"> Login </Link>
      </nav>
    </>
  );
};
export default Links;
