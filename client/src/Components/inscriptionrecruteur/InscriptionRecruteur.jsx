import React from "react";
import "./inscriptionrecruteur.css";

const InscriptionRecruteur = () => {
  return (
    <form
      method="POST"
      id="contactForm"
      name="contactForm"
      className="contactForm"
      noValidate="noValidate"
    >
      <div>
        <div className="ligne-form">
          <div className="form-item-double">
            <div className="form-group form-item">
              <label className="label" htmlFor="nomprenom">
                nom & prénom
              </label>
              <input
                type="text"
                className="form-control"
                name="titre"
                id="nomprenom"
                placeholder="nom & prénom"
              />
            </div>
            <div className="form-group form-item">
              <label className="label" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="duree"
                placeholder="E-mail "
              />
            </div>
          </div>
        </div>

        <div className="ligne-form">
          <div className="form-item-double">
            <div className="form-group form-item">
              <label className="label" htmlFor="secteur_activite">
                Secteur Activité
              </label>
              <input
                type="text"
                className="form-control"
                name="secteur_activite"
                id="secteur_activite"
                placeholder="Secteur Activité"
              />
            </div>
            <div className="form-group form-item">
              <label className="label" htmlFor="adresse">
                Adresse
              </label>
              <input
                type="email"
                className="form-control"
                name="adresse"
                id="adresse"
                placeholder="Adresse"
              />
            </div>
          </div>
        </div>

        <div className="ligne-form">
          <div className="form-item-double">
            <div className="form-group form-item">
              <label className="label" htmlFor="nom_entreprise">
                Nom Entreprise
              </label>
              <input
                type="text"
                step="any"
                className="form-control"
                name="nom_entreprise"
                id="nom_entreprise"
                placeholder="Nom Entreprise"
              />
            </div>
            <div className="form-group form-item">
              <label className="label" htmlFor="site_web">
                Site Web
              </label>
              <input
                type="text"
                className="form-control"
                name="site_web"
                id="site_web"
                placeholder="Site Web "
              />
            </div>
          </div>
        </div>
        <div className="ligne-form">
          <div className="form-item-double">
            <div className="form-group form-item">
              <label className="label" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="number"
                step="any"
                className="form-control"
                name="phone"
                id="salaire"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group form-item">
              <label className="label" htmlFor="pasword">
                Pasword
              </label>
              <input
                type="text"
                className="form-control"
                name="pasword"
                id="pasword"
                placeholder="*******"
              />
            </div>
          </div>
        </div>

        <div className="ligne-form">
          <div className="inscrire top-distance">
            <a href="/connexion" className="btn-inscrire">
              s'inscrire
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InscriptionRecruteur;
