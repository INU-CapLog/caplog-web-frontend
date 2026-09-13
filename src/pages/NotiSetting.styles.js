import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  background-color: #fffbf6;
  box-sizing: border-box;
  overflow-y: auto;
  padding-bottom: 100px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  text-align: left;
  padding: 20px 0 0 0;
  margin-top: 10px;
`;

export const BackIcon = styled.img`
  width: 10px;
  margin-right: 14px;
  cursor: pointer;
`;

export const HeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #7c2d12;
`;

export const Desc = styled.p`
  margin: 0 0 50px 0;
  font-size: 12px;
  color: #6b7280;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const MenuBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #ffd1a1;
  border-radius: 8px;
  overflow: hidden;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  background-color: #ffffff;
  transition: background-color 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid #ffd1a1;
  }

  &:active {
    background-color: #f3f4f6;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-right: 16px;
`;

export const MenuLabel = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #7c2d12;
`;

export const MenuDesc = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: #6b7280;
  line-height: 1.4;
`;

export const ToggleWrapper = styled.div`
  width: 46px;
  height: 22px;
  border-radius: 14px;
  background-color: ${({ $isOn }) => ($isOn ? '#7C2D12' : '#D1D5DB')};
  position: relative;
  cursor: pointer;
  flex-shrink: 0;

  transition: background-color 0.3s ease-in-out;
`;

export const ToggleCircle = styled.div`
  width: 18px;
  height: 18px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ $isOn }) => ($isOn ? '25px' : '3px')};
  transition: left 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
