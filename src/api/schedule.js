import api from './axios';

// 저장된 정보 목록 조회
export const getSchedules = async ({ page = 0, category = 'TOTAL', searchWords = '' } = {}) => {
  const response = await api.get('/schedule', {
    params: {
      page,
      category,
      searchWords,
    },
  });

  return response.data;
};
