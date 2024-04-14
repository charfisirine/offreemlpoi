import React,{useState } from 'react'
import './navbar.css'
import {MdCardTravel}from 'react-icons/md'
import { FaWindowClose } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  //useState pour déclarer une variable d'état dans un composant fonctionnel
  //la valeur initial est 'Navbar'
  const [active, setActive] = useState('navBar');

  //function to toggle navbar
  //showNav() simplement met à jour la variable d'état active
  //setActive pour modifier la valeur de la variable d'état active
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }

    //function to close navbar

    const removeNavbar=()=>{
      setActive('navBar')
    }
  return (
    <section className='NavbarSection'>
    <header className="header  flex">
      <div className="logoDiv">
        <a href="/" className="logo flex"><h1> <MdCardTravel className="icon" />Offre Emploi</h1></a>
      </div>
      <div className={active}>
        <ul className="navLists flex">
          <li className="navItem">
            <a href="/" className="navLink">Recherche emploi</a>
          </li>
          <li className="navItem">
            <a href="/OffreForm" className="navLink">Publier une offre</a>

          </li>
          <li className="navItem">
          <a href="/ProfilAdmin" className="navLink">Admin</a>
          </li>
          <li className="navItem">
          <a href="/ProfilCondidat" className="navLink">Condidat</a>
          </li>
          <li className="navItem">
          <a href="/ProfilRecruteur" className="navLink">Recruteur</a>
          </li>
          
           <button className='btn'><a href='/connexion'>Connexion</a></button>
          
            <div onClick={removeNavbar} className="closeNavbar">
            <h1><FaWindowClose className="icon" /></h1>
          </div>  
        </ul>
      </div>

      <div onClick={showNav} className="toggleNavBar">
        <h1><PiDotsNineBold  className="icon "/></h1>
      </div>
    </header>
  </section>  
  )
}

export default Navbar
