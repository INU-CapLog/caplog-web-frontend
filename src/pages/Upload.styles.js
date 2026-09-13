import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  padding-bottom: 80px;
  background-color: #ffffff;
  box-sizing: border-box;
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

export const UploadBox = styled.div`
  width: 90%;
  aspect-ratio: 4 / 3;
  background-color: #fff0dd;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 3vh 0;
  overflow: hidden;

  transition: transform 0.1s ease-in-out;
  &:active {
    transform: scale(0.98);
  }
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.p`
  color: #b55116;
  font-size: 14px;
  font-weight: 400;
`;

export const SubmitButton = styled.button`
  width: 70%;
  height: 40px;
  color: #b55116;
  margin-top: auto;
  background-color: ${({ disabled }) => (disabled ? '#E5E7EB' : '#B55116')};
  color: ${({ disabled }) => (disabled ? '#9CA3AF' : '#FFF0DD')};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;

  &:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(2px)')};
  }
`;
