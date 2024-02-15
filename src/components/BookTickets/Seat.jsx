import { useState,useContext } from "react"
import { allTicketsContext } from './Ticket';

const Seat=({val,ticketDetails})=>{

    const [allTickets,setAllTickets]=useContext(allTicketsContext)
    const username=sessionStorage.getItem("email");
    const [isselected,setIsselected] = useState(false)
    let selected='text-center w-10 h-10 border rounded shadow-xl seat bg-green-400 text-white'
    let unselected='text-center w-10 h-10 border rounded shadow-xl seat bg-slate-300 text-black'
    let disabled='text-center w-10 h-10 border rounded shadow-xl seat bg-red-300 text-black cursor-not-allowed '
    
    const handleOnClick= (e)=>{
        setIsselected(!isselected)
       if(!isselected && !allTickets.find((ticket) => ticket.seat_no === val[0]))
       {
        const obj=[...allTickets]
        obj.push({"id":ticketDetails.id,"date":ticketDetails.date,"seat_no":val[0],
        "payment_date":"2024-01-12","match_id":ticketDetails.match_id,"email":username})
        console.log(isselected)
        setAllTickets(obj)
       }
       else{
            let obj=[...allTickets]
            obj = obj.filter((ticket)=> ticket.seat_no!==val[0])
            setAllTickets(obj)
             console.log("AllTickets",allTickets)
       }
        
        // console.log("allTickets",allTickets)
    }

    return(
        <>
            <button className={val[1]?(isselected?selected:unselected):disabled} onClick={(e)=>handleOnClick(e)} disabled={!val[1]}>
                {val[0]}
                </button>
        </>
    );
  }
  export default Seat;