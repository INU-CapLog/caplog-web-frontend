import * as S from './Login.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

export default function Signup() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  /** 회원가입 API */
  const handleSignupSubmit = async () => {
    // 빈칸 검사
    if (!userName || !password || !passwordConfirm) {
      setErrorMessage('모든 항목을 입력해주세요.');
      return;
    }

    // 닉네임 형식 검사
    if (userName.length > 20) {
      setErrorMessage('닉네임은 20자 이내로 입력해주세요.');
      return;
    }

    // 비밀번호 형식 검사
    const passwordRegex = /^\d{4}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('비밀번호는 숫자 4자리로 입력해주세요.');
      return;
    }

    // 비밀번호 확인 검사
    if (password !== passwordConfirm) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    setErrorMessage('');

    try {
      const data = await signup(userName, password);
      if (data.isSuccess) {
        alert('회원가입이 완료되었습니다!');
        navigate('/login');
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        '서버와 통신할 수 없습니다. 다시 시도해주세요.';
      setErrorMessage(errorMsg);
    }
  };

  return (
    <S.Container>
      <h2 style={{ color: '#7C2D12', marginBottom: '0' }}>회원가입</h2>
      <S.InputWrapper>
        <S.Label>닉네임</S.Label>
        <S.Input
          style={{ marginBottom: '30px' }}
          type="text"
          placeholder="한/영 20자 이내"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <S.Label>비밀번호</S.Label>
        <S.Input
          style={{ marginBottom: '30px' }}
          type="password"
          placeholder="숫자 4자리"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <S.Label>비밀번호 확인</S.Label>
        <S.Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </S.InputWrapper>

      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>

      <S.LoginButton onClick={handleSignupSubmit}>회원가입</S.LoginButton>
    </S.Container>
  );
}
