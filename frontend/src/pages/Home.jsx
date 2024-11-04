import React from 'react';
import styles from './Home.module.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <>
      <Header />  
      <section id="profile" className={styles.profile}>
        <div className={styles.sectionPicContainer}>
          <img src="./assets/Headshot.png" alt="My Headshot" className={styles.headshot} />
        </div>
        <div className={styles.sectionText}>
          <p className={styles.sectionTextP1}>Hello, I'm</p>
          <h1 className={styles.title}>Caden Jurkovski</h1>
          <p className={styles.sectionTextP2}>Aspiring Computer Scientist</p>
          <div className={styles.btnContainer}>
            <button
              className={`${styles.btn} ${styles.btnColor2}`}
              onClick={() => window.open('./assets/Caden_Jurkovski_Resume.pdf')}
            >
              Download CV
            </button>
            <button
              className={`${styles.btn} ${styles.btnColor1}`}
              onClick={() => window.location.href='./#contact'}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container" className={styles.socialsContainer}>
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn Profile"
              className={styles.icon}
              onClick={() => window.location.href='https://www.linkedin.com/in/jurkovski'}
            />
            <img
              src="./assets/github.png"
              alt="My GitHub Profile"
              className={styles.icon}
              onClick={() => window.location.href='https://github.com/cyphercrit/'}
            />
          </div>
        </div>
      </section>
      
      <section id="about" className={styles.about}>
        <p className={styles.sectionTextP1}>Get to Know More</p>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionPicContainer}>
            <img
              src="./assets/About_Me.png"
              alt="About Me"
              className={styles.aboutPic}
            />
          </div>
          <div className={styles.aboutDetailsContainer}>
            <div className={styles.aboutContainers}>
              <div className={styles.detailsContainerInterests}>
                <img
                  src="./assets/interests.png"
                  alt="Interests Icon"
                  className={`${styles.icon} ${styles.aboutIcon} ${styles.interestsIcon}`}
                />
                <h3>Interests</h3>
                <ul>
                  <li>Software Engineering</li>
                  <li>Artificial Intelligence</li>
                  <li>Cybersecurity</li>
                </ul>
              </div>
              <div className={styles.detailsContainer}>
                <img
                  src="./assets/education.png"
                  alt="Education Icon"
                  className={`${styles.icon} ${styles.aboutIcon} ${styles.educationIcon}`}
                />
                <h3>Education</h3>
                <p>
                  B.S. Computer Science & Mathematics <em>(ongoing)</em>
                  <br /> University of Minnesota - Twin Cities
                  <br />
                  Sep. 2022 – May 2026
                </p>
              </div>
            </div>
            <div className={styles.textContainer}>
              <p>
                Hey! Judging by what this site is all about, you can probably guess
                that my name is Caden. A little bit about me– I am currently in my
                3rd year of schooling, and some of the things that I am studying
                right now are computer architecture and functional programming.
                Outside of school, I find enjoyment in activities such as reading,
                kayaking, and camping with friends. I am always eager to apply what I
                am learning in the real world or through projects, and I love trying
                new things and learning new skills.
                <br />
                <br />
                The whole purpose of this site is to serve as some sort of hub to
                organize my professional experiences, projects, and anything else
                that I might find of value in one place. I'm actively working on
                expanding my knowledge and gaining hands-on experience with whatever
                comes my way. Feel free to connect with me if you share similar
                interests or have insights to share!
              </p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className={`${styles.icon} ${styles.arrow}`}
          onClick={() => window.location.href='./#projects'}
        />
      </section>
      
      <section id="projects" className={styles.projects}>
        <p className={styles.sectionTextP1}>Browse My Recent</p>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.experienceDetailsContainer}>
          <div className={styles.aboutContainers}>
            <div className={`${styles.detailsContainer} ${styles.colorContainer}`}>
              <div className={styles.articleContainer}>
                <img
                  src="./assets/url_shortener_demo.png"
                  alt="URL Shortener"
                  className={styles.projectImg}
                />
              </div>
              <h2 className={`${styles.experienceSubTitle} ${styles.projectTitle}`}>URL Shortener</h2>
              <div className={styles.btnContainer}>
                <button
                  className={`${styles.btn} ${styles.btnColor2} ${styles.projectBtn}`}
                  onClick={() => window.location.href='https://github.com/cyphercrit/url-shortener-api'}
                >
                  Github
                </button>
                <button
                  className={`${styles.btn} ${styles.btnColor2} ${styles.projectBtn}`}
                  onClick={() => window.location.href='./projects/url-shortener'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className={`${styles.detailsContainer} ${styles.colorContainer}`}>
              <div className={styles.articleContainer}>
                <img
                  src="./assets/derivative_grapher_demo.png"
                  alt="Derivative Grapher"
                  className={styles.projectImg2}
                />
              </div>
              <h2 className={`${styles.experienceSubTitle} ${styles.projectTitle}`}>
                Graphing Derivatives
              </h2>
              <div className={styles.btnContainer}>
                <button
                  className={`${styles.btn} ${styles.btnColor2} ${styles.projectBtn}`}
                  onClick={() => window.location.href='https://github.com/cyphercrit/graphing-derivatives'}
                >
                  Github
                </button>
                <button
                  className={`${styles.btn} ${styles.btnColor2} ${styles.projectBtn}`}
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
          className={`${styles.icon} ${styles.arrow}`}
          onClick={() => window.location.href='./#contact'}
        />
      </section>
      
      <section id="contact" className={styles.contact}>
        <p className={styles.sectionTextP1}>Get in Touch</p>
        <h1 className={styles.title}>Contact Me</h1>
        <div className={styles.contactInfoUpperContainer}>
          <div className={styles.contactInfoContainer}>
            <img
              src="./assets/email.png"
              alt="Email Icon"
              className={`${styles.icon} ${styles.contactIcon} ${styles.emailIcon}`}
            />
            <p>
              <a href="mailto:caden@jurkovski.com">caden@jurkovski.com</a>
            </p>
          </div>
          <div className={styles.contactInfoContainer}>
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn Icon"
              className={`${styles.icon} ${styles.contactIcon}`}
            />
            <p>
              <a href="https://www.linkedin.com/in/jurkovski">
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
