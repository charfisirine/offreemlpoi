import React from 'react';
import './sidebar.css';
import { FaRegUserCircle } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { Link } from "react-router-dom"; 

const SideBarRecruteur = () => {


  return (
    <div className='sidebar active'>
      <ul className='margintop'>
        <li>
          <Link to="/ProfilRecruteur" className='liensidebar'> 
            <FaRegUserCircle className='iconsidebar' />
            Mon Compte
          </Link>
        </li>

        <li>
          <Link to="/ListeOffrePublier" className='liensidebar'> 
            <BsFileEarmarkPost className='iconsidebar' />
           Mes Offres
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBarRecruteur;
