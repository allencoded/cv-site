import React from "react";
import Company from "./Company";

const items = [
  {
    date: "2020 - Present",
    companyName: "EvidenceCare",
    position: "Director of Software Engineering",
    content:
      "Provide technical direction to lead cross team discussions that help drive alignment, make technical decisions, and provide an important platform that values the diverse viewpoints of all team members while navigating complex decisions. Define our teams bar of quality and efficicency while balancing business impact. Lead internal technical training efforts. Work directly with stakeholders to ensure the technical teams are aligned with the product vision. Provide pivotal hiring and onboarding of new technical leaders. During the early months of the COVID19 crisis I directly lead a cross organization effort to launch an open and free pathway application to aid in quickly diagnosing and recommending treatment for COVID19 patients. ",
  },
  {
    date: "2019 - 2020",
    companyName: "Vaco",
    position: "Technical Team Lead",
    content:
      "Technical Lead for the new Vaco managed services team in Nashville, TN office. Accountable for leading a team of developers on various projects which support various stakeholder needs. I work closely with external stakeholders and our internal team to drive towards successful project deliverables. \nI joined Vaco's Nashville team on their first managed services project. A difficult period since Vaco was facing many growing challenges and realizing they need additional leadership. \nSuccess included delivering on our first 6 month SoW, 4 months of which I played a direct role in by guiding the software development team, prioritizing team tasks, aiding stakeholders in planning and execution of technical tasks, and communicating effectively with internal key leadership as well as external stakeholders",
  },
  {
    date: "2013 - 2019",
    companyName: "20|20 Research",
    position: "FrontEnd Engineer",
    content:
      "20|20 embraced using the bleeding edge technology allowing my skills to stay current in an enterprise environment. The enterprise applications I built along with a small team served thousands of companies as 20|20 Research is the #1 market firm for qualitative and quantitative research. I also honed my communications skills more than ever before as I was working 100% remotely with a non-remote staff over 700 miles apart from the office.",
  },
  {
    date: "2010 - 2012",
    companyName: "Applied Health Analytics",
    position: "Senior Developer",
    content:
      "Developed a rich software application partnered with large client healthcare systems. Developed applications that successfully strengthened the financial viability of large partnered organizations.",
  },
  {
    date: "2008 - 2010",
    companyName: "Acxiom",
    position: "Content Engineer",
    content:
      "Awarded the golden coin for sustaining 100% quality. Integrated back-end .NET code for use in our CMS. Transformed Photoshop Documents in HTML emails for multiple high level clients including GM, Qwest, Consumer Reports, and others.",
  },
];

const Experience = () => {
  const renderCompanies = () =>
    items.map((item, i) => (
      <div className="row">
        <Company
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          date={item.date}
          companyName={item.companyName}
          position={item.position}
          content={item.content}
        />
        <div className="pad-top">&nbsp;</div>
      </div>
    ));

  return (
    <div>
      <section id="experience">
        <div className="container">
          <div className="row">
            <h1>Experience</h1>
            <div className="block" />
          </div>
          {renderCompanies()}
        </div>
      </section>
      <section id="education">
        <div className="container">
          <div className="row">
            <h1>Education</h1>
            <div className="block" />
          </div>
          <div className="row">
            <Company
              date="2004 - 2008"
              companyName="Kaplan University [Acquired by Purude University 2017]"
              position="B.S. Computer Science"
              content="Graduated Magna Cum Laude."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
