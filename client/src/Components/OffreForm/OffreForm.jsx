import React from 'react';
import './offreform.css'; 
import { FaFileContract } from 'react-icons/fa6';

const OffreForm = () => {
  return (
    <div className='offre'>
      <div className="boxoffre">
              <h3 className="publier">Publier une offre</h3>
              {/* <div id="form-message-warning" className="mb-4"></div> */}
              <form method="POST" id="contactForm" name="contactForm" className="contactForm" noValidate="noValidate">
                <div >
                  <div className="ligne-form">
                      <div className="form-item-double">
                        <div className="form-group form-item">
                        <label className="label" htmlFor="titre">Titre</label>
                        <input type="text" className="form-control" name="titre" id="titre" placeholder="Titre" />
                        </div>
                        <div className="form-group form-item">
                            <label className="label" htmlFor="Nom_Entreprise">Nom Entreprise </label>
                            <input type="email" className="form-control" name="Nom_Entreprise" id="Nom_Entreprise" placeholder="Nom Entreprise" />
                        </div>
                      </div>

                  </div>
                  


                  <div className="ligne-form">
                    <div className="form-item-double">
                        <div className="form-group form-item">
                        <label className="label" htmlFor="Lieu_travail">Lieu Travail</label>
                        <input type="text" className="form-control" name="Lieu_travail" id="Lieu_travail" placeholder="Lieu de travail " />
                        </div>
                        <div className="form-group form-item">
                        <label className="label" htmlFor="Lieu_travail">Durée</label>
                        <input type="text" className="form-control" name="duree" id="duree" placeholder="Durée " />
                        </div>
                    </div>
                  </div>

                  <div className="ligne-form">
                     <div className="form-item-double">
                        <div className="form-group form-item">
                            <label className="label" htmlFor="salaire">Salaire</label>
                            <input type="number" step="any" className="form-control" name="salaire" id="salaire" placeholder="Salaire" />
                        </div>
                        <div className="form-group form-item">
                        <label htmlFor="contrat">Type de Contrat</label>
                        <div >
                            <select  className='form-control'>
                            <option value="someOption">Tous</option>
                            <option value="someOption">CDI</option>
                            <option value="otherOption">Contrat</option>
                            <option value="otherOption">Stage</option>
                            <option value="otherOption">CDD</option>
                            <option value="otherOption">Volontariat</option>
                            </select>               
                        </div>

                        </div>

                    </div>
                  </div>

                  <div className="ligne-form margin-bottom">
                    <div className="form-group ">
                      <label className="description" htmlFor="#">Description</label>
                      <textarea name="description" className="form-control" id="description"  placeholder="Description"></textarea>
                    </div>
                  </div>
                  

                  <div className="ligne-form">
                    <div className="form-group">
                      <input type="submit" value="Poster un offre" className="btn-poster" />
                      <div className="submitting"></div>
                    </div>
                  </div>
                </div>
              </form>
      </div>
    </div>
  );
}

export default OffreForm;
