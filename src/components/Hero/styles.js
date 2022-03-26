import styled from "styled-components";

export const Container = styled.section`
  
  padding-top: 13%;
  padding-bottom: 5%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  
  h1, h3, p {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
  .hero-text{
    /* & > p{
      font-size: 1.8rem;
    } */
    p{
      font-size: 2rem;
    }
    h1{
      font-family: 'Founders Grotesk', 'Inter';
      font-size: 7rem;
    }

    h3{
      font-family: 'Founders Grotesk', 'Inter';
      color:var(--yellow);
      margin: 1rem 0;
      font-size: 3rem;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }

  @media(max-width: 960px){
    display: block;
    margin-top: 10%;
    padding-bottom: 0px;
    .hero-text{

      h1{
        font-size: 5rem;
      }
      h3{
        font-size: 2.5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 15%;
    padding-bottom: 0px;
  }
  @media(max-width: 480px){
    margin-top: 35%;
    padding-bottom: 0px;
  }
`