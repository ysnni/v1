import styles from './App.modeule.css';


import logo from './logo.svg';
import './App.css';

<p className={Styles.title2}></p>





document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
});

document.getElementById("backButton").addEventListener("click", function() {
    history.back();
});






const openHateButton = document.getElementById('openHatePopup');
const hatePopup = document.getElementById('hatePopup');
const closeHateButton = document.getElementById('closeHatePopup');

openHateButton.addEventListener('click', () => {
    hatePopup.style.display = 'block';
});

closeHateButton.addEventListener('click', () => {
    hatePopup.style.display = 'none';
});


const openPoliticsButton = document.getElementById('openPoliticsPopup');
const politicsPopup = document.getElementById('politicsPopup');
const closePoliticsButton = document.getElementById('closePoliticsPopup');

openPoliticsButton.addEventListener('click', () => {
    politicsPopup.style.display = 'block';
});

closePoliticsButton.addEventListener('click', () => {
    politicsPopup.style.display = 'none';
});

const openAdsButton = document.getElementById('openAdsPopup');
const adsPopup = document.getElementById('adsPopup');
const closeAdsButton = document.getElementById('closeAdsPopup');

openAdsButton.addEventListener('click', () => {
    adsPopup.style.display = 'block';
});

closeAdsButton.addEventListener('click', () => {
    adsPopup.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === hatePopup) {
        hatePopup.style.display = 'none';
    }
    if (event.target === politicsPopup) {
        politicsPopup.style.display = 'none';
    }
    if (event.target === adsPopup) {
        adsPopup.style.display = 'none';
    }
});








function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
