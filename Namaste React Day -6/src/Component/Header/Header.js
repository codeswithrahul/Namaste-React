import React, { useState } from 'react';
import Logo from "../../assets/nav-logo.png";
import "./Header.css";
import { FaAmazon } from "react-icons/fa";
const userLoggedIn = () =>{
    return false;
}

const Header = () => {
    const[isLoggedIn,setIsLoggedIn] = useState(true);

  return (
    <>
        <nav>                                                                                                                                                                                   
            <section>
                <img src={Logo} alt="logo" className='img-logo'/>
            </section>
            <section>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">offers</a></li>
                    <li><a href="">Offers</a></li>
                    <li><a href="">contact</a></li>
                    <li>    
                        {
                          isLoggedIn ? (<button  className='logInBtn' onClick={() => setIsLoggedIn(!isLoggedIn)}>Log in</button>) : (<button  className='logInBtn' onClick={() => setIsLoggedIn(!isLoggedIn)}>Log out</button>)
                        }
                    </li>
                </ul>
            </section>
        </nav>
    </>
  )
}

export default Header;