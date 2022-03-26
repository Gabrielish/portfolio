import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'


export function Footer() {
  return (
    <Container className="footer">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>B</span>
          <span>Gabriel</span>
        </HashLink>
      </Router>
      <div>
        <p>
          This site was made with <img src={reactIcon} alt="React" /> and a lot of
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/gabriel-bundea-485063197/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/Gabrielish"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

      </div>
    </Container>
  )
}
