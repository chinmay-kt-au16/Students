import React  from 'react'
import {Link }from 'react-router-dom';



const Nav = ({setIslogin}) => {


    const logoutSubmit = () =>{
        localStorage.clear()
        setIslogin(false)
    }
    return (
       <header>
             
           <div  class="logo" >
               <h1><Link to="/" >Students</Link></h1>
               
           </div>
           <ul>
               <li><Link to="/" >Home</Link></li>
               <li><Link to="/create">Add Students</Link></li>   
               <li onClick= {logoutSubmit} ><Link to="/">Logout</Link></li>
           </ul>

       </header>
    )
}

export default Nav
