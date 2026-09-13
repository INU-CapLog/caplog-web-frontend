import api from './axios';

// 날짜 범위 내 이벤트 조회
export const getCalendarEvents = async ({ startDateTime, endDateTime }) => {
  const response = await api.get('/schedule/events', {
    params: {
      startDateTime,
      endDateTime,
    },
  });

  return response.data;
};
