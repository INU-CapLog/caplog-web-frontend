import back from '../assets/back.svg';
import modifyicon from '../assets/modify.svg';
import deleteicon from '../assets/delete.svg';
import * as S from './Group.style';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getGroupDetail, deleteGroup, updateGroup } from '../api/groupApi';

function Group() {
  const navigate = useNavigate();
  const { groupId } = useParams();

  const [openPopup, setOpenPopup] = useState(null);
  const [groupData, setGroupData] = useState(null);

  // 수정할 그룹 제목
  const [modifyGroupName, setModifyGroupName] = useState('');

  // 수정할 그룹 카테고리
  const [modifyCategory, setModifyCategory] = useState('');

  // 그룹 카테고리 목록
  const [categoryList, setCategoryList] = useState(['TOTAL', 'STUDY', 'SCHOOL', 'DAILY', 'ETC']);

  const CATEGORY_LABEL = {
    TOTAL: '전체',
    STUDY: '공부',
    SCHOOL: '학교',
    DAILY: '일상',
    ETC: '기타',
  };

  useEffect(() => {
    const fetchGroupDetail = async () => {
      const result = await getGroupDetail(groupId, 0);
      setGroupData(result);
    };

    fetchGroupDetail();
  }, [groupId]);

  // 그룹 수정 팝업 열기
  const handleOpenModify = () => {
    setModifyGroupName(groupData.result.group.groupName);
    setModifyCategory(groupData.result.group.groupCategory);
    setOpenPopup('modify');
  };

  // 그룹 수정 버튼을 눌렀을 때 실행되는 함수
  const handleUpdateGroup = async () => {
    try {
      const result = await updateGroup(groupId, modifyGroupName, modifyCategory, modifyCategory);

      // 그룹 수정 API 요청 성공
      if (result.isSuccess) {
        // 화면에 보이는 그룹 정보도 수정된 값으로 변경
        setGroupData((prev) => ({
          ...prev,
          result: {
            ...prev.result,
            group: {
              ...prev.result.group,
              groupName: modifyGroupName,
              groupCategory: modifyCategory,
            },
          },
        }));

        // 수정 팝업 닫기
        setOpenPopup(null);
      }
    } catch (error) {
      console.error('그룹 수정 실패:', error);
    }
  };

  // 그룹 삭제 버튼을 눌렀을 때 실행되는 함수
  const handleDeleteGroup = async () => {
    try {
      const result = await deleteGroup(groupId);

      // 삭제 API 요청이 성공한 경우
      if (result.isSuccess) {
        setOpenPopup(null);

        navigate('/home');
      }
    } catch (error) {
      // 서버 오류나 네트워크 오류가 발생한 경우 확인용
      console.error('그룹 삭제 실패:', error);
    }
  };

  if (!groupData) {
    return <div>로딩 중...</div>;
  }

  return (
    <S.GroupContainer>
      <S.GroupHeader>
        <S.BackButton type="button" onClick={() => navigate('/home')}>
          <img src={back} alt="뒤로가기" />
        </S.BackButton>
      </S.GroupHeader>

      <S.GroupInfoBox>
        <S.SpringRow>
          {Array.from({ length: 20 }).map((_, index) => (
            <S.Spring key={index} />
          ))}
        </S.SpringRow>
        <S.InfoTop>
          <S.Category>{CATEGORY_LABEL[groupData.result.group.groupCategory]}</S.Category>

          <S.ActionButtons>
            <S.IconButton type="button" onClick={handleOpenModify}>
              <img src={modifyicon} alt="수정" />
            </S.IconButton>

            <S.IconButton type="button" onClick={() => setOpenPopup('delete')}>
              <img src={deleteicon} alt="삭제" />
            </S.IconButton>
          </S.ActionButtons>
        </S.InfoTop>

        <S.GroupTitle>{groupData.result.group.groupName}</S.GroupTitle>
        <S.GroupCount>{groupData.result.scheduleCount}개의 정보가 저장됨</S.GroupCount>
      </S.GroupInfoBox>

      <S.CardList>
        {groupData.result.schedules.map((schedule) => (
          <S.Card key={schedule.scheduleId} onClick={() => navigate(`/detail/${schedule.scheduleId}`)}>
            {schedule.isNew && <S.NewBadge>NEW</S.NewBadge>}

            <S.CardTitle>{schedule.title}</S.CardTitle>
            <S.CardImage src={schedule.imgUrl} alt="사진" />
          </S.Card>
        ))}
      </S.CardList>

      {openPopup === 'modify' && (
        <S.ModalOverlay>
          <S.ModifyPopup>
            <S.ModifyHeader>
              <h2>수정하기</h2>
            </S.ModifyHeader>

            <S.InputBox>
              <p>제목</p>
              <input value={modifyGroupName} onChange={(e) => setModifyGroupName(e.target.value)} />
            </S.InputBox>

            <S.InputBox>
              <p>카테고리</p>

              <select value={modifyCategory} onChange={(e) => setModifyCategory(e.target.value)}>
                {categoryList.map((category) => (
                  <option key={category} value={category}>
                    {CATEGORY_LABEL[category]}
                  </option>
                ))}
              </select>
            </S.InputBox>

            <S.ButtonBox>
              <S.CancelButton onClick={() => setOpenPopup(null)}>취소</S.CancelButton>

              <S.ModifyButton onClick={handleUpdateGroup}>수정</S.ModifyButton>
            </S.ButtonBox>
          </S.ModifyPopup>
        </S.ModalOverlay>
      )}

      {openPopup === 'delete' && (
        <S.DeleteOverlay>
          <S.DeletePopup>
            <S.DeleteTitle>정말 삭제하시겠습니까?</S.DeleteTitle>

            <S.DeleteText>
              카테고리 삭제 시 저장된 모든 정보가 삭제됩니다.
              <br />
              삭제한 항목은 복구할 수 없습니다.
            </S.DeleteText>

            <S.DeleteButtonBox>
              <S.CancelButton onClick={() => setOpenPopup(null)}>취소</S.CancelButton>

              <S.DeleteButton onClick={handleDeleteGroup}>삭제</S.DeleteButton>
            </S.DeleteButtonBox>
          </S.DeletePopup>
        </S.DeleteOverlay>
      )}
    </S.GroupContainer>
  );
}

export default Group;
