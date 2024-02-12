import image1 from '../../images/slide-01.jpg'
import image2 from '../../images/slide-02.jpg'
import image3 from '../../images/slide-03.jpg'
// import image4 from '../images/slide-4.jpg'

export const images = [image1, image2, image3]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
