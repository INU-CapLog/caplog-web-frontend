import * as S from './BottomNav.styles';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '../../assets/icons/Home.svg';
import CalendarIcon from '../../assets/icons/Calendar.svg';
import UploadIcon from '../../assets/icons/Upload.svg';
import ProfileIcon from '../../assets/icons/Profile.svg';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      path: '/home',
      activePaths: ['/home', '/archive', '/group', '/detail', '/notification'],
      icon: <img src={HomeIcon} alt="홈" />,
    },
    {
      path: '/calendar',
      activePaths: ['/calendar'],
      icon: <img src={CalendarIcon} alt="캘린더" />,
    },
    {
      path: '/upload',
      activePaths: ['/upload'],
      icon: <img src={UploadIcon} alt="업로드" />,
    },
    {
      path: '/mypage',
      activePaths: ['/mypage'],
      icon: <img src={ProfileIcon} alt="마이페이지" />,
    },
  ];

  return (
    <S.NavContainer>
      {navItems.map((item) => {
        const isActive = item.activePaths.some(
          (path) => location.pathname === path || location.pathname.startsWith(`${path}/`),
        );

        return (
          <S.NavItem key={item.path} $isActive={isActive} onClick={() => navigate(item.path)}>
            {item.icon}
          </S.NavItem>
        );
      })}
    </S.NavContainer>
  );
}
