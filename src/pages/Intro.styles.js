import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: ${({ $activeIndex }) => ($activeIndex === 0 ? '#FFF0DD' : '#FFFBF6')};
  transition: background-color 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 100px;
`;

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 60px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #7c2d12;
  white-space: pre-wrap;
  line-height: 1.6;
  margin: 0 0 16px 0;
`;

export const Desc = styled.p`
  font-size: 13px;
  color: #b55116;
  white-space: pre-wrap;
  line-height: 1.6;
  margin: 0 0 26px 0;
`;

export const MockupImage = styled.div`
  width: 80%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 40px;
  width: 100%;
  padding: 0 24px;
  z-index: 10;
`;

export const SubmitButton = styled.button`
  color: #fff0dd;
  font-weight: 700;
  font-size: 14px;
  background-color: #b55116;
  width: 70%;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;

  &:active {
    transform: scale(0.98);
  }
`;

export const PaginationWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;

  .custom-pagination {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: #fff0dd;
    opacity: 1;
    margin: 0 !important;
  }

  .swiper-pagination-bullet-active {
    background-color: #b55116;
  }
`;
