import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/About.css'
import styled from 'styled-components';
import { Bio } from '../../data/constants';
import Typewriter from "typewriter-effect";
import Design from '../Particles/Design';
import GUMAPAC from '../image/profile.jpg';


const AboutContainer = styled.div`
   background-color: ${({ theme }) => theme.card_light};
   display: flex;
   justify-content: center;
   position: relative;
   padding: 200px 60px;
   top:-150px;
   @media screen and (max-width: 960px){
    margin-top:60px;
    padding: 96px 16px;
   }
   @media  screen and (max-width: 771px) {
    padding: 90px 16px;
  }
   @media screen and (max-width: 640px){
    padding: 90px 16px;
 }
   x-index: 1;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 96%, 0 100%);

`;

const AboutBg = styled.div`
    position: absolute;
    display: flex;
    right: 0;
    bottom: 0;
    left: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0 90px;
   
`;
const AboutInnerContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    @media screen and (max-width: 960px){
        flex-direction: column
   }
`;
const AboutLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media screen and (max-width: 960px){
      order: 1;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    @media screen and (max-width: 640px){
      order: 1;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
`;
const AboutRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;
    @media screen and (max-width: 960px){
      order: 2;
      justify-content: end;
      align-items: center;
      margin-bottom: 80px;
      margin: auto;
      width: 50%;
      display:none;
    }
    @media screen and (max-width: 640px){
      order: 2;
      margin-bottom: 30px;
      display:none;
    }
`;
const Title = styled.div`
    margin-top:90px;
    font-size: 50px;
    fort-weight: 700;
    color : ${({ theme }) => theme.text_primary};
    line-height: 68px;
    @media screen and (max-width: 960px){
      text-align: center;
     
    }
    @media screen and (max-width: 640px){
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 8px;
    }
`;
const TextLoop = styled.div`
font-size: 40px;
fort-weight: 600;
color : ${({ theme }) => theme.text_primary};
line-height: 68px;
gap: 12px;
display: flex;
@media screen and (max-width: 960px){
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  display: flex;
  gap: 12px;
  line-height: 68px;

}
@media  screen and (max-width: 771px) {
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  display: flex;
  gap: 12px;
  line-height: 68px;

}
@media screen and (max-width: 640px){
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  gap: 12px;
  display: flex;
  line-height: 68px;

}
@media screen and (max-width: 640px){
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  display: flex;
  gap: 12px;
  line-height: 68px;
}
@media screen and (max-width: 401px){
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  display: flex;
  gap: 12px;
  line-height: 68px;
}

`;

const Subtitle = styled.div`
      font-size: 20px;
      color : ${({ theme }) => theme.text_primary + 95};
      line-height: 32px;
      margin-bottom: 42px;
      @media screen and (max-width: 960px){
        text-align: center;
      }
      @media screen and (max-width: 640px){
        font-size: 16px;
        line-height: 32 px;
      }
`;

const Span = styled.span`
      cursor: pointer;
      color : ${({ theme }) => theme.primary};   
`;
const About = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in', 
      once: true, 
    });
  }, []);
  return (
      <section className="about" id="about">
      <AboutContainer>
            <AboutBg>
            <Design/>
            </AboutBg>
                  <AboutInnerContainer>
                 
                        <AboutLeftContainer>
                        <div data-aos="fade-right">
                              <Title>Hi, I am <br />
                              {Bio.name}  
                              </Title>
                              <TextLoop>
                                    I am a
                                    <Span>
                                          <Typewriter options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                          }}/>
                                    </Span>
                              </TextLoop>
                              <Subtitle>{Bio.description}</Subtitle>
                              </div>
                              <a href="https://drive.google.com/file/d/1n1-LnbXjATvXGre2ij7ItiMwbzbf9vVe/view?usp=sharing">
                              <button className="button" type="button">
                              <span className="button__text">Download CV</span>
                              <span className="button__icon">
                              <svg
                               xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 35 35"
                              id="bdd05811-e15d-428c-bb53-8661459f9307"
                              data-name="Layer 2"
                             className="svg">
                              <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                             <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                            <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                           </svg>
                           </span>
                          </button>
                          </a>                       
                        </AboutLeftContainer>
                        <AboutRightContainer>
                        <div className="profileContainer">
                          <div className='boxcover'>
                        <img 
                         data-aos="fade-up-left"
                          data-aos-duration="1000"
                          className="profilePhoto aos-init aos-animate"
                          alt="My profile"
                          src={GUMAPAC} 
                          style={{
                            borderRadius: '30px', 
                            width: '400px',
                            height: '400px',
                            
                          }}
                            
                          />
                          </div>
                          </div>
                        </AboutRightContainer>
                       
                  </AboutInnerContainer>
                 
      </AboutContainer>
      
    </section>
    
  )
}

export default About