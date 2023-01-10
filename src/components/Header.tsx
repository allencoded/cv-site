import myPic from "../images/mypic.png";

function Header(): JSX.Element {
  return (
    <header id="header">
      <div className="main_nav sticky">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a className="smoothscroll" href="#header">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="title">
        <div>
          <img src={myPic} style={{ borderRadius: "40px" }} alt="Profile" />
          <span className="typcn typcn-heart-outline icon heading" />
        </div>
        <div className="smallsep heading" />
        <h1 className="heading">Allen Hendricks</h1>
        <h2 className="heading">Software Engineer</h2>
        <a className="smoothscroll" href="#about">
          <div className="mouse">
            <div className="wheel" />
          </div>
        </a>
      </div>
      <a className="smoothscroll" href="#about">
        <div className="scroll-down" />
      </a>
    </header>
  );
}

export default Header;
