import React from 'react'
import './inscription.css'
import InscriptionRecruteur from '../inscriptionrecruteur/InscriptionRecruteur';
import InscriptionCondidat from '../inscriptioncondidat/inscriptionCondidat';
import Tabs from '../tabs/Tabs';

const Inscription = () => {
  const tabs = [
    {
        id: 1,
        name: "Recruteur",
        content: <InscriptionRecruteur />
    },
    {
        id: 2,
        name: "Candidat",
        content: <InscriptionCondidat />
    },
];

  return (
    <div className="multibox">
    <div className="leftBox ">
      <ul>
        <li>
        <h2 className='top-distance'>Bon Retour !</h2>
        </li>
        <li>
        <p className='styleparagraph top-distance'>connectouz-vous avec votre compte pour nous rejoindre</p>

        </li>
        <li>
          <div className='connecter'>
          <a href="/connexion" className="btn-connecter top-distance"> se connecter</a>

          </div>
        
        </li>
      </ul>

    </div>

    <div className="righttBox ">
    <div className=" flex">
       
       <h1>
         {/* <MdCardTravel className="icon" /> */}
        Inscription
       </h1>
     </div>
     <div>
       <h3 className="subtitle">
         
         {/* Welcome to Offre Emploi!👋🏻 */}
       </h3>
     </div>
     <div className="top-distance">
       <p className="paragraph">
         Inscrivez-vous et rejoinredre notre plateforme
       </p>
     </div>
    <Tabs tabs={tabs} />
    </div>
  </div>
  )
}

export default Inscription