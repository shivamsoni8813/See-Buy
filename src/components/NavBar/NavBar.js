import React from 'react'

import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar({count, setshowcart}) {

    // getting email from localstorage

    let localemail = localStorage.getItem('email')
    
    // sending prop and changing state

    const handlesend = ()=>{
        setshowcart(true)
    }

    // clearing localstorage for logout

    const clearclick = ()=>{
       localStorage.clear()
    }

    return (
        <div>
            <div className="header fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="header-wraper">
                            <Link to='/' className="logo" >
                                SEE&BUY
                            </Link>

                            <div className="action">

                                <div className="Cart" onClick={handlesend}>
                                    Cart {count}
                                </div>
                                
                                <div className="user">
                                    {localemail ? localemail : "Guest"}
                                </div>

                                {localemail ?
                                 <Link to="/logIn" onClick={()=>clearclick()} className="Login">
                                    logOut
                                </Link>
                                :   
                                 <Link to="/logIn" className="Login">
                                    login
                                </Link>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
