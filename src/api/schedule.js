import api from './axios';
import { mockScheduleData } from './mockSchedule';

const USE_MOCK = false;

// 저장된 정보 목록 조회
export const getSchedules = async ({ page = 0, category = 'TOTAL', searchWords = '' } = {}) => {
  // 목업 데이터 사용
  if (USE_MOCK) {
    let list = mockScheduleData.result.list;

    // 카테고리 필터
    if (category !== 'TOTAL') {
      list = list.filter((item) => item.schedule.group === category);
    }

    // 검색
    if (searchWords) {
      list = list.filter((item) => item.schedule.title.toLowerCase().includes(searchWords.toLowerCase()));
    }

    return {
      ...mockScheduleData,
      result: {
        ...mockScheduleData.result,

        page: {
          ...mockScheduleData.result.page,
          pageNumber: page,
        },

        list,
      },
    };
  }

  // 실제 백엔드 API 사용
  const response = await api.get('/schedule', {
    params: {
      page,
      category,
      searchWords,
    },
  });

  return response.data;
};
