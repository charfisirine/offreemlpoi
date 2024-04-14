import React from "react";
// import { FaRegEdit } from 'react-icons/fa';
import "./account.css";
import { FaUserCircle } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";

const Account = () => {
  return (
    <div>
      <div className="account">
        <div className="box-account">
          <div>
            <h2 className="compte">Mon Compte</h2>
          </div>
          <div className="photoposition">
            <a href="#" className="photo">
              <FaUserCircle className="iconuser" />
              <button type="button" className="button">
                <GoPencil className="iconPencil" />
              </button>
            </a>
          </div>
          <div className="boxfiledset-container">
            <fieldset className="boxfiledset">
              <legend className="legend">
                Information Personel
                <a href="#" className="editlien">
                  <FaRegEdit className="editicon" />
                </a>
              </legend>
              <p className="pg">
                <span>sirine</span>
                <span>charfi</span>
              </p>
            </fieldset>
          </div>

          <div className="boxfiledset-container">
            <fieldset className="boxfiledset">
              <legend className="legend">
                Email
                <a href="#" className="editlien">
                  <FaRegEdit className="editicon" />
                </a>
              </legend>
              <p className="pg">
                <span>charfisirine62@gmail.com</span>
              </p>
            </fieldset>
          </div>

          <div className="boxfiledset-container">
            <fieldset className="boxfiledset">
              <legend className="legend">
                Mot de passe
                <a href="#" className="editlien">
                  <FaRegEdit className="editicon" />
                </a>
              </legend>
              <p className="pg">
                <span>******</span>
              </p>
            </fieldset>
          </div>

          <div className="suprimercompte">
            <a href="#" className="btn-supprimer-compte">
              Supprimer Mon Compte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
