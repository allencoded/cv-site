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
          Hello, I am Allen Hendricks. I am a software engineer, entrepreneur, and
          writer. For over
          {' '}
          {yearsOfExperience()}
          {' '}
          years I have been privileged to have coded, consulted, managed,
          and deployed many successful software applications. I enjoy what I do,
          and I never stop trying to grow and improve my skills. New challenges
          are always present and I am always eager to explore the next chapter.
        </p>
      </div>
    </div>
  </section>
);

export default About;
