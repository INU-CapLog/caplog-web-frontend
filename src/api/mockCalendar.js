export const mockCalendarData = {
  isSuccess: true,
  code: 'COMMON_200',
  message: '요청에 성공했습니다.',
  result: {
    page: {
      totalPage: 1,
      pageNumber: 0,
    },

    startDate: '2026-08-01',
    endDate: '2026-08-31',

    events: [
      {
        scheduleId: 1,
        eventId: 1,
        date: '2026-08-18',
        captureImg: '이미지주소',
        eventtitle: '데이터수학통계 시험',
      },
      {
        scheduleId: 2,
        eventId: 2,
        date: '2026-08-18',
        captureImg: '이미지주소',
        eventtitle: '산업공학개론 시험',
      },
      {
        scheduleId: 3,
        eventId: 3,
        date: '2026-08-20',
        captureImg: '이미지주소',
        eventtitle: '성적표 공개',
      },
    ],
  },
};
