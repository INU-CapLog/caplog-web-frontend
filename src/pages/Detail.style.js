import styled from 'styled-components';

export const DetailContainer = styled.div`
  width: 100%;
  height: 100dvh;
  overflow-y: auto;

  position: relative;

  display: flex;
  flex-direction: column;

  background-color: #ffffff;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageSection = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 50dvh;
`;

export const Header = styled.div`
  position: absolute;
  top: 24px;
  left: 20px;

  z-index: 2;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;
  padding: 0;

  cursor: pointer;

  img {
    width: 14px;
    height: 24px;
    display: block;
  }
`;

export const ImageButton = styled.button`
  width: 100%;
  height: 100%;

  border: none;
  background-color: #eeeeee;
  padding: 0;

  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    display: block;
    object-fit: cover;
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  min-height: 50dvh;
  height: auto;

  box-sizing: border-box;
  padding: 24px 20px 30px;

  background-color: #fff0dd;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;
`;

export const Title = styled.h2`
  margin: 0;

  color: #7c2d12;

  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
`;

export const Dday = styled.div`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 54px;
  height: 30px;

  padding: 0 10px;

  border-radius: 16px;

  background-color: #b55116;
  color: #fff0dd;

  font-size: 12px;
  font-weight: 600;
`;

export const Divider = styled.hr`
  width: 100%;

  margin: 22px 0 18px;

  border: none;
  border-top: 3px solid #fdba74;
`;

export const SummaryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryTitle = styled.p`
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  color: #7c2d12;
  font-size: 16px;
  font-weight: 600;

  img {
    display: block;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  padding: 0;

  cursor: pointer;

  img {
    width: 18px;
    height: 18px;

    display: block;
  }
`;

export const DetailContentBox = styled.div`
  margin-top: 20px;

  color: #7c2d12;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;

  p {
    margin: 0;
  }

  p + p {
    margin-top: 18px;
  }
`;

export const SummaryBox = styled.div`
  margin-top: 20px;

  color: #7c2d12;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;

  p {
    margin: 0;
  }

  p + p {
    margin-top: 18px;
  }
`;

/* =========================
   사진 전체보기 팝업
========================= */

export const FullScreenOverlay = styled.div`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);

  z-index: 1000;

  display: flex;
  flex-direction: column;
`;

export const FullScreenHeader = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  z-index: 1001;
`;

export const FullScreenImageBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const FullScreenImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
  display: block;
`;

/* =========================
   수정 팝업 뒷배경
========================= */

export const PopupOverlay = styled.div`
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.55);

  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

/* =========================
   수정 팝업
========================= */

export const ModifyPopup = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: calc(100% - 48px);
  max-width: 340px;
  max-height: 88%;

  overflow-y: auto;

  box-sizing: border-box;

  padding: 30px 20px 20px;

  background: white;

  border-radius: 8px;

  z-index: 101;

  color:

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PopupTitle = styled.h2`
  margin: 0 0 28px;

  font-size: 16px;
  font-weight: 700;
  color: #7c2d12;
`;

/* =========================
   공통 입력 영역
========================= */

export const FormGroup = styled.div`
  position: relative;

  margin-bottom: 20px;
`;

export const Label = styled.p`
  margin: 0 0 7px;

  font-size: 12px;
  font-weight: 600;
  color: #b55116;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 42px;

  box-sizing: border-box;

  padding: 0 12px;

  border: 1px solid #fdba74;
  border-radius: 12px;

  background: white;

  font-size: 12px;
  color: #b55116;

  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 105px;

  box-sizing: border-box;

  padding: 12px;

  border: 1px solid #fdba74;
  border-radius: 12px;

  font-family: inherit;
  font-size: 12px;
  color: #b55116;
  line-height: 1.5;

  resize: none;

  outline: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* =========================
   일정
========================= */

export const ScheduleRow = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  width: 100%;
`;

export const CheckBox = styled.input`
  appearance: none;

  width: 34px;
  height: 34px;

  flex-shrink: 0;

  margin: 0;

  border: 1px solid #d1d5db;
  border-radius: 8px;

  background: #ffffff;

  cursor: pointer;

  &:checked {
    background: #7c2d12;
  }

  &:checked::after {
    content: '✓';

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    color: white;

    font-size: 18px;
    font-weight: 500;
  }
`;

export const DateTimeInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 42px;

  box-sizing: border-box;
  padding: 0 10px;

  border: 1px solid #fdba74;
  border-radius: 12px;

  background: white;
  font-size: 12px;
  color: #b55116;

  outline: none;

  &:disabled {
    background: #f3f4f6;
    color: #9ca3af;
    cursor: default;
  }
`;

/* =========================
   저장 위치
========================= */

export const SaveSection = styled.div`
  margin-top: 26px;
`;

export const SaveTitle = styled.p`
  margin: 0 0 12px;

  font-size: 16px;
  font-weight: 700;
  color: #7c2d12;
`;

export const SelectRow = styled.div`
  display: flex;

  gap: 16px;
`;

export const SelectBox = styled.div`
  flex: 1;

  min-width: 0;
`;

export const Select = styled.select`
  width: 100%;
  height: 42px;

  box-sizing: border-box;

  padding: 0 10px;

  border: 1px solid #fdba74;
  border-radius: 8px;

  background: white;

  color: #b55116;

  font-size: 12px;

  outline: none;
`;

/* =========================
   수정 팝업 하단
========================= */

export const Line = styled.hr`
  margin: 28px -20px 18px;

  border: none;
`;

export const ButtonRow = styled.div`
  display: flex;

  gap: 12px;
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 10px;

  border: none;
  border-radius: 20px;

  background: #fff0dd;
  color: #b55116;

  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

export const ModifyButton = styled.button`
  flex: 1;
  padding: 10px;

  border: none;
  border-radius: 20px;

  background: #b55116;
  color: #fff0dd;

  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

/* =========================
   삭제 팝업
========================= */

export const DeletePopupOverlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
`;

export const DeletePopup = styled.div`
  width: 290px;
  height: 165px;

  box-sizing: border-box;

  background-color: #fff0dd;

  border-radius: 15px;

  padding: 24px 20px 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeletePopupTitle = styled.h2`
  margin: 0;

  color: #7c2d12;

  font-size: 16px;
  font-weight: 600;
`;

export const PopupDescription = styled.p`
  width: 240px;

  color: #7c2d12;

  font-size: 11px;
  font-weight: 400;
  line-height: 1.6;

  text-align: center;
`;

export const PopupButtonBox = styled.div`
  margin-top: auto;

  display: flex;

  gap: 12px;
`;

export const DeleteCancelButton = styled.button`
  width: 74px;
  height: 33px;

  border: none;
  border-radius: 20px;

  background-color: #ffffff;

  color: #7c2d12;

  font-size: 11px;

  cursor: pointer;
`;

export const DeleteButton = styled.button`
  width: 74px;
  height: 33px;

  border: none;
  border-radius: 20px;

  background-color: #b55116;

  color: #fff0dd;

  font-size: 11px;

  cursor: pointer;
`;
