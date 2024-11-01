import React, { useEffect } from 'react';
import './Home.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function Home() {
  return (
    <>
  <Header />  
  <section id="profile">
    <div className="section__pic-container">
      <img src="./assets/Headshot.png" alt="My Headshot" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">Caden Jurkovski</h1>
      <p className="section__text__p2">Aspiring Computer Scientist</p>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
          onClick={() => window.open('./assets/Caden_Jurkovski_Resume.pdf')}
        >
          Download CV
        </button>
        <button
          className="btn btn-color-1"
          onClick={() => window.location.href='./#contact'}
        >
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img
          src="./assets/linkedin.png"
          alt="My LinkedIn Profile"
          className="icon"
          onClick={() => window.location.href='https://www.linkedin.com/in/caden-jurkovski-944638212/'}
        />
        <img
          src="./assets/github.png"
          alt="My GitHub Profile"
          className="icon"
          onClick={() => window.location.href='https://github.com/cyphercrit/'}
        />
      </div>
    </div>
  </section>
  <section id="about">
    <p className="section__text__p1">Get to Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      <div className="section__pic-container">
        <img
          src="./assets/About_Me.png"
          alt="About Me"
          className="about-pic"
        />
      </div>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container-interests">
            <img
              src="./assets/interests.png"
              alt="Interests Icon"
              className="icon about-icon interests-icon"
            />
            <h3>Interests</h3>
            <p />
            <ul>
              <li>Software Engineering</li>
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
            </ul>
            <p />
          </div>
          <div className="details-container">
            <img
              src="./assets/education.png"
              alt="Education Icon"
              className="icon about-icon education-icon"
            />
            <h3>Education</h3>
            <p>
              B.S. Computer Science &amp; Mathematics <em>(ongoing)</em>
              <br /> University of Minnesota - Twin Cities
              <br />
              Sep. 2022 – Dec. 2026
            </p>
          </div>
        </div>
        <div className="text-container">
          <p>
            Hey! Judging by what this site is all about, you can probably guess
            that my name is Caden. A little bit about me– I am currently in my
            3rd year of schooling, and some of the things that I am studying
            right now are computer architecture and functional progamming.
            Outside of school, I find enjoyment in activities such as reading,
            kayaking and camping with friends. I am always eager to apply what I
            am learning in the real world or through projects, and I love trying
            new things and learning new skills.
            <br />
            <br />
            The whole purpose of this site is to serve as some sort of hub to
            organize my professional experiences, projects, and anything else
            that I might find of value in one place. I'm actively working on
            expanding my knowledge and gaining hands-on experience with whatever
            comes my way. Feel free to connect with me if you share similar
            interests or have insights to share! <b />
          </p>
        </div>
      </div>
    </div>
    <img
      src="./assets/arrow.png"
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => window.location.href='./#projects'}
    />
  </section>
  <section id="projects">
    <p className="section__text__p1">Browse My Recent</p>
    <h1 className="title">Projects</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src="./assets/url_shortener_demo.png"
              alt="Derivative Grapher"
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">URL Shortener</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.location.href='https://github.com/cyphercrit/url-shortener-api'}
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.location.href='./projects/url-shortener'}
            >
              Live Demo
            </button>
          </div>
        </div>
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src="./assets/derivative_grapher_demo.png"
              alt="Derivative Grapher"
              className="project-img2"
            />
          </div>
          <h2 className="experience-sub-title project-title">
            Graphing Derivatives
          </h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.location.href='https://github.com/cyphercrit/graphing-derivatives'}
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.location.href='./projects/graphing-derivatives'}
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
    <img
      src="./assets/arrow.png"
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => window.location.href='./#contact'}
    />
  </section>
  <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      <div className="contact-info-container">
        <img
          src="./assets/email.png"
          alt="Email Icon"
          className="icon contact-icon email-icon"
        />
        <p>
          <a href="mailto:caden@jurkovski.com">caden@jurkovski.com</a>
        </p>
      </div>
      <div className="contact-info-container">
        <img
          src="./assets/linkedin.png"
          alt="LinkedIn Icon"
          className="icon contact-icon"
        />
        <p>
          <a href="https://www.linkedin.com/in/caden-jurkovski-944638212">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  </section>
  <Footer />
</>
  );
}

export default Home;