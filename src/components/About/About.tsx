import { Container } from "./styles";

// import profileImage from "../../assets/profile-image.jpg"
import photoshopIcon from "../../assets/photoshop-icon.svg"
import illustratorIcon from "../../assets/illustrator-icon.svg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg"
import typescriptIcon from "../../assets/typescript-icon.svg";
// import vueIcon from "../../assets/vue-icon.svg";
import sassIcon from "../../assets/sass-icon.svg"
import githubIcon from "../../assets/github-icon.svg"

import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>My name is Gabriel Bundea, I am a graphic designer with a great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me. Improved my skills as a Graphic Designer and Front-End developer</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>I develop websites and applications using HTML, CSS, and JavaScript. I'm familiar with developing layouts that I'm provided with. I'm always improving myself with each project comes in my hands.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="ability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}> 
            <img src={photoshopIcon} alt="Photoshop" />
          </ScrollAnimation>
          </div>

          <div className="ability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> 
            <img src={illustratorIcon} alt="Illustrator" />
          </ScrollAnimation>
          </div>

          <div className="ability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </ScrollAnimation>
          </div>

          <div className="ability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </ScrollAnimation>
          </div>

          <div className="ability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="ability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={bootstrapIcon} alt="Bootstrap" />
          </ScrollAnimation>
          </div>

          <div className="ability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={sassIcon} alt="Sass" />
          </ScrollAnimation>
          </div>

          <div className="ability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="ability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
            <img src={githubIcon} alt="Github" />
          </ScrollAnimation>
          </div>

        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src="https://scontent.fcra1-1.fna.fbcdn.net/v/t1.6435-9/120307977_1549722078549419_8530429116466490678_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=UH8hBZTM7WIAX8DsByP&_nc_ht=scontent.fcra1-1.fna&oh=00_AT_jJq0rqGE56Tdu8OfcoEbgVmIL3zqt1Xlj7ONjCbOkQQ&oe=62573F0D" alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
