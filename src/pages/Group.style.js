import styled from 'styled-components';

export const GroupContainer = styled.div`
  position: relative;

  height: 100dvh;
  overflow-y: auto;

  width: 100%;
  padding: 0 16px 40px 16px;
  box-sizing: border-box;

  background-color: #fffbf6;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GroupHeader = styled.div`
  display: flex;
  align-items: center;

  padding-top: 30px;
  margin-bottom: 34px;
`;

export const BackButton = styled.button`
  width: 32px;
  height: 32px;

  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 14px;
    height: 24px;
  }
`;

export const GroupInfoBox = styled.div`
  position: relative;

  width: 100%;
  min-height: 126px;

  padding: 16px 18px;
  box-sizing: border-box;

  background-color: #ffd1a1;
  border-radius: 16px;

  margin-bottom: 24px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
`;

export const SpringRow = styled.div`
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 0 16px;
  box-sizing: border-box;
  pointer-events: none;
`;

export const Spring = styled.span`
  width: 8px;
  height: 17px;

  border-radius: 999px;

  background-color: #b55116;

  flex-shrink: 0;
`;

export const InfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 26px;

  border-radius: 20px;
  background-color: #fff0dd;

  color: #b55116;
  font-size: 10px;
  font-weight: 600;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconButton = styled.button`
  width: 28px;
  height: 28px;

  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const GroupTitle = styled.h2`
  color: #7c2d12;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 0;
`;

export const GroupCount = styled.p`
  color: #7c2d12;
  font-size: 12px;
  font-weight: medium;
  margin-top: 8px;
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const Card = styled.button`
  position: relative;

  min-width: 0;

  padding: 20px 14px 14px;
  box-sizing: border-box;

  border-radius: 15px;
  background-color: #fff0dd;

  cursor: pointer;
  border: none;
`;

export const NewBadge = styled.span`
  position: absolute;

  top: 8px;
  left: 14px;

  padding: 2px 6px;

  border-radius: 20px;
  background-color: #f03232;

  color: #ffffff;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;
`;

export const CardTitle = styled.p`
  margin: 3px 0 18px;

  color: #7c2d12;
  font-size: 11.5px;
  font-weight: 600;

  line-height: 1.4;
`;

export const CardImage = styled.img`
  display: block;

  width: 100%;
  height: 205px;

  border-radius: 12px;
  object-fit: cover;

  background-color: #ffffff;
`;

// 수정 팝업
export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.55);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

export const ModifyPopup = styled.div`
  position: absolute;

  width: 290px;
  min-height: 266px;

  background-color: #fff0dd;
  border-radius: 15px;

  box-sizing: border-box;

  z-index: 101;
`;

export const ModifyHeader = styled.div`
  padding: 24px 22px 0;

  h2 {
    margin: 0;

    font-size: 16px;
    font-weight: semibold;
    color: #7c2d12;
  }
`;

export const InputBox = styled.div`
  padding: 20px 22px 0;

  p {
    margin: 0 0 8px;
    padding-left: 10px;

    font-size: 11px;
    font-weight: medium;
    color: #b55116;
  }

  input,
  select {
    width: 100%;
    height: 42px;

    box-sizing: border-box;

    border: none;
    border-radius: 25px;

    background-color: #ffffff;

    padding: 0 12px;

    font-size: 10px;
    color: #b55116;

    outline: none;
  }

  select {
    cursor: pointer;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 11px;

  padding: 18px 22px;
  margin-top: 20px;
`;

export const CancelButton = styled.button`
  width: 78px;
  height: 32px;

  border: none;
  border-radius: 20px;

  background-color: #ffffff;
  color: #7c2d12;

  font-size: 11px;
  cursor: pointer;
`;

export const ModifyButton = styled.button`
  width: 78px;
  height: 32px;

  border: none;
  border-radius: 20px;

  background-color: #b55116;
  color: #fff0dd;

  font-size: 11px;
  cursor: pointer;
`;

// 삭제 팝업
export const DeleteOverlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

export const DeletePopup = styled.div`
  width: 290px;
  height: 165px;

  box-sizing: border-box;
  padding: 28px 24px 20px;

  background-color: #fff0dd;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 101;
`;

export const DeleteTitle = styled.h2`
  margin: 0;

  color: #7c2d12;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
`;

export const DeleteText = styled.p`
  color: #7c2d12;
  font-size: 11px;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
`;

export const DeleteButtonBox = styled.div`
  display: flex;
  gap: 12px;

  margin-top: auto;
`;

export const DeleteButton = styled.button`
  width: 78px;
  height: 32px;

  border: none;
  border-radius: 20px;

  background-color: #b55116;
  color: #fff0dd;

  font-size: 11px;
  cursor: pointer;
`;
