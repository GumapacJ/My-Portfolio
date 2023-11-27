import React, { useState } from 'react';
import { FaCertificate } from 'react-icons/fa6';
import '../css/certificate.css';
import '../css/App.css';

import GUMAPAC from '../image/GUMAPAC.png'
import HCIA from '../image/HCIA.png'
import math from '../image/math.png'
import msword from '../image/msword.png'
import Storage from '../image/storage.jpg'
import pythone from '../image/pythone.png'

const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };
 
  return (
    <section className="certificate" id="certificate">
      <h1 className="heading">
        My Certificates
      </h1>
      <div className="box-container">
        {/* Map through your certificates */}
        {[
          { image: HCIA, title: "HCIA-AI Course" },
          { image: math, title: "Math Basics" },
          { image: Storage, title: "Huawei Storage" },
          { image: pythone, title: "Huawei Storage" },
          { image: msword, title: "Huawei Storage" },
          { image: GUMAPAC, title: "Huawei Storage" },
        ].map((certificate, index) => (
          <div className="box" key={index}>
            <i className="cert" onClick={() => openModal(certificate.image)}><FaCertificate /></i>
            <h3>{certificate.title}</h3>
            <div className="images">
              <img className="imagess"
                src={certificate.image}
                alt=""
                width="300"
                height="200"
                onClick={() => openModal(certificate.image)}
              />
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div id="image-viewer" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Certificate" />
        </div>
      )}
    </section>
  );
};

export default Certificates;
