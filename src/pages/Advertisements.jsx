import React from 'react';
import './Advertisements.css';
  const CheckoutPage =()=> {
    return (
      <div className="checkout-page">
<div><ul><li className='abc'>ABC123,Noida, Delhi12345</li></ul></div>
<div><ul><li className='def'>DEF456,Noida,Delhi67890</li></ul></div>
<a className="edit" href='#'>Edit</a >
<div className='cancel'>
    <p>Cancel</p> |  <p>Support</p> <p>Share</p>

</div>
<div>Total Charge ₹150 </div><br />
        <div>
        <div className=''>Individual</div>
        <span>Paid Online</span>
        </div>
        <div className='adv'>Advertisements</div>
      </div>
    );
  }
  export default CheckoutPage;