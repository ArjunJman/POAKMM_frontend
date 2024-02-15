import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css'
import logo from '../../images/gericht.png';
import profile from '../../images/profile-img.jfif'


function NavbarUp() {

  const clearToken=()=>{
    sessionStorage.clear()
  }

  return (
    <Navbar  className='navbar'>
      <Container className='container'>
        <Navbar.Brand href="#home" className='logo' ><h1>POAKMM</h1></Navbar.Brand>
        {sessionStorage.getItem('myToken') ? 
        <Dropdown>
      <Dropdown.Toggle   id='profile-img-container'>
       <img src={profile} className='profile-img' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="/" onClick={clearToken}>LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>:
    <a href='/' className='text-center pt-2 font-semibold w-[10rem] h-10 bg-[#DCCA87] rounded text-[#0C0C0C] no-underline '>Login</a>
    }
      
      </Container>
    </Navbar>
  );
}

export default NavbarUp;