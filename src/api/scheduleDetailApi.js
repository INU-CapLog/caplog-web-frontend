import api from './axios';

// 일정 상세 조회 (상세페이지 전용)
export const getScheduleDetail = async (scheduleId) => {
  const response = await api.get(`/schedule/details/${scheduleId}`);

  return response.data;
};

// 일정 삭제 (상세페이지 전용)
export const deleteSchedule = async (scheduleId) => {
  const response = await api.delete(`/schedule/${scheduleId}`);

  return response.data;
};

// 일정 수정 (상세페이지 전용)
export const updateSchedule = async (scheduleId, updateData) => {
  const response = await api.put(`/schedule/${scheduleId}`, updateData);

  return response.data;
};
