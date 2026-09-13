import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 스타일
const PreviewTitle = styled.p`
  width: 100%;
  height: 42px;

  margin: 0;
  padding: 0 8px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff0dd;

  font-size: 12px;
  font-weight: 600;
  color: #b55116;

  // 색상 변경을 부드럽게
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
`;

const PreviewBoxContainer = styled.button`
  position: relative;

  width: 100%;
  min-width: 0;
  height: 220px;

  padding: 0;
  border: none;
  border-radius: 14px;
  overflow: hidden;

  background: none;
  cursor: pointer;

  // 마우스를 올렸을 때 제목 부분만 변경
  &:hover ${PreviewTitle} {
    background-color: #b55116;
    color: #fff0dd;
  }

  // 클릭하고 있는 동안 제목 부분만 변경
  &:active ${PreviewTitle} {
    background-color: #b55116;
    color: #fff0dd;
  }
`;
const PreviewImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 178px;
`;

const PreviewImage = styled.img`
  display: block;
  width: 100%;
  height: 178px;
  object-fit: cover;
`;

const NewBadge = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;

  padding: 4px 7px;

  border-radius: 10px;
  background-color: #f03232;

  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
`;

const CountBadge = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;

  padding: 4px 7px;

  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.55);

  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
`;

// 스타일 끝

function PreviewBox({ id, image, title, isGroup, isNew, elementCount }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isGroup) {
      navigate(`/group/${id}`);
    } else {
      navigate(`/detail/${id}`);
    }
  };

  return (
    <PreviewBoxContainer type="button" onClick={handleClick}>
      <PreviewImageWrapper>
        <PreviewImage src={image} alt={title} />

        {isNew && <NewBadge>NEW</NewBadge>}

        {isGroup && elementCount > 1 && <CountBadge>+{elementCount}</CountBadge>}
      </PreviewImageWrapper>

      <PreviewTitle $isGroup={isGroup}>{title}</PreviewTitle>
    </PreviewBoxContainer>
  );
}

export default PreviewBox;
