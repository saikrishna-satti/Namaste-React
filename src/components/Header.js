import React, { useState } from "react";
import TastytrailsLogo from "../../Public/Images/tasty-trails-logo.png"
import { Link } from "react-router-dom";
 

 const Header=()=>{
    const[login,setLogin]=useState(false);
    return(
   <div className="flex justify-between items-center fixed top-0 right-0 left-0  w-full px-6 py-4 z-50 shadow-md bg-white"  >
      <div className=" w-16 h-16 ">
        <img className="w-full h-full object-contain" src={TastytrailsLogo} alt="logo"/>
      </div>
      <div>
         <ul className="flex space-x-8 items-center">
            <li > <Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li > <Link to="/about" className="hover:text-blue-500">About us</Link></li>
            <li > <Link to="/cart" className="hover:text-blue-500">Cart</Link></li>
            <button onClick={()=>setLogin(!login)}
              className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">{login?"Logout":"Login"}
            </button>
         </ul>
      
      </div>
      
   </div>
    );
 };

export default Header;

