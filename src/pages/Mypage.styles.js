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
  width: 90%;
  box-sizing: border-box;
  padding: 24px;
  margin-top: 24px;
  color: #7c2d12;
  font-size: 16px;
  font-weight: 800;
  text-align: left;
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100px;
  box-sizing: border-box;
  background-color: #FFD1A1;
  border-radius: 16px;
  padding: 24px;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileText = styled.div`
  margin-left: 16px;
  color: #7c2d12;
  font-size: 14px;
  font-weight: 700;
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #fdba74;
  margin: 22px 0;
  flex-shrink: 0;
`;

// ======= 통계 =======
export const StatWrapper = styled.div`
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: #7c2d12;
  margin-left: 12px;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
`;

export const StatCard = styled.div`
  flex: 1;
  background-color: #fff0dd;
  border-radius: 18px;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #7c2d12;
`;

export const CardValue = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #7c2d12;
`;

// ========= 메뉴 =========
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const MenuTitle = styled.h3`
  margin: 32px 0 10px 0;
  font-size: 15px;
  font-weight: 600;
  color: #7c2d12;
  margin-left: 12px;
`;

export const MenuBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #fdba74;
  border-radius: 10px;
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
    border-bottom: 1px solid #fdba74;
  }

  &:active {
    background-color: #f3f4f6;
  }
`;

export const MenuLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #7c2d12;
`;

export const MenuArrow = styled.span`
  font-size: 15px;
  color: #9ca3af;
  font-weight: 600;
`;
