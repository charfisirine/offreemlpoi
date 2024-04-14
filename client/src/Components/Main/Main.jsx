import React from 'react';
import './main.css';
import { FaRegBookmark } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Main = () => {
  return (
    <div className="container main">

      <br />
      <br />
    <div className="homebox">
    <div className='jobliste'>
            <header className="row">
              <div className="col col-xs-12 col-m-8">
                <div className="job-header">
                  <div className="job-title">
                    <h1>
                      Offres d'emploi : Stage en Tunisie
                    </h1>
                  </div>
                  <div className="job-button">
                    <span>901 offres d'emploi</span>
                  </div>
                </div>
              </div>
            </header>
            <a href="DescriptionOffre" className='job1'>
              <div >
                  <ul className='job'>
                    <article className='clicky'>
                      <header className="job-header">
                        <div className="job-title">
                          <h2>
                            <a href="#" className='lien' >Stage CIVP Graphic Designer</a>
                          </h2>
                        </div>
                        <div className="job-button">
                          <button type="submit" title="Sauvegarder ce poste" className='sauvegarder'>
                            <FaRegBookmark className='icon' />
                          </button>
                        </div>
                      </header>
                      <p class="company">DIGITAL BATH</p>
                      <ul class="location">
                          <li>
                          <FaLocationDot  className='icon'/>Ben Arous
                          </li>                 
                      </ul>
                      <div class="desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum est vero dolorum officia!
                           Doloremque nemo deserunt, dolorum ut sapiente repudiandae ipsa mollitia libero tempora reprehenderit culpa error commodi itaque sed.                      </div>
                    </article>
                  </ul>
                  <br />
                  <footer>
                    <ul className="tags">      
                      <li>
                        <span className="badge badge-r badge-s">
                          Il y a 1 jour
                        </span>
                      </li>
                    </ul>
                  </footer>
              </div>
            </a>
            <a href="#" className='job2'>
              <div >
                  <ul className='job'>
                    <article className='clicky'>
                      <header className="job-header">
                        <div className="job-title">
                          <h2>
                            <a href="#" className='lien' >Stage CIVP Graphic Designer</a>
                          </h2>
                        </div>
                        <div className="job-button">
                          <button type="submit" title="Sauvegarder ce poste" className='sauvegarder'>
                            <FaRegBookmark className='icon' />
                          </button>
                        </div>
                      </header>
                      <p class="company">DIGITAL BATH</p>
                      <ul class="location">
                          <li>
                          <FaLocationDot  className='icon'/>Ben Arous
                          </li>                 
                      </ul>
                      <div class="desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum est vero dolorum officia!
                           Doloremque nemo deserunt, dolorum ut sapiente repudiandae ipsa mollitia libero tempora reprehenderit culpa error commodi itaque sed.                      </div>
                    </article>
                  </ul>
                  <br />
                  <footer>
                    <ul className="tags">      
                      <li>
                        <span className="badge badge-r badge-s">
                          Il y a 1 jour
                        </span>
                      </li>
                    </ul>
                  </footer>
              </div>
            </a>
            <a href="#" className='job3'>
              <div >
                  <ul className='job'>
                    <article className='clicky'>
                      <header className="job-header">
                        <div className="job-title">
                          <h2>
                            <a href="#" className='lien' >Stage CIVP Graphic Designer</a>
                          </h2>
                        </div>
                        <div className="job-button">
                          <button type="submit" title="Sauvegarder ce poste" className='sauvegarder'>
                            <FaRegBookmark className='icon' />
                          </button>
                        </div>
                      </header>
                      <p class="company">DIGITAL BATH</p>
                      <ul class="location">
                          <li>
                          <FaLocationDot  className='icon'/>Ben Arous
                          </li>                 
                      </ul>
                      <div class="desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum est vero dolorum officia!
                           Doloremque nemo deserunt, dolorum ut sapiente repudiandae ipsa mollitia libero tempora reprehenderit culpa error commodi itaque sed.                      </div>
                    </article>
                  </ul>
                  <br />
                  <footer>
                    <ul className="tags">      
                      <li>
                        <span className="badge badge-r badge-s">
                          Il y a 1 jour
                        </span>
                      </li>
                    </ul>
                  </footer>
              </div>
            </a>



      
    </div>
    </div>
    <br />
    </div>
    
  );
}

export default Main;
