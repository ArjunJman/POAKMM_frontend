import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarUp from './components/Navbar/Navbar'
import Carausel from './components/Slider/Carausel'
import ListSlider from './components/listSlider/listSlider.jsx'
// import ImageList from './components/ImageList/ImageList';s
// import ImgMediaCard from './components/ImageCard/ImageCard'
import EventDetails from './components/eventDetails/eventDetails.jsx';
import CustomerReviews from './components/customers/CustomerReviews.jsx';
import { Outlet, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Ticket from './components/BookTickets/Ticket'
import Admin from "./components/Admin/Admin.jsx";

const Layout = () => {
  return (
    <>
       <NavbarUp />
      <Outlet />
    </>
  )
}
function App() {
  const [count, setCount] = useState(0);

  const HomePage = () => {
    return (
      <>
     
        <Carausel />
        <ListSlider />

        <CustomerReviews />
      </>
    )
  }


  return (

    <div className='homepage'>

      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/bookticket" element={<Ticket />} />
      </Routes>



    </div>

  )
}

export default App
