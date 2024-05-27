import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <div className='navbarsfdds'>
      <div className='container'>
        <div className='Navbar_esas'>
          <div ><img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="logo" /></div>
          <div className='Navbar_list_esas'>
            <ul className='Navbar_list d-flex'>
              <li><Link to='/'>Home</Link></li>
              <li><Link>Category</Link></li>
              <li><Link>Men</Link></li>
              <li><Link>Women</Link></li>
              <li><Link>LaTEst</Link></li>
              <li><Link>Pages</Link></li>
              <li><Link to="/Admin">Admin</Link></li>
              <li><Link to='/Favoritler'>Favoritlerim</Link></li>
            </ul>
          </div>
          <button className='navbar_menu'><IoMdMenu /></button>
        </div>


      </div>
    </div>

  )
}

export default Navbar