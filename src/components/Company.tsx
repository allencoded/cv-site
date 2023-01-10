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

export default Company;
