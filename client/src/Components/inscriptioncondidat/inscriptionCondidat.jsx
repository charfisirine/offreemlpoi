import React, { useState } from "react";
import axios from "axios";
import "./inscriptioncondidat.css";
import {useNavigate} from "react-router-dom";



const InscriptionCondidat = () => {
  const navigate = useNavigate(); // Utilisez useNavigate pour la redirection
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    adresse: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Effacez les erreurs associées au champ modifié
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/candidat/register",
        formData
      );
      console.log(response.data);
      // Rediriger vers la page de connexion après inscription réussie
      navigate("/connexion"); // Redirection vers la page de connexion
    } catch (error) {
      console.error(error.response.data);
      // Mettre à jour les erreurs de validation
      if (error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group inputBox ">
        <label htmlFor="name" className="label-form">
          Nom & Prénom
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nom & Prénom"
          className="form-control"
          onChange={handleChange}
        />
        {errors.name && <span className="error-message">{errors.name[0]}</span>}
      </div>
      <div className="form-group inputBox ">
        <label htmlFor="email" className="label-form">
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="user@gmail.com"
          className="form-control"
          onChange={handleChange}
        />
        {errors.email && <span className="error-message">{errors.email[0]}</span>}
      </div>
      <div className="form-group inputBox ">
        <label htmlFor="adresse" className="label-form">
          Adresse
        </label>
        <input
          id="adresse"
          type="text"
          placeholder="Adresse"
          className="form-control"
          onChange={handleChange}
        />
        {errors.adresse && <span className="error-message">{errors.adresse[0]}</span>}
      </div>
      <div className="form-group inputBox ">
        <label htmlFor="phone" className="label-form">
          Numéro Téléphone
        </label>
        <input
          id="phone"
          type="text"
          placeholder="Numéro Téléphone"
          className="form-control"
          onChange={handleChange}
        />
        {errors.phone && <span className="error-message">{errors.phone[0]}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password" className="label-form">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="*****"
          className="form-control"
          onChange={handleChange}
        />
        {errors.password && <span className="error-message">{errors.password[0]}</span>}
      </div>
      <div className="ligne-form">
        <div className="inscrire top-distance">
          <button type="submit" className="btn-inscrire">
            S'inscrire
          </button>
        </div>
      </div>
    </form>
  );
};

export default InscriptionCondidat;
