import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarUp from './components/Navbar/Navbar'
import Carausel from './components/Slider/Carausel'
import ListSlider from './components/listSlider/listSlider.jsx'
// import ImageList from './components/ImageList/ImageList';s
// import ImgMediaCard from './components/ImageCard/ImageCard'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className='homepage'>
        {/* <h1>home</h1> */}
     <NavbarUp />
     <Carausel />
<ListSlider />
      {/* <ImageList /> */}
{/* <ImgMediaCard /> */}

  
     </div>

  )
}

export default App
