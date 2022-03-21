import styled from "styled-components";
import background from "../../assets/hiker.svg"

export const Container = styled.main`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 1000px) {
    background-size: 150%;
  }
  @media (max-width: 740px){
    padding: 0 4rem;
    background-size: 200%;
  }

  @media(max-width: 360px){
    padding: 0 2rem;
  }
`