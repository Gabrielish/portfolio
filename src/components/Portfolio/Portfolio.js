import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll"


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#F44250" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/Gabrielish" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Graphic Designer</h3>
            <p>Here are all my projects within the<a href="https://agropro.ro/"> company</a> I work in for 2 years, from banners, product designs, product labels, box designs made in adobe photoshop / illustrator.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Node</li>
              <li>Express</li>
              <li>MySql</li>
              <li>Ejs</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#F44250" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Gabrielish/SDA-pokemons-api" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub"/>
              </a>
              <a href="https://sda-pokemons-api.netlify.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Pokemons API</h3>
              <p>A project made with React that show a list of pokemon with some info and pagination from <a href="https://pokeapi.co/">pokeapi.co</a>.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#F44250" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://gabrielish.github.io/sda-loopstudios-landing-page-main/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Loopstudios</h3>
              <p>A landing page for a fictional company proposed by <a href="https://www.frontendmentor.io/">Frontend Mentor.</a>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#F44250" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Gabrielish" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Next project</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas?
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Coming soon</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#F44250" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Gabrielish" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Test</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, incidunt.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>VueJs</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#F44250" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/Gabrielish" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://github.com/Gabrielish" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Test</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, harum?
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}



      </div>
    </Container>
  );
}