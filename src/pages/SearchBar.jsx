import styled from 'styled-components';
import search from '../assets/search.svg';

// 스타일
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 37px;

  padding: 0 6px 0 14px;
  box-sizing: border-box;

  border-radius: 20px;
  background-color: #fff0dd;
`;

const SearchBarInput = styled.input`
  flex: 1;
  min-width: 0;

  background: transparent;
  border: none;
  outline: none;

  font-size: 12px;
  color: #b55116;

  &::placeholder {
    color: #b55116;
  }
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  padding: 0;
  border: none;
  border-radius: 50%;

  background-color: #b55116;
  cursor: pointer;
  flex-shrink: 0;

  img {
    width: 15px;
    height: 15px;
  }
`;
// 스타일 끝

function SearchBar({ onClick, value, onChange, autoFocus }) {
  return (
    <SearchBarContainer onClick={onClick}>
      <SearchBarInput
        type="search"
        placeholder="검색"
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
      />

      <SearchButton>
        <img src={search} alt="검색" />
      </SearchButton>
    </SearchBarContainer>
  );
}

export default SearchBar;
