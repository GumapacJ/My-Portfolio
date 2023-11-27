import "../css/modal.css";
import '../css/skills.css';
import styled from 'styled-components';
import React, { useState } from "react";
import GUMAPAC from '../image/GUMAPAC.png';
import Mobile from '../image/mobile.png';
import Coding from '../image/coding.png';
import GRAPHIC from '../image/pen-tool.png';
import Webdesign from '../image/web-design.png';
import CSS from '../image/css2.png';
import HTML from '../image/html3.png';
import JAVASCRIPT from '../image/js.png';
import REACT from '../image/reactjs.png';
import JQUAERY from '../image/jquaery.png';
import Mysql from '../image/mysql1.png';
import CSHARP from '../image/c#.png';
import PHP from '../image/php.png';
import GITHUB from '../image/github1.png';
import AE from '../image/ae.png';
import PS from '../image/ps.png';
import ID from '../image/id.png';
import GIT from '../image/git2.png';
import FIGMA from '../image/figma1.png';



const Skill = styled.div`
top: -50px;
display: flex;
font-size:20px;
margin: 20px 190px;
justify-content: center;
position: relative;
padding: 10px 100px;
color:  white;
text-align: center;
@media screen and (max-width: 960px){
      margin: 0 -85px;
   }
   @media screen and (max-width: 640px){
      margin: 0 -55px;
 }
   `;

const Font = styled.div`

`;
const Aboutbottom = styled.div`
  
 
  
`;
export default function Skills() {
  const [modal, setModal] = useState(false);
  const [modal_responsive,  setModal_responsive] = useState(false);
  const [modal_web_design,  setModal_web_design] = useState(false);
  const [modal_graphic_design,  setModal_graphic_design] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleModal_reponsive = () => {
    setModal_responsive(!modal_responsive);
  };
  const toggleModal_web_design = () => {
    setModal_web_design(!modal_web_design);
  };
  const toggleModal_graphic_design= () => {
    setModal_graphic_design(!modal_graphic_design);
  };
  if(modal && modal_responsive && modal_web_design && modal_graphic_design) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  
  return (
    <>
    <Aboutbottom>
    <div className='provide'>
    <div className='what'> What I Can Provide?</div>
    <button onClick={toggleModal} className="btn-modal">
      <div  className='Front_end'>
        <div className='iconss'>
        <img src={Coding} alt="My Image"/>
        </div>
          <p className='texts'>Front-End Developer</p>
       
      </div>
      </button>
      <button onClick={toggleModal_reponsive  } className="btn-modal">
      <div className='responsive'>
        <div className='iconss'>
        <img src={Mobile} alt="My Image"/>
        </div>
          <p className='texts'>Responsive Design</p>
      </div>
      </button>
      <button onClick={toggleModal_web_design} className="btn-modal">
      <div className='web_design'>
        <div className='iconss'>
        <img src={Webdesign} alt="My Image"/>
        </div>
          <p  className='texts'>Website Design</p>
      </div>
      </button>
      <button onClick={toggleModal_graphic_design} className="btn-modal">
      <div className='graphic_design'>
        <div className='iconss'>
        <img src={GRAPHIC} alt="My Image"/>
        </div>
          <p className='texts'>Graphic Design</p>
      </div>
      </button>
    </div>


    <section className="skills" id="skills">
      <h1 className="heading"> My Skills</h1>
      
      <Skill>  I have acquired knowledge in various technology stacks during my my studies
      in Front-End development. Currently, I am focusing on mastering the ReactJS, Which will greatly enhance 
      my skills in creating user interfaces and improving user experience </Skill>
    
      <div className="skillset">
        <h1 className='front'>Front-end</h1>
        <div className='skillsbox_front'> 
        <img className="side_images"  src={CSS} alt="" />
        <img  className="side_images"  src={HTML} alt=""/>     
        <img   className="side_images"  src={JAVASCRIPT} alt=""/>    
        <img  className="side_images" src={REACT} alt=""/>  
        <img className="side_images"  src={JQUAERY} alt=""/>   
        </div>  
        <h1 className='front_back'>Back-end</h1>
        <div className='skillsbox_back'> 
        <img className="side_images"  src={Mysql} alt="" /> 
        <img   className="side_images"  src={CSHARP} alt=""/>    
        <img   className="side_images"  src={PHP} alt=""/> 
        </div>  
        <h1 className='font_others'>Others</h1>
        <div className='skillsbox_others'> 
        <img className="side_images"  src={GITHUB} alt="" /> 
        <img   className="side_images"  src={AE} alt=""/>    
        <img   className="side_images"  src={ID} alt=""/> 
        <img   className="side_images"  src={PS} alt=""/> 
        <img   className="side_images"  src={GIT} alt=""/> 
        <img   className="side_images"  src={FIGMA} alt=""/> 
        </div>  
        </div>
    </section>
    </Aboutbottom>
    
    {modal && (
  <div className="modal">
    <div className="overlay" onClick={toggleModal}></div>
    <div className="modal-content">
      <div className="modal-header">
      <button
     type="button " rippleColor="light"
      className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      onClick={toggleModal}
       aria-label="Close"
  style={{
    position: 'absolute',
    top: '10px',
    right: '10px',
    height: '20px',
    width: '20px',
  }}
>
<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon">
  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
        </button>
        <h4 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
          Front-End Developer
        </h4>
      </div>
      <div className="modal-body">
        <p className="text-neutral-600 dark:text-neutral-300"
           style={{
          paddingBottom: '16px',
          paddingTop: '16px',
        }}>
          As an experienced front-end developer, I specialize in HTML, CSS, jQuery, and ReactJS. I create visually appealing and user-friendly websites with seamless navigation and optimal performance.
        </p>
      </div>
      <div className="modal-footer">
        <p
         
          onClick={toggleModal}
          style={{
            cursor:"pointer",
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            height: '20px',
            width: '40px',
            margin:'4px',
          }}
        >
        Close
        </p>
      </div>
    </div>
  </div>
)}
 {modal_responsive && (
  <div className="modal">
    <div className="overlay" onClick={toggleModal_reponsive}></div>
    <div className="modal-content">
      <div className="modal-header">
      <button
     type="button " rippleColor="light"
      className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      onClick={toggleModal_reponsive}
       aria-label="Close"
  style={{
    position: 'absolute',
    top: '10px',
    right: '10px',
    height: '20px',
    width: '20px',
  }}
>
<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon">
  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
        </button>
        <h4 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
          Responsive Design
        </h4>
      </div>
      <div className="modal-body">
        <p className="text-neutral-600 dark:text-neutral-300"
           style={{
          paddingBottom: '16px',
          paddingTop: '16px',
        }}>
I create responsive websites that seamlessly adapt to all devices and screen sizes, ensuring a user-friendly experience. With fluid layouts and optimized code, your website will look great and function flawlessly on any platform.        </p>
      </div>
      <div className="modal-footer">
        <p
         
          onClick={toggleModal_reponsive}
          style={{
            cursor:"pointer",
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            height: '20px',
            width: '40px',
            margin:'4px',
          }}
        >
        Close
        </p>
      </div>
    </div>
  </div>
)}
 {modal_web_design&& (
  <div className="modal">
    <div className="overlay" onClick={toggleModal_web_design}></div>
    <div className="modal-content">
      <div className="modal-header">
      <button
     type="button " rippleColor="light"
      className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      onClick={toggleModal_web_design}
       aria-label="Close"
  style={{
    position: 'absolute',
    top: '10px',
    right: '10px',
    height: '20px',
    width: '20px',
  }}
>
<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon">
  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
        </button>
        <h4 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
          Web Design
        </h4>
      </div>
      <div className="modal-body">
        <p className="text-neutral-600 dark:text-neutral-300"
           style={{
          paddingBottom: '16px',
          paddingTop: '16px',
        }}>
I create responsive websites that seamlessly adapt to all devices and screen sizes, ensuring a user-friendly experience. With fluid layouts and optimized code, your website will look great and function flawlessly on any platform.        </p>
      </div>
      <div className="modal-footer">
        <p
         
          onClick={toggleModal_web_design}
          style={{
            cursor:"pointer",
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            height: '20px',
            width: '40px',
            margin:'4px',
          }}
        >
        Close
        </p>
      </div>
    </div>
  </div>
)}
{modal_graphic_design && (
  <div className="modal">
    <div className="overlay" onClick={toggleModal_graphic_design}></div>
    <div className="modal-content">
      <div className="modal-header">
      <button
     type="button " rippleColor="light"
      className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      onClick={toggleModal_graphic_design}
       aria-label="Close"
  style={{
    position: 'absolute',
    top: '10px',
    right: '10px',
    height: '20px',
    width: '20px',
  }}
>
<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon">
  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
        </button>
        <h4 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
          Graphic Design
        </h4>
      </div>
      <div className="modal-body">
        <p className="text-neutral-600 dark:text-neutral-300"
           style={{
          paddingBottom: '16px',
          paddingTop: '16px',
        }}>
 with a strong proficiency in Adobe Photoshop and Adobe InDesign. In Photoshop, I specialize in image manipulation, retouching, and digital illustration, enabling me to create stunning visuals and graphics. In Adobe InDesign, I excel in page layout, typography, and print design, allowing me to craft engaging and well-structured publications, such as brochures, magazines, and books. </p>
      </div>
      <div className="modal-footer">
        <p
         
          onClick={toggleModal_graphic_design}
          style={{
            cursor:"pointer",
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            height: '20px',
            width: '40px',
            margin:'4px',
          }}
        >
        Close
        </p>
      </div>
    </div>
  </div>
)}

    </>
  );
}


