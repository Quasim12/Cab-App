import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaxiBookingPage from "./pages/Book_Cab";
import CheckoutPage from "./pages/Advertisements";

function App() {
  
    return (      
        <BrowserRouter>
            <Routes>
                <Route path="TaxiBookingPage" element={< TaxiBookingPage/>} />
                <Route path="CheckoutPage" element={<CheckoutPage />} />
                {/* <Route path="email" element={<Email />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;