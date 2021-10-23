import React from 'react';
import '@styles/Profile.scss';
import creator from '@assets/images/creator.jpg';

function Profile() {
  return (
    <div className="profile mx-1" id="profile">
      <div className="card m-0">
        <div className="row">
          <div className="profile-img col-12 col-lg-3">
            <img src={creator} className="img-fluid creator-img" alt="Website Creator" />
          </div>
          <div className="col-12 col-lg-9 pl-1">

            <div className="card-body d-inline-block">
              <h1 className="card-title fst-italic">
                Web Developer
              </h1>
              <p className="card-text">Hi, I am Matías Cardone, I am a highly competent full-stack web developer with over two years of experience participating in the complete web development lifecycle.</p>
              <p className="card-text">Your website will be perfect as I pay close attention to every detail.</p>
              <h2 className="card-text">My core skills include:</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML5</li>
                <li className="list-group-item">CSS3/Bootstrap/Tailwind</li>
                <li className="list-group-item">Javascript/Typescript</li>
                <li className="list-group-item">React/Gatsby/Angular/Vue</li>
                <li className="list-group-item">Node</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">MongoDB</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;
