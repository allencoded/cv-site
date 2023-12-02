function yearsOfExperience() {
  return new Date().getFullYear() - 2008;
}

const About = () => (
  <section id="about">
    <div className="container">
      <div className="row">
        <h1>About</h1>
        <div className="block" />
        <p>
          Hello, I'm Allen Hendricks, a software engineer, entrepreneur, and
          writer with over {yearsOfExperience()} years in the tech industry. My
          career has been a fulfilling journey of coding, consulting, managing,
          and launching successful software applications. I'm driven by a
          passion for continual learning and tackling new challenges. I take
          pride in developing efficient, scalable solutions. My consultancy work
          has allowed me to assist both startups and established companies in
          leveraging technology to meet their business objectives. In leading
          teams, I foster a culture of collaboration and innovation.
        </p>
        <p>
          My entrepreneurial endeavors have taught me the importance of
          balancing risk with strategic planning. Through writing, I share my
          insights and experiences, aiming to inspire others in their tech
          endeavors.
        </p>
        <p>
          Embracing the ever-evolving tech landscape, I'm eagerly anticipating
          the next chapter and the opportunities it brings.
        </p>
      </div>
    </div>
  </section>
);

export default About;
