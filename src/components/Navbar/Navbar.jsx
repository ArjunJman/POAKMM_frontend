import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "./navbar.css";
import logo from "../../images/gericht.png";
import profile from "../../images/profile-img.jfif";

function NavbarUp() {
  // function to slear the tokens from the session storage saved after login
  const clearToken = () => {
    sessionStorage.clear();
  };

  return (
    <Navbar className="navbar">
      <Container className="container">
        <Navbar.Brand href="/homepage" className="logo">
          <h1>POAKMM</h1>
        </Navbar.Brand>
        {/* logic to get profile image with logout and profile option if legged in.
        
        otherwise it will show login button */}
        {sessionStorage.getItem("myToken") ? (
          <Dropdown>
            <Dropdown.Toggle id="profile-img-container">
              <img src={profile} className="profile-img" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
            { sessionStorage.getItem("email")==="om"?
              <Dropdown.Item href="/admin">Admin</Dropdown.Item>:<></>}
              <Dropdown.Item href="/user">{sessionStorage.getItem("email")} - My Tickets</Dropdown.Item>
              <Dropdown.Item href="/" onClick={clearToken}>
                LogOut
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <a
            href="/"
            className="text-center pt-2 font-semibold w-[10rem] h-10 bg-[#DCCA87] rounded text-[#0C0C0C] no-underline "
          >
            Login
          </a>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarUp;
