import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Notification.styles';
import LeftArrowIcon from '../assets/icons/LeftArrow.svg';
import RightArrowIcon from '../assets/icons/RightArrow.svg';
import { getAlarms } from '../api/notification';
import ImminentImg from '../assets/images/Imminent.png';
import UnviewedImg from '../assets/images/Unviewed.png';
import RecommendImg from '../assets/images/Recommend.jpg';

export default function Notification() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState('전체');
  const [alarms, setAlarms] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const filters = ['전체', '일정', '미열람', '추천'];

  const handleFilterClick = (filter) => {
    if (activeFilter === filter) return;
    setActiveFilter(filter);
    setAlarms([]);
    setPage(0);
    setHasMore(true);
  };

  useEffect(() => {
    /** 알림 목록 조회 api */
    const fetchAlarms = async () => {
      if (isLoading) return;
      if (page > 0 && !hasMore) return;

      setIsLoading(true);
      try {
        const typeMap = {
          전체: 'TOTAL',
          일정: 'IMMINENT',
          미열람: 'UNVIEWED',
          추천: 'AI_RECOMMENDED',
        };
        const data = await getAlarms(page, typeMap[activeFilter]);

        if (data.isSuccess) {
          const newAlarms = data.result.notifications || [];
          setAlarms((prev) => (page === 0 ? newAlarms : [...prev, ...newAlarms]));

          const currentPage = data.result.page.pageNumber;
          const totalPages = data.result.page.totalPage;
          setHasMore(data.result.page.pageNumber < data.result.page.totalPage);
        }
      } catch (error) {
        console.error('알림 로드 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlarms();
  }, [activeFilter, page]);

  // 무한 스크롤
  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  const getThumbnailImage = (type) => {
    switch (type) {
      case 'IMMINENT':
        return ImminentImg;
      case 'UNVIEWED':
        return UnviewedImg;
      case 'AI_RECOMMENDED':
        return RecommendImg;
      default:
        return ImminentImg;
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackIcon src={LeftArrowIcon} onClick={() => navigate('/home')} />
        <S.Title>알림</S.Title>
      </S.Header>

      {/* 카테고리 필터 */}
      <S.FilterContainer>
        {filters.map((filter) => (
          <S.FilterChip key={filter} $isActive={activeFilter === filter} onClick={() => handleFilterClick(filter)}>
            {filter}
          </S.FilterChip>
        ))}
      </S.FilterContainer>

      {/* 알림 리스트 */}
      <S.ListContainer>
        {alarms.map((noti) => (
          <S.NotificationCard key={noti.alarmId} $category={noti.alarmType}>
            <S.Thumbnail src={getThumbnailImage(noti.alarmType)} alt="알림 썸네일" />

            <S.ContentWrapper>
              <S.CardHeader>
                <S.Category>
                  {
                    {
                      TOTAL: '전체',
                      IMMINENT: '얼마 남지 않은 일정',
                      UNVIEWED: '미열람 정보',
                      AI_RECOMMENDED: 'AI 추천',
                    }[noti.alarmType]
                  }
                </S.Category>
              </S.CardHeader>
              <S.Message>{noti.message}</S.Message>
              <S.SubText>{noti.title}</S.SubText>
            </S.ContentWrapper>

            <S.NextIcon src={RightArrowIcon} />
          </S.NotificationCard>
        ))}

        {/* 더보기 버튼 (임시)
        {hasMore && (
          <button onClick={handleLoadMore} disabled={isLoading}>
            {isLoading ? '불러오는 중...' : '더보기'}
          </button>
        )} */}
      </S.ListContainer>
    </S.Container>
  );
}
