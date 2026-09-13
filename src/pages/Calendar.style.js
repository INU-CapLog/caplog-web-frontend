import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 100%;
  height: 100dvh;
  overflow-y: auto;

  padding: 24px 15px 120px;
  box-sizing: border-box;

  background-color: #fffbf6;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  width: 90%;
  box-sizing: border-box;
  padding: 24px;
  color: #7c2d12;
  font-size: 16px;
  font-weight: 800;
  text-align: left;
`;

// 캘린더 상단 스프링 묶음
export const SpringRow = styled.div`
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 0 16px;
  box-sizing: border-box;
  pointer-events: none;
`;

// 캘린더 상단 스프링 한 개
export const Spring = styled.span`
  width: 8px;
  height: 17px;

  border-radius: 999px;
  background-color: #b55116;

  flex-shrink: 0;
`;

export const CalendarBox = styled.div`
  position: relative;

  width: 100%;
  max-width: 370px;

  min-height: 348px;
  margin: 0 auto;

  background-color: #fff0dd;
  border-radius: 15px;
  padding: 18px 16px;
  box-sizing: border-box;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);

  .react-calendar {
    width: 100%;
    border: none;
    background: transparent;
    font-family: inherit;
  }

  .react-calendar__navigation {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    height: 40px;
    margin-bottom: 10px;
    gap: 12px;
  }

  /* 가운데 연도 + 월 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;

    background: none;
    border: none;

    color: #b55116;
    font-size: 16px;
    font-weight: 500;

    padding: 0;
  }

  .react-calendar__navigation button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  /* 이전달 / 다음달 꺽쇄 */
  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__next-button {
    min-width: 28px;
    width: 28px;
    padding: 0;
    color: #b55116;
    font-size: 30px;
    font-weight: 500;
  }

  .react-calendar__navigation__label {
    flex-grow: 0 !important;
    color: #7c2d12;
    font-size: 16px;
    font-weight: 500;
    padding: 0;
    margin-top: 4px;
  }

  /* 요일 전체 줄 */
  .react-calendar__month-view__weekdays {
    margin-bottom: 8px;
    text-align: center;
  }

  /* 일, 월, 화... 각각 */
  .react-calendar__month-view__weekdays__weekday {
    font-size: 12px;
    font-weight: 400;
  }

  /* react-calendar 기본 밑줄 제거 */
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  .react-calendar__tile {
    position: relative;
    height: 42px;
    padding: 0;

    border: none;
    background: transparent;

    color: #b55116;
    font-size: 14px;
    cursor: pointer;
  }

  /* 날짜 숫자 */
  .react-calendar__tile abbr {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    margin: 0 auto;

    border-radius: 50%;
  }

  /* 선택된 날짜의 숫자만 동그랗게 */
  .react-calendar__tile--active {
    background: transparent !important;
  }

  .react-calendar__tile--active abbr {
    background-color: #c35a0a;
    color: #ffffff;
  }

  /* 선택된 날짜 hover */
  .react-calendar__tile--active:hover {
    background-color: #b55116;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: transparent;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background: transparent;
  }

  /* 이웃달 흐림처리 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #d9a2a2;
    opacity: 0.55;
  }

  // 일요일 빨강
  .react-calendar__month-view__days > button:nth-child(7n + 1) {
    color: #f03232;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #d9a2a2;
    opacity: 0.55;
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 3px;
  background-color: #fdba74;
  margin: 22px 0 24px;
  border-radius: 10px;
`;

export const ScheduleSection = styled.div`
  width: 100%;
`;

export const ScheduleTitle = styled.p`
  margin: 0;
  color: #7c2d12;
  font-size: 16px;
  font-weight: 700;
`;

export const EmptyText = styled.p`
  margin-top: 120px;
  text-align: center;
  color: #b55116;
  font-size: 13px;
  font-weight: 600;
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  gap: 2px;
  height: 5px;
`;

export const Dot = styled.span`
  width: 4px;
  height: 4px;

  border-radius: 50%;
  background-color: #7c2d12;
`;

export const ScheduleList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  margin-top: 20px;

  justify-content: center;
`;

// 캘린더 일정 카드
export const ScheduleCard = styled.button`
  position: relative;

  min-width: 0;
  height: 270px;

  padding: 20px 14px 14px;
  box-sizing: border-box;

  border-radius: 15px;
  background-color: #fff0dd;

  cursor: pointer;
  border: none;
`;

// 캘린더 일정 카드 제목
export const ScheduleCardTitle = styled.p`
  margin: 3px 0 18px;

  color: #7c2d12;
  font-size: 11.5px;
  font-weight: 600;
  line-height: 1.4;
`;

// 캘린더 일정 카드 이미지
export const ScheduleCardImage = styled.img`
  display: block;

  width: 100%;
  height: 196px;

  border-radius: 12px;
  object-fit: cover;

  background-color: #ffffff;
`;
