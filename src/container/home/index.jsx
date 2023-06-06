import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();
  //console.log(navigate);

  const handleNavigateToContactMePage = () => {
    navigate("./contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Akshay
          <br />
          Full Stack Java Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <a href="Akshay_Shinde_Resume.pdf" download="Akshay_Shinde_Resume.pdf"> <button className="nav__button">Download Resume</button></a> 
        </div>
      </Animate>
    </section>
  );
};
export default Home;
