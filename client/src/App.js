import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import OffreForm from './Components/OffreForm/OffreForm';
import Connexion from './Components/connexion/Connexion'
import Account from './Components/account/Account';
import DescriptionOffre from './Components/DescriptionOffre/DescriptionOffre';
import Modal from './Components/ApplicationFormModal/Modal';
import Inscription from './Components/inscription/Inscription';
import SideBar from './Components/SideBarAdmin/SideBar';
import Posts from './Components/Posts/Posts';
import Condidats from './Components/Condidat/Condidat';
import Recruteur from './Components/Recruteur/Recruteur';
import SideBarCondidat from './Components/SideBarCondidat/SideBar';
import SideBarRecruteur from './Components/SideBarRecruteur/SideBar';
import ListeOffrePublier from './Components/ListeDesOffrePublier/ListeOffrePublier';
import ListeOffrePostuler from './Components/ListeOffrePostuler/ListeOffrePostuler';

const App = () => {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/connexion" element={<Connexion/>} />
        <Route path="/OffreForm" element={<OffreForm/>} />
        <Route path="/DescriptionOffre" element={<DescriptionOffre/>} />
        <Route path="/modal" element={<Modal/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/ProfilAdmin" element={
              <div className="container1">
                <SideBar />
                <div className="content1">
                  <Account />
                </div>
              </div>
            }
          />
              <Route path="/ProfilAdmin" element={
              <div className="container1">
                <SideBar />
                <div className="content1">
                  <Account />
                </div>
              </div>
            }
          />
            <Route path="/condidat" element={
                <div className="container1">
                  <SideBar />
                  <div className="content1">
                  <Condidats/>
                  </div>
                </div>
              }
            />
            <Route path="/recruteur" element={
                <div className="container1">
                  <SideBar />
                  <div className="content1">
                  <Recruteur/>
                  </div>
                </div>
              }
            />
              <Route path="/posts" element={
                <div className="container1">
                  <SideBar />
                  <div className="content1">
                  <Posts/>
                  </div>
                </div>
              }
            />  
            <Route path="/ProfilCondidat" element={
                <div className="container1">
                  <SideBarCondidat />
                  <div className="content1">
                  <Account/>
                  </div>
                </div>
              }
            /> 
              <Route path="/ProfilRecruteur" element={
                <div className="container1">
                  <SideBarRecruteur />
                  <div className="content1">
                  <Account/>
                  </div>
                </div>
              }
            /> 
          <Route path="/ListeOffrePublier" element={
                <div className="container1">
                  <SideBarRecruteur />
                  <div className="content1">
                  <ListeOffrePublier/>
                  </div>
                </div>
              }
            /> 
            <Route path="/ListeOffrePostuler" element={
                <div className="container1">
                  <SideBarCondidat />
                  <div className="content1">
                  <ListeOffrePostuler/>
                  </div>
                </div>
              }
            /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
