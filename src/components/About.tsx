import React from "react";

function yearsOfExperience() {
  return new Date().getFullYear() - 2008;
}

function yearsOfLeadershipExperience() {
  return new Date().getFullYear() - 2017;
}

const About = () => (
  <section id="about">
    <div className="container">
      <div className="row">
        <h1>About</h1>
        <div className="block" />
        <p>
          Hello my name is Allen Hendricks. I have been a software engineer for{" "}
          {yearsOfExperience()}
          years and been in leadership for {yearsOfLeadershipExperience()}
          of those years. I have experienced a lot of change in the field over
          that time. I have used an extensive amount of tools, programmed
          enterprise applications in various different languages across many
          different databases, been party to many agile methodologies,
          management styles, server and cloud architectures, consulting, you
          name it. While I have accomplished many things and launched many
          applications over 13 years, I never stop trying to improve, grow, and
          hone my skills further. New challenges are always presenting
          themselves and I enjoy a good puzzle.
        </p>
      </div>
    </div>
  </section>
);

export default About;
