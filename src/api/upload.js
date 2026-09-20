// 사진 업로드 관련
import api from './axios';

// 사진 업로드
export const analyzeImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await api.post('/upload', formData);

  return response.data;
};

// 그룹/단일 일정 전체 조회 (주제)
export const getGroupList = async (page = 0) => {
  const response = await api.get('/group', {
    params: { page },
  });

  return response.data;
};

// 그룹 카테고리 목록 조회 (카테고리)
export const getCategoryList = async () => {
  const response = await api.get('/group/categories');

  return response.data;
};

// 업로드 확정
export const confirmUpload = async (payload) => {
  const response = await api.post('/upload/confirm', payload);
  return response.data;
};
