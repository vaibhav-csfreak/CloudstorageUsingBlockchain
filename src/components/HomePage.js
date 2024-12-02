
import React from "react";
import "./homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faLock, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page-container">
   
    <div className="home-page">
      <header className="header">
        <h1 className="title">Cloud Storage and Retrieval using Blockchain</h1>
        <p className="subtitle">
          Securely store and access your files on a decentralized network
        </p>
        <button className="login-button">
          <a href="/login" className="login-button">Log In
            </a>
          </button>
          <button className="login-button-register">
          <a href="/login" className="login-button">Register
            </a>
          </button>
      </header>

      <div className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faCloud} size="3x" className="feature-icon"/>
          <h2 className="feature-title">Cloud Storage</h2>
          <p className="feature-description">Store your files securely in the IPFS cloud</p>
        </div>

        <div className="feature">
          <FontAwesomeIcon icon={faLock} size="3x" className="feature-icon"/>
          <h2 className="feature-title">Decentralized Security</h2>
          <p className="feature-description">Ensure the privacy and security of your Files</p>
        </div>

        <div className="feature">
          <FontAwesomeIcon icon={faDatabase} size="3x" className="feature-icon" />
          <h2 className="feature-title">Distributed Network</h2>
          <p className="feature-description">Benefit from a distributed network infrastructure</p>
        </div>
      </div>
   
    </div>
    
    <Footer/>
    </div>
  
  );
};

export default HomePage;
