import * as S from './CheckAuth.styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { putPhotoAuth } from '../api/auth';

export default function CheckPhotoAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  // 마이페이지에서 왔는지 확인
  const isFromMyPage = location.state?.fromMyPage;

  /** 사진 권한 허용 여부 전송 API 함수 */
  const handlePhotoAuth = async () => {
    try {
      await putPhotoAuth(true);
    } catch (error) {
      console.log('웹 환경 권한 API 에러 (시연을 위해 무시됨):', error);
    } finally {
      if (isFromMyPage) {
        navigate(-1);
      } else {
        navigate('/check-noti-auth');
      }
    }
  };

  return (
    <S.Container>
      <h2 style={{ color: '#7C2D12', margin: '0' }}>사진 권한 안내</h2>

      <S.ContentWrapper>
        <S.SectionTitle>사진 접근 권한</S.SectionTitle>
        <S.Description>
          CapLog는 기기 사진에서 스크린샷을 선택해
          <br />
          정리 정보를 자동으로 추출합니다.
        </S.Description>

        <S.InfoCard>
          <S.SectionTitle>접근 범위</S.SectionTitle>
          <S.Description style={{ fontSize: '12px' }}>
            • 스크린샷 또는 갤러리의 사진 등록 가능 <br />
            • 선택하지 않은 다른 사진은 접근하지 않음
            <br />• 저장된 이미지는 로컬 기기에만 보관
          </S.Description>
        </S.InfoCard>

        <S.InfoCard>
          <S.SectionTitle>보호되는 정보</S.SectionTitle>
          <S.Description style={{ fontSize: '12px' }}>
            • 저장된 정보는 CapLog 기능 외에 다른 목적으로 사용되지 않음 <br />
            • AI 분석 중 이미지는 외부 전송되지 않음
            <br />• 삭제한 정보는 완전히 제거됨
          </S.Description>
        </S.InfoCard>

        <S.Description style={{ fontSize: '12px', fontWeight: '300', textAlign: 'center' }}>
          이 설정은 언제든 기기 설정에서 변경할 수 있습니다.
        </S.Description>
      </S.ContentWrapper>

      <S.StartButton onClick={handlePhotoAuth}>사진 권한 허용하기</S.StartButton>
    </S.Container>
  );
}
