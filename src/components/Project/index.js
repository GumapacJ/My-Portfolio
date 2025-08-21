import styled from 'styled-components';
import "../css/Project.css";
import Icare from '../image/icares.png';
import PS from '../image/dtr.png';
import ID from '../image/neda.png';
import lbsims from '../image/lbsims.png';
import wedding from '../image/wedding.png';
function Project() {
      return (
      <section className="project" id="project">
      <h1 className="heading"> My Project</h1>
      <div className='container_card'>
         <div className='cardss'>
            <div className='imgbx'>
            <img src={ID}/>
            </div>
              <div className='contents'>
                <h3>Assignment Tracking Performance Evaluation And Information System</h3>
                <p>This system aims to create an easy-to-use 
                    tracking system with performance evaluation, a 
                    LAN-based information system where NEDA XI 
                    staff can check and track incoming and outgoing 
                    documents and perform staff evaluations to 
                    determine whether they are being processed or 
                    completed. This study is to develop a LAN-based 
                    information system that will help the NEDA-XI 
                    employees be more productive and able to work 
                    efficiently within the organization.
                  </p>
                  <div className='technology'>
                 <p><span>Technology: </span>Php, Mysql, HTML and Css</p>
                 </div>
              </div>
         </div>
         <div className='cardss'>
            <div className='imgbx'>
            <img src={PS}/>
            </div>
              <div className='contents'>
              <h3>Design and Development of the Barcode Daily Time Record System for RHU - Nabunturan Health Center Employees</h3>
                <p>The main purpose of the project is to design 
                  and develop a Barcode Daily Time Record 
                  RHU - Nabunturan Health Center Employees.
                   The Study is to provide quality and genuine 
                  service involving the employee's personal 
                  information to create a system that design and develop
                  barcode Daily Time Record. It may solve 
                  related issues according to the data gathered from the establishment.
                 </p>
                
                 <div className='technology'>
                 <p><span >Technology: </span>C#, Mysql</p>
                 </div>
              </div>
         </div>
         <div className='cardss'>
            <div className='imgbx'>
            <img src={Icare}/>
            </div>
              <div className='contents'>
              <h3>iCare</h3>
                <p>
                 
                ICARE is a dynamic application that offers up-to-the-minute information on COVID-19 symptoms, 
                prevention strategies, and travel guidance, while also keeping users informed about the latest 
                government initiatives and conferences. As a pivotal tool during this historic pandemic, ICARE 
                not only disseminates essential information but also encourages active participation, making it a 
                catalyst for collective solutions.
                 </p>
                
                 <div className='technology'>
                 <p><span>Technology: </span>Figma</p>
                <a
      href="https://www.figma.com/file/HdnsVxaEmHaVkhEE3MZBQz/Icare?type=design&node-id=0-1&mode=design&t=TfUDI7fUVBEO0R3x-0"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition duration-200"
    >
      View
    </a>
                 </div>
              </div>
         </div>
           <div className='cardss'>
            <div className='imgbx'>
            <img src={lbsims}/>
            </div>
              <div className='contents'>
              <h3>Design and Development of the Barcode Daily Time Record System for RHU - Nabunturan Health Center Employees</h3>
                <p>The main purpose of the project is to design 
                  and develop a Barcode Daily Time Record 
                  RHU - Nabunturan Health Center Employees.
                   The Study is to provide quality and genuine 
                  service involving the employee's personal 
                  information to create a system that design and develop
                  barcode Daily Time Record. It may solve 
                  related issues according to the data gathered from the establishment.
                  
                 </p>
                
                 <div className='technology'>
                 <p><span >Technology: </span>Laravel, Tailwindcss, Javascript, Mysql</p>
                 </div>
              </div>
         </div>

            <div className='cardss'>
            <div className='imgbx'>
            <img src={wedding}/>
            </div>
              <div className='contents'>
              <h3>Wedding Invitation</h3>
                <p>Our Wedding 
                 </p>
                
                 <div className='technology'>
                 <p><span >Technology: </span>Laravel, TailwindCss, Javascipt</p>
                  <a
      href="https://www.figma.com/file/HdnsVxaEmHaVkhEE3MZBQz/Icare?type=design&node-id=0-1&mode=design&t=TfUDI7fUVBEO0R3x-0"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition duration-200"
    >
      View
    </a>
                 </div>
              </div>
         </div>
      </div>
        </section>
          );
    }
    
    export default Project;