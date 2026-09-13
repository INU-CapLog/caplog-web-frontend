import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 75%;
  max-width: 322px;
  height: 42px;
  padding: 0 8px;

  background-color: #fff3e3;
  border-radius: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  z-index: 999;
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;
  border-radius: 24px;
  cursor: pointer;

  background-color: ${({ $isActive }) => ($isActive ? '#FFDFB7' : 'transparent')};
  transition: background-color 0.2s ease-in-out;

  svg {
    width: 28px;
    height: 28px;
    /* stroke: ${({ $isActive }) => ($isActive ? '#D97706' : '#F59E0B')}; */
  }
`;
