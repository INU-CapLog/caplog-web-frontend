export const mockScheduleData = {
  isSuccess: true,
  code: 'COMMON_200',
  message: '요청에 성공했습니다.',

  result: {
    page: {
      totalPage: 1,
      pageNumber: 0,
    },

    list: [
      {
        isGroup: true,
        id: 1,
        isNew: true,
        elementCount: 3,

        pictures: [
          {
            captureImg: '/sample1.png',
          },
        ],

        schedule: {
          title: '데이터수학통계 과목',
          aiSummary: '데이터수학통계 관련 일정과 정보입니다.',
          hasGroup: true,
          group: 'STUDY',
        },

        events: [
          {
            tempId: 1,
            title: '데이터수학통계 중간고사',
            dateTime: '2026-08-25T15:00:00',
            details: '중간고사 일정',
          },
        ],
      },

      {
        isGroup: false,
        id: 2,
        isNew: true,
        elementCount: 1,

        pictures: [
          {
            captureImg: '/sample2.png',
          },
        ],

        schedule: {
          title: '기숙사 신청 기간',
          aiSummary: '기숙사 신청 마감일에 대한 정보입니다.',
          hasGroup: false,
          group: 'SCHOOL',
        },

        events: [
          {
            tempId: 2,
            title: '기숙사 신청 마감',
            dateTime: '2026-08-18T18:00:00',
            details: '기숙사 신청 마감일',
          },
        ],
      },

      {
        isGroup: false,
        id: 3,
        isNew: false,
        elementCount: 1,

        pictures: [
          {
            captureImg: '/sample3.png',
          },
        ],

        schedule: {
          title: '부산 여행 맛집',
          aiSummary: '부산 여행 중 방문할 맛집 정보입니다.',
          hasGroup: false,
          group: 'DAILY',
        },

        events: [],
      },
    ],
  },
};
