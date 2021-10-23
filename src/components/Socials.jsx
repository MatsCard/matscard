import React from 'react';
import '@styles/Socials.scss';

function Socials() {
  return (
    <div className="socials rounded">
      <div className="icons text-center fs-4 d-none d-lg-block">
        <a href="https://www.instagram.com/matscard/" className="link-dark">

          <i className="fab fa-instagram" />
        </a>
        <a href="https://github.com/MatsCard" className="link-dark">

          <i className="fab fa-github" />
        </a>
      </div>

    </div>
  );
}

export default Socials;
