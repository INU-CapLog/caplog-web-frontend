import { useLocation } from 'react-router-dom';

export default function SharePage() {
  const { state } = useLocation();

  return (
    <div>
      <h2>공유된 이미지</h2>
      {state?.imageUrl && <img src={state.imageUrl} alt="shared content" />}
    </div>
  );
}
