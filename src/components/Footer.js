import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-left">
            <p className="made-with-love">
              NIE Major Project
            </p>
          </div>
          <div className="footer-right">
            <p className="made-with-love">
              Made with <span role="img" aria-label="love">❤️</span>
            
            <a
              className="github-link"
              href="https://github.com/niemajorproject/CloudStorageUsingBlockchain"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
