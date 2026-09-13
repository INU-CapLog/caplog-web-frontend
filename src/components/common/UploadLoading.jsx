import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function UploadLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 90) {
          clearInterval(timer);
          return 90;
        }
        return oldProgress + 5;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  return (
    <Overlay>
      <LoadingCard>
        <LoadingText>캡처 사진을 분석 중이에요.</LoadingText>

        <ProgressTrack>
          <ProgressFill $width={progress} />
        </ProgressTrack>
      </LoadingCard>
    </Overlay>
  );
}

// ----------- 스타일 -----------
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingCard = styled.div`
  background-color: #fff0dd;
  width: 320px;
  padding: 30px 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const LoadingText = styled.div`
  color: #7c2d12;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ffd1a1;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ $width }) => $width}%;
  background-color: #e26f0b;
  border-radius: 10px;
  transition: width 0.2s ease-out;
`;
