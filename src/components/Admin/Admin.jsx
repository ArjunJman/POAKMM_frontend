// // import { useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./Admin.css";
// // // import NavbarUp from "./components/Navbar/Navbar";
// // import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
// // import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

// // function Admin() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleOpen = () => setIsOpen(!isOpen);
// //   //  {{
// //   //   "match_id": "18",
// //   //   "name": "Tennis Match 3",
// //   //   "category": "Tennis",
// //   //   "date": "2024-05-10",
// //   //   "location": "Court R",
// //   //   "venue": "Tennis Arena",
// //   //   "seats": {
// //   //       "available": 300,
// //   //       "total": 400
// //   //   },
// //   //   "img_url": "https://www.shutterstock.com/image-illustration/green-grass-tennis-stadium-evening-sky-292960337"
// //   // }}
// //   return (
// //     <div className="homepage">
// //       <div className="extension">
// //         <div className="ext-btn" onClick={toggleOpen}>
// //           <AddToPhotosIcon style={{ fontSize: 200 }} />
// //         </div>

// //         <MDBCollapse open={isOpen}>
// //           <form className="input-details">
// //             <div className="two-field">
// //               <input
// //                 className="input-text"
// //                 type="text"
// //                 placeholder="Match ID"
// //               />
// //               <input className="input-date" type="date" placeholder="Date" />
// //               {/* <div>

// //               </div> */}
// //               <input
// //                 className="input-text"
// //                 type="number"
// //                 placeholder="Total Seats"
// //               />
// //               <input
// //                 className="input-text"
// //                 type="number"
// //                 placeholder="Available Seats"
// //               />
// //             </div>
// //             <input type="text" className="input-text" placeholder="Name" />
// //             <div>
// //               <input
// //                 type="text"
// //                 className="input-text"
// //                 placeholder="Category"
// //               />
// //               <input
// //                 className="input-text"
// //                 type="text"
// //                 placeholder="Location"
// //               />
// //             </div>
// //             <input className="input-text" type="text" placeholder="Venue" />

// //             <input className="input-text" type="text" placeholder="Image Url" />

// //             <button className="submit-button">Submit</button>
// //           </form>
// //         </MDBCollapse>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Admin;

// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Admin.css";
// import { MDBCollapse } from "mdb-react-ui-kit";
// import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

// function Admin() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     match_id: "",
//     name: "",
//     category: "",
//     date: "",
//     location: "",
//     venue: "",
//     seats: {
//       available: "",
//       total: "",
//     },
//     img_url: "",
//   });

//   const toggleOpen = () => setIsOpen(!isOpen);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Convert the seats' values to numbers

//     const seats = {
//       available: parseInt(formData.seats.available),
//       total: parseInt(formData.seats.total),
//     };
//     // Update formData with seats
//     setFormData({ ...formData, seats });
//     // Do something with formData, such as sending it to a server
//     console.log(formData);
//     // Reset the form after submission
//     setFormData({
//       match_id: "",
//       name: "",
//       category: "",
//       date: "",
//       location: "",
//       venue: "",
//       seats: {
//         available: "",
//         total: "",
//       },
//       img_url: "",
//     });
//   };

//   return (
//     <div className="homepage">
//       <div className="extension">
//         <div className="ext-btn" onClick={toggleOpen}>
//           <AddToPhotosIcon style={{ fontSize: 200 }} />
//         </div>

//         <MDBCollapse open={isOpen}>
//           <form className="input-details" onSubmit={handleSubmit}>
//             <input
//               className="input-text"
//               type="text"
//               name="match_id"
//               value={formData.match_id}
//               onChange={handleChange}
//               placeholder="Match ID"
//             />
//             <input
//               className="input-text"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//             />
//             <input
//               className="input-text"
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               placeholder="Category"
//             />
//             <input
//               className="input-text"
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               placeholder="Date"
//             />
//             <input
//               className="input-text"
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="Location"
//             />
//             <input
//               className="input-text"
//               type="text"
//               name="venue"
//               value={formData.venue}
//               onChange={handleChange}
//               placeholder="Venue"
//             />
//             <input
//               className="input-text"
//               type="number"
//               name="seats.available"
//               value={formData.seats.available}
//               onChange={handleChange}
//               placeholder="Available Seats"
//             />
//             <input
//               className="input-text"
//               type="number"
//               name="seats.total"
//               value={formData.seats.total}
//               onChange={handleChange}
//               placeholder="Total Seats"
//             />
//             <input
//               className="input-text"
//               type="text"
//               name="img_url"
//               value={formData.img_url}
//               onChange={handleChange}
//               placeholder="Image Url"
//             />
//             <button className="submit-button" type="submit">
//               Submit
//             </button>
//           </form>
//         </MDBCollapse>
//       </div>
//     </div>
//   );
// }

// export default Admin;

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import { MDBCollapse } from "mdb-react-ui-kit";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    match_id: "",
    name: "",
    category: "",
    date: "",
    location: "",
    venue: "",
    seats: {
      available: 0,
      total: 0,
    },
    img_url: "",
  });

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the input field is of type 'number', ensure the value is converted to a number
    const newValue = e.target.type === "number" ? parseInt(value) : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with formData, such as sending it to a server
    console.log(formData);
    // Reset the form after submission
    setFormData({
      match_id: "",
      name: "",
      category: "",
      date: "",
      location: "",
      venue: "",
      seats: {
        available: 0,
        total: 0,
      },
      img_url: "",
    });
  };

  return (
    <div className="homepage">
      <div className="extension">
        <div className="ext-btn" onClick={toggleOpen}>
          <AddToPhotosIcon style={{ fontSize: 200 }} />
        </div>

        <MDBCollapse open={isOpen}>
          <form className="input-details" onSubmit={handleSubmit}>
            <input
              className="one-col"
              type="text"
              name="match_id"
              value={formData.match_id}
              onChange={handleChange}
              placeholder="Match ID"
            />
            <input
              className="one-col"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Date"
            />
            <input
              className="onecol"
              type="number"
              name="seats.total"
              value={formData.seats.total}
              onChange={handleChange}
              placeholder="Total Seats"
            />
            <input
              className="one-col"
              type="number"
              name="seats.available"
              value={formData.seats.available}
              onChange={handleChange}
              placeholder="Available Seats"
            />

            <input
              className="input-text"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              className="input-text"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
            />

            <input
              className="input-text"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
            />
            <input
              className="input-text"
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Venue"
            />

            <input
              className="input-text"
              type="text"
              name="img_url"
              value={formData.img_url}
              onChange={handleChange}
              placeholder="Image Url"
            />
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </MDBCollapse>
      </div>
    </div>
  );
}

export default Admin;
