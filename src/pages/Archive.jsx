import PreviewBox from './PreviewBox';
import PreviewFilter from './PreviewFilter';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSchedules } from '../api/schedule';
import * as S from './Archive.style';
import back from '../assets/back.svg';

function Archive() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('TOTAL');
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const data = await getSchedules({
          page: 0,
          category: selectedCategory,
          searchWords: search,
        });

        setSchedules(data.result.list);
      } catch (error) {
        console.error('저장된 정보 조회 실패:', error);
      }
    };

    fetchSchedules();
  }, [selectedCategory, search]);

  return (
    <S.ArchiveContainer>
      <S.ArchiveHeader>
        <S.BackButton onClick={() => navigate('/home')}>
          <img src={back} alt="뒤로가기" />
        </S.BackButton>

        <S.Title>저장한 정보</S.Title>
      </S.ArchiveHeader>

      <S.SearchArea>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} autoFocus />
      </S.SearchArea>

      <S.FilterArea>
        <PreviewFilter selectedFilter={selectedCategory} onFilterChange={setSelectedCategory} />
      </S.FilterArea>

      {schedules.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <S.PreviewList>
          {schedules.map((item) => (
            <PreviewBox
              key={`${item.isGroup ? 'group' : 'schedule'}-${item.id}`}
              id={item.id}
              image={item.captureImg}
              title={item.title}
              isGroup={item.isGroup}
              isNew={item.isNew}
              elementCount={item.elementCount}
            />
          ))}
        </S.PreviewList>
      )}
    </S.ArchiveContainer>
  );
}

export default Archive;
