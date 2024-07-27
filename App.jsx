import React, { useState } from 'react';
import './App.css';



const App = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const toggleButton = (label) => {
    setSelectedButtons((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((item) => item !== label)
        : [...prevSelected, label]
    );
  };



  return (
    <div className="app-container">
      <div className="pop">
        <button id="closePopup"> x </button>
      </div>
      <div className="ppup">
        <button id="backButton"> ← </button>
      </div>

      <div className="popup">
        <h1>SafeSurf</h1>
        <div className="line-above"></div>

        <div className="title">
          <p>필터</p>
        </div>

        <div className="section">
          <h2>사회적 유해</h2>
          <p> 혐오 발언과 정치적 선전 및 조작 검열 </p>
          <div className="buttons">
            <button
              onClick={() => toggleButton('혐오')}
              className={selectedButtons.includes('혐오') ? 'selected' : ''}
            >
              혐오
            </button>
            <button
              onClick={() => toggleButton('정치')}
              className={selectedButtons.includes('정치') ? 'selected' : ''}
            >
              정치
            </button>
            <button
              onClick={() => toggleButton('광고')}
              className={selectedButtons.includes('광고') ? 'selected' : ''}
            >
              광고
            </button>
          </div>
        </div>

        <div className="section">
          <h2>불법 및 위험</h2>
          <p> 법적으로 금지되거나 사회적으로 유해한 콘텐츠 검열 </p>
          <div className="buttons">
            <button
              onClick={() => toggleButton('음란')}
              className={selectedButtons.includes('음란') ? 'selected' : ''}
            >
              음란
            </button>
            <button
              onClick={() => toggleButton('폭력')}
              className={selectedButtons.includes('폭력') ? 'selected' : ''}
            >
              폭력
            </button>
            <button
              onClick={() => toggleButton('도박')}
              className={selectedButtons.includes('도박') ? 'selected' : ''}
            >
              도박
            </button>
            <button
              onClick={() => toggleButton('불법')}
              className={selectedButtons.includes('불법') ? 'selected' : ''}
            >
              불법
            </button>
          </div>
        </div>

        <div className="section">
          <h2>정신적 위험</h2>
          <p> 정신 건강에 악영향을 미칠 수 있는 콘텐츠 검열 </p>
          <div className="buttons">
            <button
              onClick={() => toggleButton('우울')}
              className={selectedButtons.includes('우울') ? 'selected' : ''}
            >
              우울
            </button>
            <button
              onClick={() => toggleButton('자살')}
              className={selectedButtons.includes('자살') ? 'selected' : ''}
            >
              자살
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
