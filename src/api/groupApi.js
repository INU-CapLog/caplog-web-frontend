import api from './axios';

// 그룹 상세 조회
export const getGroupDetail = async (groupId, page = 0) => {
  const response = await api.get(`/group/details/${groupId}`, {
    params: {
      page,
    },
  });

  return response.data;
};

// 그룹 삭제
export const deleteGroup = async (groupId) => {
  const response = await api.delete(`/group/${groupId}`);

  return response.data;
};

// 그룹 수정
export const updateGroup = async (groupId, groupName, category, categoryEnum) => {
  const response = await api.patch(`/group/${groupId}`, {
    groupName,
    category,
    categoryEnum,
  });

  return response.data;
};

// 그룹 카테고리 목록 조회
export const getCategoryList = async () => {
  const response = await api.get('/group/categories');

  return response.data;
};
