import styled from 'styled-components';

export const Nav = styled.nav`
   background: transparent;
   height: 75px;
   display: flex;
   justify-content: space-between;
   padding: 0 280px;
   width: 100%;
   align-items: center;
   top: -15px;
   font-size: 1rem;
   position: fixed;
   left: 0px;
   z-index: 50;
  
   @media screen and (max-width: 960px) {
       transition: all 4s
   }
`;

export const NavLogo = styled.nav`
   background: transparent;
   height: 40px;
   display: flex;
   padding: 0 0px;
   width: 15%;
   align-items: center;
   top: 12px;
   font-size: 1rem;
   position: fixed;
   left: -4px;
   z-index: 60;
  
   @media screen and (max-width: 960px) {
       transition: all 4s
   }
`;

export const NavProfile = styled.nav`
    background: transparent;
    height: 40px;
    display: flex;
    padding: 0 0px;
    width: 15%;
    align-items: center;
    top: 10px;
    font-size: 1rem;
    position: fixed;
    left: 1420px;
    z-index: 60;
  
   @media screen and (max-width: 960px) {
       transition: all 4s
   }
`;