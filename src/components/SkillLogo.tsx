import React from 'react';

interface IProps {
  image: string;
  text: string;
}

const SkillLogo = ({ image, text }: IProps) => (
  <div className="two columns">
    <img src={image} width="80" height="80" alt={text} />
    <div className="text-below-image">
      <h6>{text}</h6>
    </div>
  </div>
);

export default SkillLogo;
