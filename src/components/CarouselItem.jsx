import React from 'react';
import { PropTypes } from 'prop-types'
import '@styles/CarouselItem.scss';

function CarouselItem({
  small, big, description, active, link,
}) {
  return (
    <div className={`carousel-item ${active}`} role="option">
      <div className="col-md-6">
        <div className="card">
          <a href={link}>
            <div className="c2 center card-img">
              <div className="normal-image">
                <img width="" height="" src={small} className="img-fluid" alt={description} />
              </div>
              <div className="hover-image">
                <img width="" height="" src={big} className="img-fluid" alt={description} />
              </div>
            </div>
          </a>
        </div>
        <h3 className="pt-1 mt-1 carousel-description">{description}</h3>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  small: PropTypes.node,
  big: PropTypes.node,
  description: PropTypes.string,
  active: PropTypes.string,
  link: PropTypes.string,
};

export default CarouselItem;
