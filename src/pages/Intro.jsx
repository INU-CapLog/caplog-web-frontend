import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import * as S from './Intro.styles.js';
import Logo from '../assets/icons/Logo.png';
import Onboarding1 from '../assets/images/Onboarding_1.png';
import Onboarding2 from '../assets/images/Onboarding_2.png';

const ONBOARDING_DATA = [
  {
    id: 1,
    isIntro: true,
    title: '캡처하는 순간,\n필요할 때 다시 꺼내드려요',
  },
  {
    id: 2,
    isIntro: false,
    title: 'AI가 정리해주고\n자동으로 기억해요.',
    desc: '캡처하면 AI가 내용을 분석해 제목, 요약, 일정 등을\n추출하고 자동으로 저장해요.',
    image: Onboarding1,
  },
  {
    id: 3,
    isIntro: false,
    title: '필요할 때\n다시 알려드려요.',
    desc: '마감일 전 알림은 물론,\n잊고 있던 정보도 다시 꺼내드려요.',
    image: Onboarding2,
  },
];

export default function Intro() {
  const navigate = useNavigate();
  const location = useLocation();
  const isFromMyPage = location.state?.fromMyPage; // 마이페이지에서 온 경우 확인

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    if (activeIndex === ONBOARDING_DATA.length - 1) {
      if (isFromMyPage) {
        navigate(-1);
      } else {
        navigate('/login');
      }
    } else {
      swiperInstance?.slideNext();
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <S.Container $activeIndex={activeIndex}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          renderBullet: function (index, className) {
            if (index === 0) {
              return '<span class="' + className + '" style="display: none !important;"></span>';
            }
            return '<span class="' + className + '"></span>';
          },
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{ width: '100%', height: '100%' }}
      >
        {ONBOARDING_DATA.map((data) => (
          <SwiperSlide key={data.id}>
            <S.SlideWrapper>
              {data.isIntro ? (
                // 1번 화면
                <S.IntroBox>
                  <img src={Logo} style={{ width: '40%' }} />
                  <S.Title
                    style={{
                      margin: '40px 0 0 0',
                      fontSize: '16px',
                      fontWeight: '500',
                    }}
                  >
                    {data.title}
                  </S.Title>
                </S.IntroBox>
              ) : (
                // 2, 3번 화면
                <S.FeatureBox>
                  <S.Title>{data.title}</S.Title>
                  <S.Desc>{data.desc}</S.Desc>
                  <S.MockupImage>
                    <img src={data.image} />
                  </S.MockupImage>
                </S.FeatureBox>
              )}
            </S.SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>

      <S.PaginationWrapper $isVisible={activeIndex > 0}>
        <div className="custom-pagination" />
      </S.PaginationWrapper>

      <S.ButtonWrapper>
        <S.SubmitButton onClick={handleNextClick}>
          {activeIndex === ONBOARDING_DATA.length - 1 ? (isFromMyPage ? '돌아가기' : '시작하기') : '다음'}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Container>
  );
}
