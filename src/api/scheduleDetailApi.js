import api from './axios';
import { mockScheduleDetail } from './mockScheduleDetail';

const USE_MOCK = false;

// 일정 상세 조회 (상세페이지 전용)
export const getScheduleDetail = async (scheduleId) => {
  if (USE_MOCK) {
    return mockScheduleDetail;
  }

  const response = await api.get(`/schedule/details/${scheduleId}`);

  return response.data;
};

// 일정 삭제 (상세페이지 전용)
export const deleteSchedule = async (scheduleId) => {
  if (USE_MOCK) {
    console.log(`[MOCK] 일정 삭제 요청: ${scheduleId}`);

    return {
      isSuccess: true,
      code: 'COMMON_200',
      message: '요청에 성공했습니다.',
      result: {
        userName: null,
      },
    };
  }

  const response = await api.delete(`/schedule/${scheduleId}`);

  return response.data;
};

// ========================================
// 일정 수정 (상세페이지 전용)
// PATCH /schedule/{scheduleId}
// ========================================
export const updateSchedule = async (scheduleId, updateData) => {
  // 서버 연결 전 목업
  if (USE_MOCK) {
    console.log(`[MOCK] 일정 수정 요청: ${scheduleId}`);
    console.log('[MOCK] 수정 데이터:', updateData);

    return {
      isSuccess: true,
      code: 'COMMON_200',
      message: '요청에 성공했습니다.',
      result: updateData,
    };
  }

  // 실제 서버 연결
  const response = await api.put(`/schedule/${scheduleId}`, updateData);

  return response.data;
};
