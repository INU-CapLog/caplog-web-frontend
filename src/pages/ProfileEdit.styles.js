import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  background-color: #fffbf6;
  box-sizing: border-box;
  overflow-y: auto;
  padding-bottom: 80px;
  /*   
  &::-webkit-scrollbar {
    display: none;
  } */
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  text-align: left;
  padding: 20px 0;
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

// export const ScrollArea = styled.div`
//   width: 90%;
//   flex: 1;
//   overflow-y: auto;
//   display: flex;
//   flex-direction: column;
//   gap: 40px;

//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const SectionTitle = styled.h3`
  color: #7c2d12;
  font-size: 14px;
  font-weight: 700;
  margin: 16px 0 8px 12px;
`;

export const SectionDesc = styled.p`
  margin: 0 0 16px 12px;
  font-size: 12px;
  color: #b55116;
`;

export const AvatarBox = styled.div`
  background-color: #fff0dd;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 50px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const AvatarImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  /* border: 0.5px solid #7c2d12; */
`;

export const CheckBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #ffffff;

  background-color: ${({ $isActive }) => ($isActive ? '#7c2d12' : '#FFFFFF')};
  border: ${({ $isActive }) => ($isActive ? 'none' : '1px solid #D1D5DB')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// ======= 닉네임 변경 =======
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff0dd;
  border-radius: 50px;
  padding: 10px 14px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 13px;
  color: #111827;
  background: transparent;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const ClearButton = styled.button`
  background-color: #ffffff;
  color: #fdba74;
  border: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 900;
  cursor: pointer;
  padding: 0;
`;

export const CharCount = styled.div`
  text-align: right;
  font-size: 11px;
  color: #7c2d12;
  margin-right: 12px;
  margin-top: 8px;
`;

export const SaveButton = styled.button`
  flex-shrink: 0;
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
