import React from 'react'
import './footer.css'
import job1 from '../../assets/job1.mp4'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdCardTravel } from 'react-icons/md';
import { FiChevronRight } from "react-icons/fi";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="videoDiv">
        <video src={job1} muted autoPlay loop type='video/mp4'></video>
      </div>
      <div className="secContent container">
          <div className="contactDiv flex">
            <div className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Find Your Job With Us </h2>
            </div>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <div className="logo flex">
                  <h1> <MdCardTravel className="icon" />Offre Emploi</h1>
                </div>
              </div>
              <div className="footerParagraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, 
                ad magni, cum aliquid aut exercitationem excepturi facere assumenda impedit sint,
                cumque adipisci beatae molestiae ex? Distinctio in omnis voluptas maxime.
              </div>
              <div className="footerSocial flex">
              <FaInstagram className="icon" />
              <FaTwitter className="icon"/>
              <FaFacebookF className="icon"/>
              </div>
            
              <div className="footerLinks grid">
              <div className="linkGroup">
                  <div className="groupTitle">
                    <span style={{ color: '#1868ae' }}>Partenaire</span>
                  </div>
                  <li>
                  <div className="footerLists flex">
                  <FiChevronRight className='icon'/><a href="">Lorem ipsum dolor sit</a>
                  </div>
                  </li>
                  <li>
                  <div className="footerLists flex">
                  <FiChevronRight className='icon'/><a href="">Lorem ipsum dolor sit</a>  
                  </div>
                  </li>
                  <li>
                  <div className="footerLists flex">
                  <FiChevronRight className='icon'/><a href="">Lorem ipsum dolor sit</a>  
                  </div>
                  </li>
                  <br />
                  <br />
                </div>
                <div className="linkGroup">
                  <div className="groupTitle">
                  <span style={{ color: '#1868ae' }}>EMPLOYEUR</span>
                  </div>
                  <li>
                  <div className="footerLists flex">
                  <FiChevronRight className='icon'/><a href="">Puplier une annonce </a>
                  </div>
                  </li>
                  <li>
                  <div className="footerLists flex">
                  <FiChevronRight className='icon'/><a href="#">Trouver un cv</a> 
                  </div>
                  </li>
                  <li>
                  <div className="footerLists flex">
                  <FiChevronRight className='icon'/><a href="">connexion</a>  
                  </div>
                  </li>
                  <br />
                  <br />
                </div>


                <div className="linkGroup">
                  <div className="groupTitle">
                    <span style={{ color: '#1868ae' }}>CHERCHEUR D'EMPLO</span>
                  </div>
                  <li>
                  <div className="footerLists flex">
                  <FiChevronRight className='icon'/><a href="">Trouver un emploi </a>
                  </div>
                  </li>
                  <li>
                  <div className="footerLists flex">
                  <FiChevronRight className='icon'/><a href="">connexion</a>  
                  </div>
                  </li>
                  <br />
                  <br />
                </div>
                
                <div className="footerDiv flex">
                       <FaCopyright className='icon' /> Copy Right Reserved
                </div>

              </div>
            </div>
          </div>
      </div>

    </section>
  )
}

export default Footer