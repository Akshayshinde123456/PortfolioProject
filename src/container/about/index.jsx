import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import {Animate} from 'react-simple-animate';
import './styles.scss';


const personalDetais = [
  {
    label: "Name",
    value: "Akshay Shinde",
  },
  {
    label: "Age",
    value: "25",
  },
  {
    label: "Address",
    value: "Kalwa, Thane(Maharashtra)",
  },
  {
    label: "Email",
    value: "shindeakshay5232@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 8879900246",
  },
  
];

const jobSummary = 'To work on innovative and challenging job where there are opportunities to expose my talent and prove my ability to undertake job responsibilities and strive for the success of an organization.';


const About = () => {
  return (
    <section id="about" className="about">

      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-900px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >

        <h3>Java Full Stack Developer</h3>
        <p>{jobSummary}</p>
        </Animate>


        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(500px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >

        <h3 className="personalInformationHeaderText">Personal Information</h3>
        <ul>
          {
            personalDetais.map((item,i)=>(
              <li key={i}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))
          }
        </ul>
        </Animate>
        </div>
        <div className="about__content__servicesWrapper">Services wrapper</div>
      
      </div>
    </section>


  );
};
export default About;
