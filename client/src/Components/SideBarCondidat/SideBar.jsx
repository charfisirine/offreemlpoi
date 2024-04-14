import React from 'react';
import './sidebar.css';
import { FaRegUserCircle } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { Link } from "react-router-dom"; 

const SideBarCondidat = () => {
  return (
    <div className='sidebar active'>
      <ul className='margintop'>
        <li>
          <Link to="/ProfilCondidat" className='liensidebar'> 
            <FaRegUserCircle className='iconsidebar' />
            Account
          </Link>
        </li>
        <li>
          <Link to="/ListeOffrePostuler" className='liensidebar'> 
            <BsFileEarmarkPost className='iconsidebar' />
            candidature
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBarCondidat;
