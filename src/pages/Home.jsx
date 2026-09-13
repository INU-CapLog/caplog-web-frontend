import PreviewBox from './PreviewBox';
import PreviewFilter from './PreviewFilter';
import SearchBar from './SearchBar';
import * as S from './Home.style';
import logo from '../assets/logo.svg';
import alarm from '../assets/alarm.svg';
import { useNavigate } from 'react-router-dom';
import { getAlarms } from '../api/notification';
import { useEffect, useState } from 'react';
import { getSchedules } from '../api/schedule';
import api from '../api/axios';

function Home() {
  const navigate = useNavigate();
  const [alarmCount, setAlarmCount] = useState(0);
  const [memoryItems, setMemoryItems] = useState([]);
  const [latestAlarm, setLatestAlarm] = useState(null); // 홈 화면에 보여줄 알림 말풍선
  const [selectedCategory, setSelectedCategory] = useState('TOTAL');
  const [schedules, setSchedules] = useState([]);

  // 기억해야 하는 일정박스 관련
  useEffect(() => {
    const fetchMemorySchedules = async () => {
      try {
        const data = await getSchedules({
          page: 0,
          category: 'TOTAL',
          searchWords: '',
        });

        // setMemorySchedules(data.result.list);
      } catch (error) {
        console.error('기억해야 할 정보 조회 실패:', error);
      }
    };

    fetchMemorySchedules();
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [schedulesData, alarmsData] = await Promise.all([
          getSchedules({ page: 0, category: selectedCategory, searchWords: '' }),
          getAlarms(0, 'IMMINENT'),
        ]);

        setSchedules(schedulesData.result.list);

        const alarms = alarmsData.result.notifications ?? [];
        setAlarmCount(alarmsData.result.alarmCount);
        setLatestAlarm(alarms.find((a) => !a.isOpened) ?? null);
        setMemoryItems(
          alarms.map((alarm) => ({
            id: alarm.scheduleId,
            title: alarm.title,
            message: alarm.message,
            dday: alarm.Dday,
          })),
        );
      } catch (error) {
        console.error('홈 데이터 조회 실패:', error);
      }
    };

    fetchAll();
  }, [selectedCategory]);

  // 14일 이내 일정 연산
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleTestPush = async () => {
    try {
      const res = await api.post('/alarm/test-push');
      console.log('푸시 테스트 성공:', res.data);
    } catch (error) {
      console.error('푸시 테스트 실패:', error);
    }
  };

  return (
    <S.HomeContainer>
      <S.Header>
        <S.Logo src={logo} alt="Caplog" />

        <S.AlarmArea>
          {latestAlarm && <S.AlarmMessage>{latestAlarm.message}</S.AlarmMessage>}

          <S.AlarmButton onClick={() => navigate('/notification')}>
            <img src={alarm} alt="알람" />

            {alarmCount > 0 && <S.AlarmBadge>{alarmCount}</S.AlarmBadge>}
          </S.AlarmButton>
        </S.AlarmArea>
      </S.Header>

      <S.MemoryBox>
        <S.SpringRow>
          {Array.from({ length: 20 }).map((_, index) => (
            <S.Spring key={index} />
          ))}
        </S.SpringRow>
        <S.MemoryTitle>기억해야 할 정보가 있어요!</S.MemoryTitle>

        <S.MemoryList>
          {memoryItems.length === 0 ? (
            <S.PreviewTitle style={{ textAlign: 'center' }}>아직 임박한 일정은 없어요.</S.PreviewTitle>
          ) : (
            memoryItems.map((memory) => (
              <S.MemoryItem
                key={`${memory.id}-${memory.title}`}
                onClick={() => navigate(memory.isGroup ? `/group/${memory.id}` : `/detail/${memory.id}`)}
              >
                <span>{memory.message}</span>

                <S.MemoryRight>
                  <S.Dday $active={memory.dday <= 1}>{memory.dday === 0 ? 'D-DAY' : `D-${memory.dday}`}</S.Dday>

                  <S.ArrowButton type="button">›</S.ArrowButton>
                </S.MemoryRight>
              </S.MemoryItem>
            ))
          )}
        </S.MemoryList>
      </S.MemoryBox>

      <S.SearchSection>
        <SearchBar onClick={() => navigate('/archive')} />
      </S.SearchSection>

      <S.PreviewSection>
        <S.PreviewHeader>
          <S.PreviewTitle>저장한 캡처 정보</S.PreviewTitle>
          <S.AllButton onClick={() => navigate('/archive')}>전체 보기 ›</S.AllButton>
        </S.PreviewHeader>

        <S.FilterSection>
          <PreviewFilter selectedFilter={selectedCategory} onFilterChange={setSelectedCategory} />
        </S.FilterSection>

        <S.PreviewList>
          {schedules.map((item) => (
            <PreviewBox
              key={`${item.isGroup ? 'group' : 'schedule'}-${item.id}`}
              id={item.id}
              image={item.captureImg}
              title={item.title}
              isGroup={item.isGroup}
              isNew={item.isNew}
              elementCount={item.elementCount}
            />
          ))}
        </S.PreviewList>
      </S.PreviewSection>
      <button onClick={handleTestPush} style={{ marginTop: '100px', opacity: '0' }}>
        알림 테스트
      </button>
    </S.HomeContainer>
  );
}

export default Home;
