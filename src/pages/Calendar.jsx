import { useState, useEffect } from 'react';
import { getCalendarEvents } from '../api/calendarApi';
import { useNavigate } from 'react-router-dom';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as S from './Calendar.style';

const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigate = useNavigate();

  // API 일정 데이터
  const [events, setEvents] = useState([]);

  const [dateCounts, setDateCounts] = useState([]);

  // 현재 달력에 표시 중인 달
  const [activeDate, setActiveDate] = useState(new Date());
  const startDate = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
  const endDate = new Date(activeDate.getFullYear(), activeDate.getMonth() + 1, 0);
  const startDateTime = `${formatDateKey(startDate)}T00:00:00`;
  const endDateTime = `${formatDateKey(endDate)}T23:59:59`;

  // 달력에 표시할 이벤트 목록을 API에서 가져옴
  useEffect(() => {
    const fetchCalendarEvents = async () => {
      try {
        const data = await getCalendarEvents({
          startDateTime,
          endDateTime,
        });

        // API에서 받은 일정 목록 저장
        setEvents(data.result?.events ?? []);
        setDateCounts(data.result?.dateCounts ?? []);
      } catch (error) {
        // 서버 또는 네트워크 오류 확인용
        console.error('캘린더 일정 조회 실패:', error);

        setEvents([]);
        setDateCounts([]);
      }
    };

    fetchCalendarEvents();
  }, [startDateTime, endDateTime]);

  // 사용자가 선택한 날짜를 알맞은 형태로 변환
  const selectedDateKey = formatDateKey(selectedDate);

  // API에서 받아온 이벤트 중 선택한 날짜의 일정만 가져옴
  const selectedSchedules = events.filter((event) => event?.date?.slice(0, 10) === selectedDateKey);

  return (
    <S.CalendarContainer>
      <S.Header>캘린더</S.Header>

      <S.CalendarBox>
        <S.SpringRow>
          {Array.from({ length: 20 }).map((_, index) => (
            <S.Spring key={index} />
          ))}
        </S.SpringRow>
        <ReactCalendar
          value={selectedDate}
          onChange={setSelectedDate}

          onActiveStartDateChange={({ activeStartDate }) => {
            setActiveDate(activeStartDate);
          }}
          calendarType="gregory"
          prev2Label={null}
          next2Label={null}
          formatDay={(_, date) => date.getDate()}
          tileContent={({ date, view }) => {
            if (view !== 'month') return null;

            const dateKey = formatDateKey(date);

            const dateCount = dateCounts.find((item) => item.date === dateKey);

            const scheduleCount = dateCount?.count ?? 0;

            if (scheduleCount === 0) return null;

            return (
              <S.DotContainer>
                {Array.from({ length: scheduleCount }).map((_, index) => (
                  <S.Dot key={index} />
                ))}
              </S.DotContainer>
            );
          }}
        />
      </S.CalendarBox>

      <S.Divider />

      <S.ScheduleSection>
        <S.ScheduleTitle>
          오늘의 일정
          {selectedSchedules.length > 0 && ` (${selectedSchedules.length}개)`}
        </S.ScheduleTitle>

        {selectedSchedules.length === 0 ? (
          <S.EmptyText>오늘 일정이 없어요!</S.EmptyText>
        ) : (
          <S.ScheduleList>
            {selectedSchedules.map((schedule) => (
              <S.ScheduleCard
                key={schedule.eventId}

                // 일정 카드를 누르면 해당 일정 상세페이지로 이동
                onClick={() => navigate(`/detail/${schedule.scheduleId}`)}
              >
                <S.ScheduleCardTitle>{schedule.eventTitle}</S.ScheduleCardTitle>

                <S.ScheduleCardImage src={schedule.captureImg} alt="사진" />
              </S.ScheduleCard>
            ))}
          </S.ScheduleList>
        )}
      </S.ScheduleSection>
    </S.CalendarContainer>
  );
}

export default Calendar;
