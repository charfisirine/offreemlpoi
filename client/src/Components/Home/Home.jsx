import React from 'react'
import './home.css'
import job from '../../assets/job.mp4'
import { MdOutlineSubtitles } from "react-icons/md";
import { FaFileContract } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
    <section className=" home">
      <div className="overlay"></div>
          <video src={job} muted autoPlay loop type='video/mp4'></video>

          <div className="homeContent conatiner">
          
            <div className='textDiv'>
              <span className="smallText">Our Packages</span> 
              <h1 className="homeTitle">Search Your Next Job </h1> 
            </div> 

            <div className="cardDiv grid">
                <div className="titleInput">
                  <label htmlFor="title">search your title</label>
                  <div className="input flex">
                    <input type="text" placeholder='Enter your title here' />
                    <MdOutlineSubtitles className="icon" />
                  </div>        
                </div> 
                <div className="contratInput">
                  <label htmlFor="contrat">Select your Contract</label>
                  <div className="input flex">
                    <select>
                      <option value="someOption">CDI</option>
                      <option value="otherOption">Contrat</option>
                      <option value="otherOption">Stage</option>
                      <option value="otherOption">CDD</option>
                      <option value="otherOption">Volontariat</option>
                    </select>               
                    <FaFileContract className="icon" />
                  </div>
                  <br />
                  <div>
                    <button className='recherche'><a href='#' className='rechlien'>Rechercher</a></button>
                  </div>
                </div>

            </div>
            <div className="homeFooterIcons flex">
              <div className="leftIcons">
                <FaFacebook  className="icon"/>
                <FaInstagram className="icon" />
              </div>
            </div>
      </div>

    </section>
    <Main/>
    
    <Footer/>
    </div>
  )
}

export default Home