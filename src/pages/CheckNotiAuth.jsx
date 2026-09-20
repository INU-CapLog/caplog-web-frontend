import * as S from './CheckAuth.styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { putNotiAuth } from '../api/auth';

export default function CheckNotiAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  // 마이페이지에서 왔는지 확인
  const isFromMyPage = location.state?.fromMyPage;

  /** 알림 권한 허용 여부 전송 API 함수 */
  const handleNotiAuth = async () => {
    try {
      await putNotiAuth(true);
    } catch (error) {
      console.log('웹 환경 알림 API 에러 (시연을 위해 무시됨):', error);
    } finally {
      if (isFromMyPage) {
        navigate(-1);
      } else {
        navigate('/home');
      }
    }
  };

  return (
    <S.Container>
      <h2 style={{ color: '#7C2D12', margin: '0' }}>알림 권한 안내</h2>
      <S.ContentWrapper>
        <S.SectionTitle>알림 접근 권한</S.SectionTitle>
        <S.Description>
          CapLog가 중요한 일정을 놓치지 않도록, <br />
          맞춤 알림을 보내기 위한 알림 권한이 필요합니다.
        </S.Description>

        <S.InfoCard>
          <S.SectionTitle>접근 범위</S.SectionTitle>
          <S.Description style={{ fontSize: '12px' }}>
            • CapLog에서 보내는 알림만 수신 가능 <br />• CapLog 알림 외 다른 목적으로 사용하지 않음
          </S.Description>
        </S.InfoCard>

        <S.InfoCard>
          <S.SectionTitle>받을 수 있는 알림</S.SectionTitle>
          <S.Description style={{ fontSize: '12px' }}>
            • 마감이 얼마 남지 않은 일정 <br />
            • 한 번도 열람하지 않은 저장 정보
            <br />• 일정이 없어도 다시 활용하면 좋을 정보
          </S.Description>
        </S.InfoCard>

        <S.Description style={{ fontSize: '12px', fontWeight: '300', textAlign: 'center' }}>
          이 설정은 언제든 기기 설정에서 변경할 수 있습니다.
        </S.Description>
      </S.ContentWrapper>
      <S.StartButton onClick={handleNotiAuth}>{isFromMyPage ? '돌아가기' : '알림 권한 허용하기'}</S.StartButton>{' '}
    </S.Container>
  );
}
