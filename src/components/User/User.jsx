import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css";
import { MDBCollapse } from "mdb-react-ui-kit";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

function User() {

    const [userData, setuserData] = useState()
    //send the data to backend
    var requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('myToken')}`
        },
    };

    // useEffect(() => {
    //     console.log("hehe")
    //     fetchMatches= async()=>{
    //         const response = await fetch("http://localhost:3000/api/UserDetail", requestOptions)   //enter allTickets post end point.
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log('response', result)

    //             if (response.message) {
    //                 alert("data not received")
    //             } else {
    //                 setuserData(response)
    //                 console.log(userData)
    //             }

    //         })
    //         .catch(error => {
    //             alert("No data sent")
    //             console.log('error', error)
    //         });
    //     }

    // }, [])

    useEffect(() => {
        fetch("http://localhost:3000/api/UserDetail", requestOptions)   //enter allTickets post end point.
        .then(response => response.json())
        .then(result => {
            console.log('response', result)
                setuserData(result)
            })
        }, []);
    // fetch("http://localhost:3000/api/UserDetail", requestOptions)   //enter allTickets post end point.
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log('response', result)

    //         if (response.message){
    //             alert("data not received")
    //         }else{
    //             setuserData(response)
    //             console.log(userData)
    //         }

    //     })
    //     .catch(error => {
    //         alert("No data sent")
    //         console.log('error', error)
    //     });

    console.log("whyy",userData)
    return (
        <div className="Ticket-container">
            {userData.map((user, index) => (
                <div className="ticket" key={index}>
                    <h1 >{user.match_name}</h1>
                    
                        <p>{user.venue}</p>
               
                    <div>

                    </div>


                </div>
            ))}
        </div>
    )
}

export default User