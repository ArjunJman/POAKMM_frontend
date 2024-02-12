import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css'
import logo from '../../images/gericht.png';
import profile from '../../images/profile-img.jfif'


function NavbarUp() {
  return (
    <Navbar  className='navbar'>
      <Container className='container'>
        <Navbar.Brand href="#home" ><img src={logo} className='logo' /></Navbar.Brand>
        <Dropdown>
      <Dropdown.Toggle   id='profile-img-container'>
       <img src={profile} className='profile-img' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      
      </Container>
    </Navbar>
  );
}

export default NavbarUp;