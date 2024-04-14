import React, { useState } from 'react';
import './sidebar.css';
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { Link } from "react-router-dom"; 
import { FaUserTie } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";

const SideBar = () => {
  const [showUsersDropdown, setShowUsersDropdown] = useState(false);

  const toggleUsersDropdown = () => {
    setShowUsersDropdown(!showUsersDropdown);
  };

  return (
    <div className='sidebar active'>
      <ul className='margintop'>
        <li>
          <Link to="/ProfilAdmin" className='liensidebar'> 
            <FaRegUserCircle className='iconsidebar' />
            Account
          </Link>
        </li>
        <li>
          <div className='liensidebar' onClick={toggleUsersDropdown}>
            <FaUserAlt className='iconsidebar' />
            Users
          </div>
          {showUsersDropdown && (
            <ul className="dropdown-list">
              <li>
                <Link to="/condidat" className='liensidebar'> 
                <RiUserSearchFill   className="iconsidebar"/>
                  Condidat
                </Link>
              </li>
              <li>
                <Link to="/recruteur" className='liensidebar'>
                <FaUserTie  className="iconsidebar"/>
                  Recruteur
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/posts" className='liensidebar'> 
            <BsFileEarmarkPost className='iconsidebar'/>
            Posts
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar;
