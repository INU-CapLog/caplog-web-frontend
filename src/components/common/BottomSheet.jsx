import { useState, useEffect } from 'react';
import { Sheet } from 'react-modal-sheet';
import * as S from './BottomSheet.styles';
import { useNavigate } from 'react-router-dom';
import { getCategoryList, getGroupList, confirmUpload } from '../../api/upload';
import AiLogo from '../../assets/icons/AiLogo.svg';

export default function BottomSheet({ isOpen, onClose, aiResult }) {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);
  const [scheduleData, setScheduleData] = useState({
    title: '',
    aiSummary: '',
    captureImg: '',
    category: '',
    topic: '',
    details: '',
  });

  const [events, setEvents] = useState([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  // 카테고리, 그룹 옵션 불러오기
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [catRes, groupRes] = await Promise.all([getCategoryList(), getGroupList(0)]);
        if (catRes.isSuccess) setCategories(catRes.result.categories);
        if (groupRes.isSuccess) setGroups(groupRes.result.groupList);
      } catch (error) {
        console.error('분류 옵션 로드 실패:', error);
      }
    };
    fetchOptions();
  }, []);

  // 데이터 매핑
  useEffect(() => {
    if (isOpen && aiResult) {
      const timer = setTimeout(() => {
        let matchedTopic = aiResult.groupId || '';

        if (!matchedTopic && aiResult.group && groups.length > 0) {
          const foundGroup = groups.find((g) => g.groupName.trim() === aiResult.group.trim());
          if (foundGroup) {
            matchedTopic = foundGroup.groupId;
          }
        }

        setScheduleData({
          title: aiResult.title || '',
          aiSummary: aiResult.scheduleAiSummary || '',
          captureImg: aiResult.imageId || '',
          category: REVERSE_CATEGORY_MAP[aiResult.category] || '',
          topic: matchedTopic ? String(matchedTopic) : '',
          details: aiResult.scheduleDetails || aiResult.events?.[0]?.details || '',
        });

        const initialEvents = (aiResult.events || []).map((event) => ({
          ...event,
          isChecked: true,
        }));
        setEvents(initialEvents);
      }, 200);

      return () => clearTimeout(timer);
    } else if (!isOpen) {
      setEvents([]);
    }
  }, [isOpen, aiResult, groups]);

  const handleScheduleChange = (e) => {
    const { name, value } = e.target;
    setScheduleData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventChange = (index, field, value) => {
    setEvents((prev) => {
      const newEvents = [...prev];
      newEvents[index] = { ...newEvents[index], [field]: value };
      return newEvents;
    });
  };

  const handleCancelClick = () => setIsConfirmModalOpen(true);
  const handleConfirmNo = () => setIsConfirmModalOpen(false);
  const handleConfirmYes = () => {
    setIsConfirmModalOpen(false);
    onClose();
  };

  const CATEGORY_MAP = {
    학습: 'STUDY',
    학교: 'SCHOOL',
    일상: 'DAILY',
    기타: 'ETC',
  };

  const REVERSE_CATEGORY_MAP = {
    STUDY: '학습',
    SCHOOL: '학교',
    DAILY: '일상',
    ETC: '기타',
  };

  /** 업로드 확정 API */
  const handleSubmit = async () => {
    const selectedEvents = events.filter((e) => e.isChecked);

    const formattedEvents = selectedEvents.map((e) => ({
      isChecked: true,
      title: e.title || '',
      details: scheduleData.details || '',
      aiSummary: scheduleData.aiSummary || '',
      videoUrl: e.videoUrl || '',
      date: e.date || null,
      startAt: e.startAt || null,
      endAt: e.endAt || null,
    }));

    const hasGroup = !!scheduleData.topic;

    const payload = {
      imageId: Number(scheduleData.captureImg) || 0,
      title: scheduleData.title || '',
      category: CATEGORY_MAP[scheduleData.category] || 'ETC',
      scheduleAiSummary: scheduleData.aiSummary || '',
      group: hasGroup ? scheduleData.topic : 'NONE',
      groupId: hasGroup && !isNaN(Number(scheduleData.topic)) ? Number(scheduleData.topic) : 0,
      events: formattedEvents,
    };

    try {
      const response = await confirmUpload(payload);

      if (response.isSuccess) {
        alert('일정이 성공적으로 등록되었습니다!');
        onClose();
        navigate('/home');
      } else {
        alert(response.message || '등록 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('업로드 확정 에러:', error);
      alert('서버와 통신할 수 없습니다.');
    }
  };

  return (
    <>
      <Sheet isOpen={isOpen} onClose={handleCancelClick} snapPoints={[0, 0.8, 1]} initialSnap={1}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <S.SheetContainer>
              <S.HeaderRow>
                <S.Title>등록하기</S.Title>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <img src={AiLogo} width={'5%'} alt="AI Logo" />
                  <S.SubTitle>CapLog AI가 분석했어요!</S.SubTitle>
                </div>
              </S.HeaderRow>

              <S.WarningBox>AI가 분석한 내용에 오류가 있을 수 있어요. 저장 전 확인해주세요.</S.WarningBox>

              <S.FormGroup>
                <S.Label>제목</S.Label>
                <S.Input name="title" value={scheduleData.title} onChange={handleScheduleChange} />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>일정</S.Label>
                {events.map((event, index) => (
                  <S.ScheduleRow key={index} style={{ marginBottom: events.length > 1 ? '10px' : '0' }}>
                    <S.Input
                      type="datetime-local"
                      value={event.startAt ? event.startAt.substring(0, 16) : ''}
                      onChange={(e) => handleEventChange(index, 'startAt', e.target.value)}
                      disabled={!event.isChecked}
                    />
                    <S.CheckboxWrapper
                      $isChecked={event.isChecked}
                      onClick={() => handleEventChange(index, 'isChecked', !event.isChecked)}
                    >
                      {event.isChecked && '✓'}
                    </S.CheckboxWrapper>
                  </S.ScheduleRow>
                ))}
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>세부사항</S.Label>
                <S.TextArea name="details" value={scheduleData.details} onChange={handleScheduleChange} />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>AI 요약</S.Label>
                <S.TextArea name="aiSummary" value={scheduleData.aiSummary} onChange={handleScheduleChange} />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>저장 위치</S.Label>
                <S.SelectRow>
                  <S.SelectGroup>
                    <S.SubLabel>카테고리</S.SubLabel>
                    <S.Select name="category" value={scheduleData.category} onChange={handleScheduleChange}>
                      <option value="">카테고리 선택</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </S.Select>
                  </S.SelectGroup>

                  <S.SelectGroup>
                    <S.SubLabel>주제</S.SubLabel>
                    <S.Select name="topic" value={scheduleData.topic} onChange={handleScheduleChange}>
                      <option value="">주제 선택</option>
                      {groups.map((grp) => (
                        <option key={grp.groupId} value={grp.groupId}>
                          {grp.groupName}
                        </option>
                      ))}
                    </S.Select>
                  </S.SelectGroup>
                </S.SelectRow>
              </S.FormGroup>

              <S.ButtonGroup>
                <S.CancelButton onClick={handleCancelClick}>취소</S.CancelButton>
                <S.SubmitButton onClick={handleSubmit}>등록</S.SubmitButton>
              </S.ButtonGroup>
            </S.SheetContainer>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={handleCancelClick} />
      </Sheet>

      {/* 취소 모달 */}
      {isConfirmModalOpen && (
        <S.ModalOverlay>
          <S.ModalBox>
            <S.ModalTitle>등록을 취소하시겠습니까?</S.ModalTitle>
            <S.ModalDesc>작성 중인 정보가 저장되지 않습니다.</S.ModalDesc>
            <S.ModalButtonGroup>
              <S.ModalNoButton onClick={handleConfirmNo}>아니오</S.ModalNoButton>
              <S.ModalYesButton onClick={handleConfirmYes}>예</S.ModalYesButton>
            </S.ModalButtonGroup>
          </S.ModalBox>
        </S.ModalOverlay>
      )}
    </>
  );
}
