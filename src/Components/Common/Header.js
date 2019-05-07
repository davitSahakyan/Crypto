import React from 'react'
import './Header.css'
import logo from './logo.png'
import Search from './Search'
import {Link} from 'react-router-dom'


const Header = () =>{
  return(
    <div>
          <div className='Header'>
           <Link to='/'>
            <img  src={logo} alt='logo' className='Header-logo' />
            </Link>
             <Search />
          </div>

         
    </div> 
  )
}

export default Header