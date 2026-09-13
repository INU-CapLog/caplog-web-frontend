import * as S from '../pages/Mypage.styles';
import * as A from '../components/common/BottomSheet.styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../api/user';
import avatarImg1 from '../assets/images/Avatar_1.png';

export default function Mypage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('LikeLionINU');
  const menuItems = [
    { label: '프로필 설정', path: '/mypage/edit' },
    { label: '알림 설정', path: '/mypage/notifications' },
  ];
  const serviceItems = [
    { label: '서비스 소개', path: '/' },
    { label: 'CapLog 사진 권한 보기', path: '/check-photo-auth' },
    { label: 'CapLog 알림 권한 보기', path: '/check-noti-auth' },
    { label: '로그아웃', path: '/login' },
  ];

  // 유저 기본 정보
  const [userInfo, setUserInfo] = useState({
    userName: 'LikeLionINU', // 기본 닉네임
    imgUrl: avatarImg1, // 기본 프로필
    totalSchedule: 0, // 기본 저장한 정보
    thisMonthSchedule: 0, // 기본 이번 달 일정
  });

  // 로그아웃 관련
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };
  const handleLogoutCancel = () => {
    setIsLogoutModalOpen(false);
  };
  const handleLogoutConfirm = () => {
    console.log('로그아웃 되었습니다.');
    setIsLogoutModalOpen(false);
    navigate('/login');
  };

  /** 사용자 프로필 정보 조회 API*/
  const fetchUserInfo = async () => {
    try {
      const data = await getUserInfo();
      if (data.isSuccess && data.result) {
        setUserInfo({
          userName: data.result.userName || 'LikeLionINU',
          imgUrl: data.result.imgUrl || avatarImg1,
          totalSchedule: data.result.totalSchedule || 0,
          thisMonthSchedule: data.result.thisMonthSchedule || 0,
        });
      }
    } catch (error) {
      console.error('유저 정보 조회 오류:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <S.Container>
        <S.Header>마이페이지</S.Header>
        <S.InfoCard>
          <S.Avatar src={userInfo.imgUrl} />
          <S.ProfileText>{userInfo.userName}님 반갑습니다.</S.ProfileText>
        </S.InfoCard>

        {/* 통계 */}
        <S.StatWrapper>
          <S.Title>나의 CapLog</S.Title>

          <S.CardWrapper>
            <S.StatCard>
              <S.CardLabel>저장한 정보</S.CardLabel>
              <S.Divider style={{ margin: '10px' }} />
              <S.CardValue>{userInfo.totalSchedule}개</S.CardValue>
            </S.StatCard>

            <S.StatCard>
              <S.CardLabel>이번 달 등록 일정</S.CardLabel>
              <S.Divider style={{ margin: '10px' }} />
              <S.CardValue>{userInfo.thisMonthSchedule}개</S.CardValue>
            </S.StatCard>
          </S.CardWrapper>
        </S.StatWrapper>

        {/* 메뉴 */}
        <S.MenuContainer>
          <S.MenuTitle style={{ marginTop: '4px' }}>설정</S.MenuTitle>
          <S.MenuBox>
            {menuItems.map((item, index) => (
              <S.MenuItem key={index} onClick={() => navigate(item.path)}>
                <S.MenuLabel>{item.label}</S.MenuLabel>
                <S.MenuArrow>{'>'}</S.MenuArrow>
              </S.MenuItem>
            ))}
          </S.MenuBox>
        </S.MenuContainer>

        <S.MenuContainer>
          <S.MenuTitle>서비스</S.MenuTitle>
          <S.MenuBox>
            {serviceItems.map((item, index) => (
              <S.MenuItem
                key={index}
                onClick={() => {
                  if (item.label === '로그아웃') {
                    handleLogoutClick();
                  } else {
                    navigate(item.path);
                  }
                }}
              >
                <S.MenuLabel>{item.label}</S.MenuLabel>
                <S.MenuArrow>{'>'}</S.MenuArrow>
              </S.MenuItem>
            ))}
          </S.MenuBox>
        </S.MenuContainer>
      </S.Container>

      {/* 로그아웃 모달 */}
      {isLogoutModalOpen && (
        <A.ModalOverlay>
          <A.ModalBox>
            <A.ModalTitle style={{ marginBottom: '24px' }}>정말 로그아웃하시겠습니까?</A.ModalTitle>
            <A.ModalButtonGroup>
              <A.ModalNoButton onClick={handleLogoutCancel}>아니요</A.ModalNoButton>
              <A.ModalYesButton onClick={handleLogoutConfirm}>예</A.ModalYesButton>
            </A.ModalButtonGroup>
          </A.ModalBox>
        </A.ModalOverlay>
      )}
    </>
  );
}
