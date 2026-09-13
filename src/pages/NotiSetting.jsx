import * as S from './NotiSetting.styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftArrowIcon from '../assets/icons/LeftArrow.svg';
import { getAlarmSettings, putAlarmSettings } from '../api/user';

export default function NotiSetting() {
  const navigate = useNavigate();

  // 기본 상태
  const [toggles, setToggles] = useState({
    all: true,
    schedule: true,
    unread: true,
    recommend: true,
  });

  const notiItems = [
    { id: 'all', label: '전체 알림', desc: '모든 알림을 받아요.' },
    {
      id: 'schedule',
      label: '일정 알림',
      desc: '모든 저장된 일정의 마감 임박 알림을 받아요.',
    },
    {
      id: 'unread',
      label: '미열람 알림',
      desc: '아직 확인하지 않은 정보 알림을 받아요.',
    },
    {
      id: 'recommend',
      label: '추천 알림',
      desc: 'AI가 추천하는 행동 알림을 받아요.',
    },
  ];

  useEffect(() => {
    /** 알림 설정 정보 조회 API */
    const fetchSettings = async () => {
      try {
        const data = await getAlarmSettings();
        if (data.isSuccess && data.result) {
          setToggles({
            all: data.result.totalAlarm,
            schedule: data.result.imminentAlarm,
            unread: data.result.unviewedAlarm,
            recommend: data.result.aiRecommendedAlarm,
          });
        }
      } catch (error) {
        console.error('알림 설정 조회 에러:', error);
      }
    };

    fetchSettings();
  }, []);

  /** 알림 설정 API */
  const handleToggle = async (id) => {
    let nextState = { ...toggles };
    if (id === 'all') {
      const newValue = !toggles.all;
      nextState = {
        all: newValue,
        schedule: newValue,
        unread: newValue,
        recommend: newValue,
      };
    } else {
      nextState[id] = !toggles[id];
      if (!nextState[id]) nextState.all = false;
      if (nextState.schedule && nextState.unread && nextState.recommend) {
        nextState.all = true;
      }
    }

    setToggles(nextState);

    try {
      const response = await putAlarmSettings(
        nextState.schedule, // imminentAlarm
        nextState.unread, // unviewedAlarm
        nextState.recommend, // aiRecommendedAlarm
      );

      if (!response.isSuccess) {
        throw new Error(response.message || '설정 저장 실패');
      }
    } catch (error) {
      console.error('알림 설정 저장 통신 에러:', error);
      alert('알림 설정 변경에 실패했습니다. 다시 시도해 주세요.');
      setToggles(toggles);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackIcon src={LeftArrowIcon} onClick={() => navigate('/mypage')} />
        <S.HeaderTitle>알림 설정</S.HeaderTitle>
      </S.Header>
      <S.Desc>원하는 알림을 선택하여 CapLog의 알림을 받아보세요.</S.Desc>

      <S.MenuContainer>
        <S.MenuBox>
          {notiItems.map((item) => (
            <S.MenuItem key={item.id}>
              <S.TextWrapper>
                <S.MenuLabel>{item.label}</S.MenuLabel>
                <S.MenuDesc>{item.desc}</S.MenuDesc>
              </S.TextWrapper>

              <S.ToggleWrapper
                $isOn={toggles[item.id]}
                onClick={() => handleToggle(item.id)}
              >
                <S.ToggleCircle $isOn={toggles[item.id]} />
              </S.ToggleWrapper>
            </S.MenuItem>
          ))}
        </S.MenuBox>
      </S.MenuContainer>
    </S.Container>
  );
}
