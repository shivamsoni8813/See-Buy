import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Checkout.css'


function CheckoutDetails() {
    let navigate = useNavigate()
    let [checkout, setcheckout] = useState(false)

    const handleCheckotClick = ()=>{
        setcheckout(true)
        setTimeout(() => { 
            navigate('/')
        }, 3000);
    }


    return (
        <div>
            <div className="checkoutWrapper">
               
                    <div className="formbackground">
                <div className="checkoutForm">
                {checkout && <div class="alert alert-success" role="alert">
                    A simple success alert—check it out!
            </div>}


                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">
                                    Name
                                </label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">
                                    email
                                </label>
                                <input type="email" className="form-control" id="email" required/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">
                                    Mobile No.
                                </label>
                                <input
                                    type="phone"
                                    className="form-control"
                                    required
                                    id="Mobile"
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label">
                                    Address 
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress2"
                                    placeholder="Apartment, studio, or floor"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">
                                    City
                                </label>
                                <input type="text" className="form-control" id="inputCity" required/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">
                                    State
                                </label>
                                <select id="inputState" className="form-select">
                                    <option>Rajasthan</option>
                                    <option>MadhyaPradesh</option>
                                    <option>Pune</option>
                                    <option>Gujrat</option>
                                    <option>Punjab</option>
                                    <option>Delhi</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">
                                    Zip
                                </label>
                                <input type="text" className="form-control" id="inputZip" required/>
                            </div>
                           
                            <div className="col-12">
                                <button type="button" onClick={()=>handleCheckotClick()} className="btn btn-primary">
                                    CheckOut
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutDetails;
