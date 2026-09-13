// 알림 관련
import api from './axios';

// 알림 목록 조회
export const getAlarms = async (page, alarmType) => {
  const response = await api.get(`/alarm`, {
    params: { page, alarmType },
  });

  return response.data;
};

// 알림 설정 정보 조회
export const getAlarmSettings = async () => {
  const response = await api.get(`/users/settings/alarms`);

  return response.data;
};

// 알림 설정
export const putAlarmSettings = async (imminentAlarm, unviewedAlarm, aiRecommendedAlarm) => {
  const response = await api.post(`/users/settings/alarms`, {
    imminentAlarm,
    unviewedAlarm,
    aiRecommendedAlarm
  });

  return response.data;
};