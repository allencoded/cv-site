const Contact = () => {
  const sendEmail = () => {
    window.location.href = "mailto:allencoded@gmail.com";
  };

  const viewLinkedIn = () => {
    window.location.href =
      "https://www.linkedin.com/in/allen-hendricks-4511582a/";
  };

  return (
    <section id="contact">
      <div className="container">
        <h1>Contact</h1>
        <div className="block" />
        <div>
          <form method="get" action="allen-resume.pdf">
            <div>
              <button
                type="button"
                className="btn-submit"
                onClick={() => sendEmail()}
              >
                Email Me
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn-submit"
                onClick={viewLinkedIn}
              >
                View LinkedIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
