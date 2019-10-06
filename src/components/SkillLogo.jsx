import React from 'react';
import PropTypes from 'prop-types';

const SkillLogo = ({ image, text }) => (
  <div className="two columns">
    <img src={image} width="80" height="80" alt={text} />
    <div className="text-below-image">
      <h6>{text}</h6>
    </div>
  </div>
);

SkillLogo.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillLogo;
