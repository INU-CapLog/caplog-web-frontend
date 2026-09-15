// 인증/권한 관련
import api from './axios';

// 로그인
export const login = async (userName, password) => {
  const response = await api.post('/auth/login', {
    userName,
    password,
  });

  return response.data;
};

// 회원가입
export const signup = async (userName, password) => {
  const response = await api.post('/auth/signup', {
    userName,
    password,
  });

  return response.data;
};

// 사진 권한 허용 여부 전송
export const putPhotoAuth = async (isApproved) => {
  const response = await api.post('/users/photo-consent', { isApproved });

  return response.data;
};

// 사진 권한 허용 여부 확인
export const checkPhotoAuth = async () => {
  const response = await api.get('/users/photo-consent');

  return response.data;
};

// 알림 권한 허용 여부 전송
export const putNotiAuth = async (isApproved) => {
  const response = await api.post('/alarm/alarm-consent', { isApproved });

  return response.data;
};

// 알림 권한 허용 여부 확인
export const checkNotiAuth = async () => {
  const response = await api.get('/alarm/alarm-consent');

  return response.data;
};
