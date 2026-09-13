import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 430px;
  height: 100dvh;
  margin: 0 auto;

  padding: 0 20px 100px;
  box-sizing: border-box;
  background-color: #fffbf6;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.header`
  height: 115px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 76px;
  height: auto;
  display: block;
  color: #f55116;
`;

export const AlarmArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AlarmMessage = styled.div`
  position: relative;
  width: fit-content;
  max-width: 310px;

  height: 31px;

  padding: 0 14px;

  display: flex;
  align-items: center;

  box-sizing: border-box;

  background-color: #ffd1a1;

  border-radius: 999px;

  color: #b55116;
  font-size: 8px;
  font-weight: semibold;

  white-space: nowrap;

  &::after {
    content: '';

    position: absolute;

    top: 50%;
    right: -7px;

    transform: translateY(-50%);

    width: 0;
    height: 0;

    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 9px solid #ffd1a1;
  }
`;

export const AlarmButton = styled.button`
  position: relative;

  border: none;
  background: none;
  padding: 0;

  color: #b55116;

  cursor: pointer;
`;

export const AlarmBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -7px;

  min-width: 16px;
  height: 16px;
  padding: 0 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  border-radius: 999px;
  background-color: #f03232;

  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
`;

export const MemoryBox = styled.section`
  position: relative;

  padding: 32px 12px 12px;

  border-radius: 15px;
  background-color: #ffd1a1;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
`;

export const SpringRow = styled.div`
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 0 16px;
  box-sizing: border-box;
  pointer-events: none;
`;

export const Spring = styled.span`
  width: 8px;
  height: 17px;

  border-radius: 999px;

  background-color: #b55116;

  flex-shrink: 0;
`;

export const MemoryTitle = styled.p`
  margin: 0 0 20px 8px;

  font-size: 17px;
  font-weight: 700;
  color: #7c2d12;
`;

export const MemoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-height: 188px;
  overflow-y: auto;

  margin: 0;
  padding: 0;

  list-style: none;
`;

// D-day 버튼
export const Dday = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 12px;

  border-radius: 30px;

  background-color: ${({ $active }) => ($active ? '#b55116' : '#fdba74')};
  color: ${({ $active }) => ($active ? '#fff0dd' : '#7c2d12')};

  font-size: 11px;
  font-weight: 600;

  /* 색상 변경을 부드럽게 */
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
`;

export const MemoryItem = styled.li`
  width: 100%;
  padding: 3px 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  border-radius: 10px;
  background-color: #fff7ed;

  cursor: pointer;

  font-size: 13px;
  font-weight: semibold;
  color: #b55116;

  /* 메모리 리스트 한 줄에 커서를 올렸을 때 D-day만 색상 변경 */
  &:hover ${Dday} {
    background-color: #b55116;
    color: #fff0dd;
  }

  /* 클릭하고 있는 동안에도 동일한 색상 */
  &:active ${Dday} {
    background-color: #b55116;
    color: #fff0dd;
  }
`;

export const MemoryRight = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  flex-shrink: 0;
`;

export const ArrowButton = styled.button`
  border: none;
  background: none;

  padding: 4px;

  font-size: 24px;
  line-height: 1;

  cursor: pointer;
`;

export const PreviewSection = styled.section`
  margin-top: 22px;
`;

export const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;

  padding: 0 10px;
`;

export const SearchSection = styled.div`
  margin-top: 20px;
`;

export const PreviewTitle = styled.p`
  margin: 0;

  font-size: 14.5px;
  font-weight: 600;
  color: #7c2d12;
`;

export const AllButton = styled.button`
  border: none;
  background: none;

  padding: 0;

  font-size: 10px;
  font-weight: medium;
  color: #7c2d12;

  cursor: pointer;
`;

export const PreviewList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 370px;
  margin: 0 auto; /* 가운데 정렬 */
`;

export const FilterSection = styled.div`
  width: min(370px, 100%);
  margin: 0 auto 16px;
`;
