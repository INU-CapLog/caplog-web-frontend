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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10vh;
`;

export const Label = styled.label`
  width: 70%;
  text-align: left;
  color: #b55116;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  color: #fdba74;
  width: 80%;
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #fdba74;
  border-radius: 50px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 15px;

  &::placeholder {
    color: #d48e76;
    opacity: 0.8;
  }
`;

export const ErrorMessage = styled.div`
  color: #ef4444;
  width: 80%;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
  opacity: ${(props) => (props.children ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

export const LoginButton = styled.button`
  color: #fff0dd;
  font-weight: 700;
  font-size: 14px;
  background-color: #b55116;
  width: 80%;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
`;

export const Divider = styled.div`
  width: 80%;
  height: 2px;
  background-color: #fdba74;
  margin: 24px 0;
`;

export const SignupWrapper = styled.div`
  font-size: 14px;
  color: #b55116;
  text-align: center;
`;

export const SignupText = styled.span`
  color: #b55116;
  font-weight: 700;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
