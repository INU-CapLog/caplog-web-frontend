import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background-color: #fffbf6;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 5vh;
`;

export const SectionTitle = styled.h2`
  color: #b55116;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

export const Description = styled.p`
  color: #b55116;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const InfoCard = styled.div`
  background-color: #fff0dd;
  border-radius: 16px;
  padding: 14px 18px 6px 18px;
  margin-bottom: 18px;
`;

export const StartButton = styled.button`
  color: #fff0dd;
  font-size: 14px;
  font-weight: 700;
  background-color: #b55116;
  width: 85%;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
`;
