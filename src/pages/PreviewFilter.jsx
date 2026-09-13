import { useState } from 'react';
import styled from 'styled-components';

// 스타일
const FilterContainer = styled.div`
  display: flex;
  gap: 7px;
`;

const FilterButton = styled.button`
  width: 61px;
  height: 31px;

  border: none;
  border-radius: 16px;

  background-color: ${(props) => (props.$active ? '#b55116' : '#FFF0DD')};

  color: ${(props) => (props.$active ? '#fff0dd' : '#b55116')};

  font-size: 12px;
  font-weight: medium;

  cursor: pointer;
`;
// 스타일 끝

const filters = [
  { label: '전체', value: 'TOTAL' },
  { label: '공부', value: 'STUDY' },
  { label: '학교', value: 'SCHOOL' },
  { label: '일상', value: 'DAILY' },
  { label: '기타', value: 'ETC' },
];

function PreviewFilter({ selectedFilter, onFilterChange }) {
  return (
    <FilterContainer>
      {filters.map((filter) => (
        <FilterButton
          key={filter.value}
          type="button"
          $active={selectedFilter === filter.value}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
}

export default PreviewFilter;
