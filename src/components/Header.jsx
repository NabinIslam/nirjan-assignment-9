import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <Navbar fluid rounded>
          <Navbar.Brand href="/">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-xl font-extrabold dark:text-white"
            >
              Lingo Bingo
            </Link>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </header>
  );
};

export default Header;
