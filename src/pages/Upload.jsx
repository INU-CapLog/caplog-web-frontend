import { useRef, useState, useEffect } from 'react';
import * as S from './Upload.styles';
import GalleryIcon from '../assets/icons/Gallery.svg';
import { analyzeImage } from '../api/upload';
import UploadLoading from '../components/common/UploadLoading';
import BottomSheet from '../components/common/BottomSheet';

export default function Upload() {
  const fileInputRef = useRef(null);

  const [previewImage, setPreviewImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [aiResult, setAiResult] = useState(null);

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);

    // 기존에 생성된 미리보기 URL이 있다면 삭제
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }

    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };

  /** 사진 업로드 API */
  const handleSubmit = async () => {
    if (!imageFile) {
      alert('사진을 먼저 선택해주세요.');
      return;
    }
    setIsLoading(true);

    // 주석은 테스트용 코드
    try {
      const data = await analyzeImage(imageFile);
      // await new Promise((resolve) => setTimeout(resolve, 1500));

      // const dummyData = {
      //   schedule: {
      //     title: '데이터수학통계 중간고사',
      //     captureImg: previewImage,
      //     aiSummary: '요약 데이터',
      //     group: 'NONE',
      //   },
      //   events: [
      //     {
      //       Id: 'temp-id-1',
      //       title: '데이터수학통계 시험',
      //       dateTime: '2026-04-22T15:00',
      //       details: '📍 장소: 5호관 301호',
      //     },
      //   ],
      // };

      // setAiResult(dummyData);
      // setIsSheetOpen(true);

      if (data.isSuccess) {
        setAiResult(data.result); // 서버에서 준 분석 데이터 저장
        setIsSheetOpen(true); // 바텀시트 열기
      } else {
        alert(data.message || '분석 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('업로드 실패 원인:', error);
      const errorMsg = error.response?.data?.message || error.message;
      const statusCode = error.response?.status || '상태코드 없음';
      alert(`[업로드 실패]\n코드: ${statusCode}\n이유: ${errorMsg}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (previewImage) URL.revokeObjectURL(previewImage);
    };
  }, [previewImage]);

  return (
    <S.Container>
      <S.Header>사진 등록</S.Header>
      <S.UploadBox onClick={handleBoxClick}>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        {previewImage ? (
          <S.PreviewImg src={previewImage} />
        ) : (
          <>
            <img src={GalleryIcon} width="64" alt="갤러리 아이콘" />
            <S.Description style={{ margin: '20px 0 0 0' }}>터치하여 사진 추가</S.Description>
          </>
        )}
      </S.UploadBox>
      <S.Description>
        기기에 저장된 스크린샷을 선택하세요.
        <br />
        선택한 항목은 CapLog에 저장되어 AI 분석 대상이 됩니다.
        <br />
        <br />
        등록 후 AI가 제목, 핵심 내용, 일정을 추출합니다.
      </S.Description>

      <S.SubmitButton onClick={handleSubmit} disabled={!imageFile || isLoading}>
        {isLoading ? 'AI가 분석하고 있어요...' : '사진 분석하기'}
      </S.SubmitButton>

      {isLoading && <UploadLoading />}

      <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} aiResult={aiResult} />
    </S.Container>
  );
}
