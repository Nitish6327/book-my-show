import React from 'react'
import { seats } from '../data'
import '../Css/lastBookingdetails.css'

const lastBookingdetails = () => {
  return (
    <div className='last_Booking_details_container_main'>
      <h2 className='last_booking_details_header'>Last Booking</h2>
    <div className='seats_container'>
      <p className='seats_header'>Seats:</p>
      <ul className='seats'>
        {seats.map((seats,index)=>(
          <li className='seat_value' key={index}>
          (seat):0
          </li>

        ))}
      </ul>

    </div>
    <p className='slot' style={{textAlign:"left"}}>Slot: 00:00AM<span></span></p>
    <p className='movie'>Movie:<span>Sholey</span></p>

    </div>
  )
}

export default lastBookingdetails
