import styled from 'styled-components';

export const SheetContainer = styled.div`
  padding: 16px 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 12px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #7c2d12;
  margin: 0;
`;

export const SubTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #b55116;
  margin-bottom: 2px;
`;

export const WarningBox = styled.div`
  background-color: #fff0dd;
  color: #b55116;
  border-radius: 50px;
  padding: 8px 18px;
  font-size: 10px;
  font-weight: 500;
  margin: 6px 0;
  display: flex;
  gap: 8px;
  line-height: 1.5;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #b55116;
  margin-left: 12px;
`;

export const SubLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #b55116;
  margin-left: 12px;

  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #fdba74;
  border-radius: 12px;
  font-size: 12px;
  color: #b55116;
  outline: none;
  box-sizing: border-box;

  &:disabled {
    background-color: #f3f4f6;
    color: #9ca3af;
  }
`;

export const ScheduleRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 18px;
`;

export const CheckboxWrapper = styled.div`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  background-color: ${({ $isChecked }) => ($isChecked ? '#7C2D12' : '#FFFFFF')};
  border: 1px solid ${({ $isChecked }) => ($isChecked ? '#7C2D12' : '#D1D5DB')};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;
`;

export const DetailBox = styled.div`
  border: 1px solid #7c2d12;
  border-radius: 8px;
  padding: 14px;
  font-size: 13px;
  line-height: 1.5;
  color: #111827;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    margin: 0;
  }
  strong {
    font-weight: 600;
  }
`;

export const SummaryBox = styled(DetailBox)`
  gap: 0;
`;

export const SelectRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #fdba74;
  border-radius: 8px;
  font-size: 12px;
  color: #b55116;
  background-color: #ffffff;
  outline: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 10px;
  background-color: #fff0dd;
  color: #b55116;
  border: none;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 10px;
  background-color: #b55116;
  color: #fff0dd;
  border: none;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 14px;
  border: 1px solid #fdba74;
  border-radius: 12px;
  font-size: 12px;
  line-height: 1.4;
  color: #b55116;
  background-color: #ffffff;
  outline: none;
  box-sizing: border-box;
  resize: none;
  font-family: inherit;
`;

// ================= 모달 스타일 =================
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const ModalBox = styled.div`
  background-color: #fff0dd;
  width: 320px;
  border-radius: 12px;
  padding: 32px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #7c2d12;
`;

export const ModalDesc = styled.p`
  margin: 0 0 32px 0;
  font-size: 14px;
  color: #7c2d12;
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  width: 80%;
  gap: 14px;
`;

export const ModalNoButton = styled.button`
  flex: 1;
  padding: 12px;
  background-color: #ffffff;
  color: #7c2d12;
  border: none;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`;

export const ModalYesButton = styled.button`
  flex: 1;
  padding: 12px;
  background-color: #b55116;
  color: #fff0dd;
  border: none;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`;
