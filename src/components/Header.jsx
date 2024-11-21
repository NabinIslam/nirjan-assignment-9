import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
        toast.success("Logout successful");
      })
      .catch(err => console.error(err));
  };

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="container">
        <Navbar fluid rounded>
          <Navbar.Brand>
            <Link
              to="/"
              className="self-center whitespace-nowrap text-xl font-extrabold dark:text-white"
            >
              Lingo Bingo
            </Link>
          </Navbar.Brand>
          <div className="flex md:order-2">
            {user ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt={user && user.displayName}
                    img={user && user.photoURL}
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">
                    {user && user.displayName}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {user && user.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>
                  <Link to="/my-profile">My Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}

            <Navbar.Toggle className="ml-2" />
          </div>
          <Navbar.Collapse>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/start-learning">Start Learning</NavLink>
            <NavLink to="/tutorials">Tutorials</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </header>
  );
};

export default Header;
