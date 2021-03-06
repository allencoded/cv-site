import React from "react";
import PropTypes from "prop-types";

interface IProps {
  date: string;
  companyName: string;
  position: string;
  content: string;
}

const Company = ({ date, companyName, position, content }: IProps) => (
  <div className="twelve columns">
    <div className="company-wrapper">
      <div className="company-title">
        <h4>{companyName}</h4>
      </div>
      <div className="company-date">{date}</div>
    </div>
    <h5>{position}</h5>
    {content}
  </div>
);

Company.propTypes = {
  date: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Company;
