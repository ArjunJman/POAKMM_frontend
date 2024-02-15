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
            0: true,
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
            6: true,
            7: true,
            8: true
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

        //send the data to backend
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('myToken')}`
            },
            body: JSON.stringify(formData)
        };

        fetch("http://localhost:3000/api/AddEvent", requestOptions)   //enter allTickets post end point.
            .then(response => response.json())
            .then(result => {
                console.log('response', result)
                if (typeof result.message === 'undefined' || result.message === "") {
                    // Handle the case where message is undefined or an empty string.
                    console.log("No Event added")
                    alert("Error! no event added")
                } else {
                    alert("Event added!")
                    navigate('/homepage');
                }
            })
            .catch(error => {
                alert("No data sent")
                console.log('error', error)
            });
        // Reset the form after submission
        setFormData({
            match_id: "",
            name: "",
            category: "",
            date: "",
            location: "",
            venue: "",
            seats: {
                0: true,
                1: true,
                2: true,
                3: true,
                4: true,
                5: true,
                6: true,
                7: true,
                8: true
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