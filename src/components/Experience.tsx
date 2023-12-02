import Company from './Company';

const items = [
  {
    date: '2023-present',
    companyName: 'Decimal',
    position: 'Principal Engineer',
    content:
      "At Decimal, my role as Principal Engineer revolves around enhancing our product development processes and team efficiency. I've played a pivotal role in refining our story mapping processes, enriching the technical requirements of tickets, and maintaining ticket hygiene, significantly streamlining project tracking and delivery. My contributions extend to authoring comprehensive documentation, which has been instrumental in facilitating knowledge transfer, expediting new member onboarding, and guiding maintenance and upgrade processes. Additionally, as a technical expert, I provide mentorship and guidance to the team, conducting peer code reviews and offering insights to maintain high code quality and system integrity.",
  },
  {
    date: '2022-2023',
    companyName: 'LiveRamp',
    position: 'Staff Software Engineer',
    content:
      'In my tenure as Staff Software Engineer at LiveRamp, I spearheaded a significant Javascript micro-frontend initiative, leading to the consolidation of multiple frontend applications. This strategic move not only enhanced development efficiency but also optimized overall performance. I worked closely with product teams to develop comprehensive story maps, transforming them into actionable technical tickets to streamline the execution process for the engineering team. My role also involved managing technical documentation and diagrams, ensuring smooth integration and effective communication within our micro-frontend architecture and internal library systems. Additionally, I was responsible for training and mentoring engineers, aiding both frontend and backend specialists in transitioning to advanced frontend technologies. This initiative was crucial in fostering skill development and promoting a culture of knowledge sharing. Furthermore, I effectively addressed and resolved cross-team dependency issues, coordinating efforts across global teams to enhance collaboration and ensure the success of our projects.',
  },
  {
    date: '2020 - 2022',
    companyName: 'EvidenceCare',
    position: 'Vice President of Software Engineering',
    content:
      "At EvidenceCare, as the Vice President of Software Engineering, I led the technical execution and managed processes for organizational initiatives, prioritizing performance and efficiency in delivering sophisticated technical solutions. My role involved rigorous monitoring of both internal and external application performance, coupled with data analysis to pinpoint improvement areas. Strategic actions were then implemented to enhance application functionalities. I played a crucial role in liaising with executive stakeholders, ensuring that technical delivery was perfectly aligned with the broader business objectives. This alignment fostered a strong partnership, leading to successful engineering outcomes that fulfilled organizational needs. Additionally, I oversaw technical hiring, bringing in exceptional talent, and established comprehensive training programs to elevate the team's skills and confidence. My tenure also included forging and nurturing strategic relationships with external vendors, negotiating favorable terms and efficiently resolving technical issues. These relationships were key in supporting our technical team and boosting overall operational efficiency.",
  },
  {
    date: '2019 - 2020',
    companyName: 'Vaco',
    position: 'Technical Team Manager',
    content:
      "Technical Lead for the new Vaco managed services team in Nashville, TN office. Accountable for leading a team of developers on various projects which support various stakeholder needs. I work closely with external stakeholders and our internal team to drive towards successful project deliverables. \nI joined Vaco's Nashville team on their first managed services project. A difficult period since Vaco was facing many growing challenges and realizing they need additional leadership. \nSuccess included delivering on our first 6 month SoW, 4 months of which I played a direct role in by guiding the software development team, prioritizing team tasks, aiding stakeholders in planning and execution of technical tasks, and communicating effectively with internal key leadership as well as external stakeholders",
  },
  {
    date: '2013 - 2019',
    companyName: '20|20 Research',
    position: 'Fullstack Engineer',
    content:
      "During my time at 20|20 Research, I led the engineering efforts for QualBoard, a key external application that served thousands of users, focusing on delivering a seamless and engaging user experience. A notable achievement was architecting and implementing a pub/sub event architecture, which revolutionized the platform by enabling real-time viewing of discussion responses, significantly enhancing user engagement. My collaborative efforts with the design team were pivotal in ensuring that design specifications were accurately and aesthetically translated into the web-based application. Embracing new challenges, I learned and utilized the Xamarin framework to build out mobile applications, expanding our product's reach and versatility. Additionally, I was instrumental in transitioning our web applications to responsive layouts, thereby significantly improving the user experience across various devices and screen sizes, catering to a more diverse user base.",
  },
  {
    date: '2010 - 2012',
    companyName: 'Applied Health Analytics',
    position: 'Senior Developer',
    content:
      'Developed a rich software application partnered with large client healthcare systems. Developed applications that successfully strengthened the financial viability of large partnered organizations.',
  },
  {
    date: '2008 - 2010',
    companyName: 'Acxiom',
    position: 'Content Engineer',
    content:
      'Awarded the golden coin for sustaining 100% quality. Integrated back-end .NET code for use in our CMS. Transformed Photoshop Documents in HTML emails for multiple high level clients including GM, Qwest, Consumer Reports, and others.',
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
              companyName="Purdue University"
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
