import React from 'react'
import './descriptionOffre.css'
import { FaLocationDot } from "react-icons/fa6";
import { RiArticleLine } from "react-icons/ri";

const DescriptionOffre = () => {
  return (
    <div>
    <div className='Description'>
        <div className="boxdetail">
            <div className='titre'>
                <h2 className="titre">Stage CIVP Graphic Designer</h2>
            </div>
            <div className='Nom_Entreprise'>
                <p> Nom Entreprise </p>
            </div>
            <div className='detail'>
                <ul>
                <li>
                <FaLocationDot  className='iconloc'/>
                    <span>Ben Arous</span>
                    <RiArticleLine  className='iconloc'/>
                    <span>Stage</span>
                </li>
                

                </ul>
            </div>
            <section className="content">
               <b className='bold'>Entreprise:</b> 
                <br />
                <ul className='descriptionEntreprise'>
                    <li>
                        <h5>Nom Entreprise:</h5>
                        <p>E2me</p>
                    </li>

                    <li>
                        <h5>adresse:</h5>
                        <p>tunis,ariana</p>
                    </li>
                    <li>
                        <h5>Secteur Activite</h5>
                        <p>Electricité</p>
                    </li>
                    <li>
                        <h5>site_web</h5>
                        <p>www.e2me.com.tn</p>
                    </li>
                    <li>
                        <h5>Email</h5>
                        <p>e2me@gmail.com</p>
                    </li>
                    <li>
                        <h5>Phone Number</h5>
                        <p>22558866</p>                        
                    </li>

                

                </ul>
                <b className='bold'> Post Propsé:</b>
                <ul> 
                    <li>
                        <h5>Titre:</h5>
                        <p>secretaire</p>
                    </li>
                    <li>
                        <h5>Lieu Travail:</h5>
                        <p>tunis,ariana</p>
                    </li>
                    <li>
                        <h5>Durée:</h5>
                        <p>1 ans </p>
                    </li>
                    <li>
                        <h5>Type de Contrat:</h5>
                        <p>Stage</p>
                    </li>
                    <li>
                        <h5>Déscription:</h5>
                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Veniam vel ratione dicta aperiam nisi,
                                non numquam placeat nesciunt est excepturi reiciendis repudiandae possimus qui aliquam. Soluta labore repellat illo quo?
                            </p>
                        </li>
                </ul>


            </section>
            <div className="postuler top-distance">
              <a href="/modal" className="btn-postuler">
                Postuler
              </a>
            </div>
            {/* <div className="Postulerbtn">
                    <div className="form-group">
                      <input type="submit" value="Postuler" className="btn-poster" />
                      <div className="submitting"></div>
                    </div>
            </div> */}
            
        </div>
    </div>

</div>
  )
}

export default DescriptionOffre