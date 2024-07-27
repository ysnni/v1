import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [warningVisible, setWarningVisible] = useState(true);

  const navigate = (url) => {
    window.location.href = url;
  };

  const scrollUp = () => {
    const linkContent = document.getElementById('link-content');
    linkContent.scrollBy({
      top: -30,
      behavior: 'smooth',
    });
  };

  const scrollDown = () => {
    const linkContent = document.getElementById('link-content');
    linkContent.scrollBy({
      top: 30,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app">
      <div className="pop">
        <button id="closebutton">x</button>
      </div>

      <div className="popup">
        <h1>SafeSurf</h1>
      </div>

      <div className="title">
        <button
          id="fishingSense"
          onClick={() => setWarningVisible(!warningVisible)}
        >
          피싱 사이트 감지
        </button>
      </div>

      <div className="line-above"></div>
      {warningVisible && (
        <div className="warning-popup" id="warning-popup">
          <div className="warning-content">
            <p>피싱사이트 차단이 현재 꺼져있습니다.</p>
            <p1>개인정보 보호를 위해 피싱사이트 차단 활성화를 추천합니다.</p1>
          </div>
        </div>
      )}

      <div className="link-list">
        <div className="link-popup" id="Link-popup">
          <div className="link-content" id="link-content">
            <p href="#" id="link1" onClick={() => navigate('https://google.co.kr')}>
              피싱링크 1
            </p>
            <p href="#" id="link2" onClick={() => navigate('https://merci.tistory.com')}>
              피싱링크 2
            </p>
            <p href="#" id="link3" onClick={() => navigate('https://www.nhn-commerce.com')}>
              피싱링크 3
            </p>
          </div>
        </div>
      </div>

      <button onClick={scrollUp}>Scroll Up</button>
      <button onClick={scrollDown}>Scroll Down</button>
    </div>
  );
};

export default App;
