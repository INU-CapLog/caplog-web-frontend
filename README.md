
# Caplog

스크린샷을 업로드하고 분류해 보관하는 AI 기반 캡처 정보 관리 서비스입니다. 저장한 이미지를 그룹과 캘린더에서 확인할 수 있습니다.

## 주요 기능

- **회원 관리:** 회원가입, 로그인, 프로필 수정
- **스크린샷 관리:** 이미지 업로드, 상세 조회, 그룹별 보관
- **아카이브:** 저장한 스크린샷을 모아보고 검색
- **캘린더:** 날짜별로 저장한 스크린샷 확인
- **알림:** 알림 목록 확인 및 알림 설정

## 기술 스택

- **Frontend:** React, JavaScript, Vite
- **Styling:** styled-components
- **Routing:** React Router
- **UI:** Framer Motion, Swiper
- **API:** Axios

## 실행 방법

```bash
git clone https://github.com/INU-CapLog/caplog-web-frontend.git
cd caplog-web-frontend
npm install
npm run dev
```

프로덕션 빌드는 다음 명령어로 생성합니다.

```bash
npm run build
```

API 연동 기능을 사용하려면 별도의 백엔드 서버 연결 및 환경 설정이 필요합니다.

## 관련 링크

- [웹 서비스](https://www.caplog.site)
- [GitHub Repository](https://github.com/INU-CapLog/caplog-web-frontend)

## 커밋 메시지 규칙

| 태그 | 설명 |
| --- | --- |
| `Feat` | 새로운 기능 추가 |
| `Fix` | 버그 수정 |
| `Docs` | 문서 수정 |
| `Style` | 코드 포맷팅 |
| `Refactor` | 코드 리팩토링 |
| `Test` | 테스트 코드 작성 |
| `Chore` | 기타 설정 |
