import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [activeButton, setActiveButton] = useState('for-you');
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <div className="upper">
        <Link to={'/'}><span className="home-title">Anasayfa</span></Link>
        <div className="upper-buttons">
          <div
            className={`for-you ${activeButton === 'for-you' ? 'active-button' : ''}`}
            onClick={() => handleButtonClick('for-you')}
          >
            Sana özel
          </div>
          <div
            className={`followed ${activeButton === 'followed' ? 'active-button' : ''}`}
            onClick={() => handleButtonClick('followed')}
          >
            Takip edilenler
          </div>
        </div>
      </div>
    </div>
  );
}
