export const mockGroupDetail = {
  isSuccess: true,
  code: 'COMMON_200',
  message: '요청에 성공했습니다.',
  result: {
    page: {
      totalPage: 1,
      pageNumber: 0,
    },

    group: {
      groupId: 1,
      groupName: '데이터수학통계 과목',
      groupCategory: 'STUDY',
    },

    scheduleCount: 3,

    schedules: [
      {
        scheduleId: 101,
        title: '데이터수학통계 중간고사 날짜',
        imgUrl: '/src/assets/testday.png',
        isNew: true,
      },
      {
        scheduleId: 102,
        title: '데이터수학통계 과제 제출',
        imgUrl: '/src/assets/testday.png',
        isNew: false,
      },
      {
        scheduleId: 103,
        title: '데이터수학통계 휴강 안내',
        imgUrl: '/src/assets/testday.png',
        isNew: false,
      },
    ],
  },
};
