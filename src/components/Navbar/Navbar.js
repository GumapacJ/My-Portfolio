import React, { useState } from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems,  MobileIcon, MobileMenu,  MobileLink } from './NavbarStyledComponent'
import { Link as LinkR } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { Spin as Hamburger } from 'hamburger-react';
import { DiCssdeck } from 'react-icons/di';

const Navbar = () => {
      const [isOpen, setIsOpen] = React.useState(false);
      const theme = useTheme()
return (
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                marginTop: '15px',
                cursor: 'pointer',
              }}
            >
              <DiCssdeck size="3rem" />
              <Span>Portfolio</Span>
            </a>
          </NavLogo>
          <MobileIcon>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </MobileIcon>
          <NavItems>
            <NavLink href="#about">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#certificate">Certificate</NavLink>
            <NavLink href="#project">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavItems>
          {
            isOpen &&
            <MobileMenu isOpen={isOpen}>
              <MobileLink href="#about" onClick={() => {
                setIsOpen(!isOpen)
              }}>About</MobileLink>
               <MobileLink href='#skills' onClick={() => {
                setIsOpen(!isOpen)
              }}>Skills</MobileLink>
                <MobileLink href='#education' onClick={() => {
                setIsOpen(!isOpen)
              }}>Education</MobileLink>
               <MobileLink href='#certificate' onClick={() => {
                setIsOpen(!isOpen)
              }}>Certificate</MobileLink>
               <MobileLink href='#project' onClick={() => {
                setIsOpen(!isOpen)
              }}>Projects</MobileLink>
               <MobileLink href='#contact' onClick={() => {
                setIsOpen(!isOpen)
              }}>Contact</MobileLink>
            </MobileMenu>
          }
        </NavbarContainer>
       
      </Nav>
    );
  };
  
  export default Navbar;