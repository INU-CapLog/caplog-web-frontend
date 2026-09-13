import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ProfileEdit.styles';
import LeftArrowIcon from '../assets/icons/LeftArrow.svg';
import { getUserInfo, getProfileUrl, putUserInfo } from '../api/user';

export default function ProfileEdit() {
  const navigate = useNavigate();

  const [avatarList, setAvatarList] = useState([]); // 서버에서 받아올 아바타 배열
  const [selectedAvatar, setSelectedAvatar] = useState(''); // 선택된 아바타 타입
  const [nickname, setNickname] = useState(''); // 입력된 닉네임

  useEffect(() => {
    /** 사용자 프로필 정보 & 프로필 사진 URL 조회 API */
    const fetchInitialData = async () => {
      try {
        // 두 API 동시에 호출
        const [userRes, avatarRes] = await Promise.all([getUserInfo(), getProfileUrl()]);

        let currentImgUrl = '';
        if (userRes.isSuccess && userRes.result) {
          setNickname(userRes.result.username);
          currentImgUrl = userRes.result.imgUrl;
        }

        if (avatarRes.isSuccess && avatarRes.result) {
          const images = avatarRes.result.images;
          setAvatarList(images);

          // 현재 유저와 일치하는 아바타 타입을 찾아 체크 상태로 만듦
          const matchedAvatar = images.find((img) => img.imgUrl === currentImgUrl);
          if (matchedAvatar) {
            setSelectedAvatar(matchedAvatar.profileImg);
          } else if (images.length > 0) {
            setSelectedAvatar(images[0].profileImg);
          }
        }
      } catch (error) {
        console.error('초기 데이터 로드 실패:', error);
      }
    };

    fetchInitialData();
  }, []);

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    if (value.length <= 20) {
      setNickname(value);
    }
  };

  const handleClearNickname = () => {
    setNickname('');
  };

  /** 사용자 프로필 설정 API */
  const handleSave = async () => {
    if (nickname.trim() === '') {
      alert('닉네임을 입력해주세요.');
      return;
    }

    try {
      const response = await putUserInfo(selectedAvatar, nickname);

      if (response.isSuccess) {
        alert('프로필이 성공적으로 수정되었습니다.');
        navigate('/mypage');
      } else {
        alert(response.message || '프로필 수정에 실패했습니다.');
      }
    } catch (error) {
      console.error('프로필 수정 저장 실패:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackIcon src={LeftArrowIcon} onClick={() => navigate('/mypage')} />
        <S.HeaderTitle>프로필 설정</S.HeaderTitle>
      </S.Header>

      <S.Section>
        <S.SectionTitle>프로필 사진</S.SectionTitle>
        <S.SectionDesc>기본 이미지 중 하나를 선택할 수 있어요.</S.SectionDesc>

        <S.AvatarBox>
          {avatarList.map((avatar) => (
            <S.AvatarWrapper key={avatar.profileImg} onClick={() => setSelectedAvatar(avatar.profileImg)}>
              <S.AvatarImg src={avatar.imgUrl} alt={`${avatar.profileImg} 아바타`} />

              {selectedAvatar === avatar.profileImg ? (
                <S.CheckBadge $isActive={true}>✓</S.CheckBadge>
              ) : (
                <S.CheckBadge $isActive={false} />
              )}
            </S.AvatarWrapper>
          ))}
        </S.AvatarBox>
      </S.Section>

      <S.Section>
        <S.SectionTitle>닉네임 변경</S.SectionTitle>
        <S.SectionDesc>닉네임은 언제든지 변경할 수 있어요.</S.SectionDesc>
        <S.InputWrapper>
          <S.Input value={nickname} onChange={handleNicknameChange} placeholder="변경할 닉네임을 입력해주세요" />
          {nickname?.length > 0 && <S.ClearButton onClick={handleClearNickname}>×</S.ClearButton>}
        </S.InputWrapper>
        <S.CharCount>{nickname?.length} / 20</S.CharCount>
      </S.Section>

      <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
    </S.Container>
  );
}
