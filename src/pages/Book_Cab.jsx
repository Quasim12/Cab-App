import React from 'react';
import './Book_Cab.css';
const TaxiBookingPage = () => {
  return (
    <div className="taxi-booking-page">
      <div className="map-container">
        <div className="map"></div>
      </div>
      <div className="ride-list-container">
      <img className='image' src="images/mapImage.png" alt="" />  
<div><ul><li className='abc'>ABC123,Noida, Delhi12345</li></ul></div>
<div><ul><li className='def'>DEF456,Noida,Delhi67890</li></ul></div>

        <h2>Available Ride's</h2>
        <div className="ride-item">

        <span className="ride-time">20 min</span>
          <div className="ride-type">Prime Sedan</div>
          <p>Spacious sedans,top drivers</p>
          <div className="ride-price">₹89</div><span >119</span>
        </div>
        <div className="ride-item">

        <span className="ride-time">12 min</span>
          <div className="ride-type">SUV</div>
          <p>comfy,economical cars</p>
          <div className="ride-price">₹150</div><span >100</span>

        </div>
        <div className="ride-item">

        <span className="ride-time">15 min</span>
          <div className="ride-type">MUV</div>
          <p>Spacious MUVs</p>
          <div className="ride-price">₹200</div><span >269</span>
        </div>
        <div className="ride-item">

        <span className="ride-time">15 min</span>
           <div className="ride-type">Book Any</div>
           <p>Prime Sedan, SUV,MUV</p>
          <div className="ride-price"> ₹89-₹200</div>
        </div>
      </div>
      <div>
      <p className='surge'>No surge charges</p>
      </div>
      <div className="booking-details">
        <div className="pickup-location">
        
        </div>
        <div className="coupon">
          <p>Coupon</p><div className='line'>|</div>
          <p>Book for myself</p>
        </div>
        <button className='button'>Book</button>
      </div>
    </div>
  );
};

export default TaxiBookingPage;
