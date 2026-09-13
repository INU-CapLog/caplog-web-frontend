export const mockScheduleDetail = {
  isSuccess: true,
  code: 'COMMON_200',
  message: '요청에 성공했습니다.',
  result: {
    scheduleId: 1,

    imgUrl: ['https://picsum.photos/500/700'],

    title: '데이터수학통계 과목',

    EventCount: 1,

    events: [
      {
        id: 101,
        title: '데이터수학통계 중간고사 날짜',
        hasDate: true,
        dateTime: '2026-09-22T15:00',

        details: `📍 장소
5호관 301호

🎒 준비물
계산기, 강의자료, 책, 필기 등 종이 자료`,

        aiSummary:
          '데이터수학통계 중간고사는 4월 22일 오후 3시에 5호관 301호에서 진행됩니다. 계산기와 종이 자료를 사용할 수 있으며, 시험에 필요한 분포표는 제공됩니다.',
      },
    ],
  },
};
