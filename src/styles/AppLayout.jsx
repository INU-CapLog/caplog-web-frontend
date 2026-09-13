import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';

const AppLayout = () => {
  return (
    <Background>
      <MobileContainer>
        <ContentScrollArea>
          <Outlet />
        </ContentScrollArea>
      </MobileContainer>
      <BottomNav />
    </Background>
  );
};

export default AppLayout;

// 바깥쪽 영역
const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  background-color: #f0f0f5;
`;

// 실제 모바일 화면 영역
const MobileContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  height: 100dvh;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

// 스크롤 영역
const ContentScrollArea = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 100px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
