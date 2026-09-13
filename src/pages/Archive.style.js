import styled from 'styled-components';

export const ArchiveContainer = styled.div`
  width: 100%;
  height: 100dvh;
  overflow-y: auto;

  box-sizing: border-box;

  padding: 52px 17px 100px;

  background-color: #fffbf6;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ArchiveHeader = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;
`;

export const BackButton = styled.button`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;
  padding: 0;

  cursor: pointer;

  img {
    width: 12px;
    height: 20px;
  }
`;

export const Title = styled.h2`
  margin: 0;

  color: #7c2d12;

  font-size: 16px;
  font-weight: 700;
`;

export const SearchArea = styled.div`
  margin-top: 24px;
`;

export const FilterArea = styled.div`
  margin-top: 16px;
`;

export const PreviewList = styled.div`
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  column-gap: 16px;
  row-gap: 16px;

  margin-top: 40px;
`;
