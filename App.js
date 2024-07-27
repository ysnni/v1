// function toggleButton(button) {
//   button.classList.toggle('active');
// }


// document.getElementById("closePopup").addEventListener("click", function() {
//   document.getElementById("popupOverlay").style.display = "none";
//   document.getElementById("popup").style.display = "none";
// });


// const openHateButton = document.getElementById('openHatePopup');
// const hatePopup = document.getElementById('hatePopup');
// const closeHateButton = document.getElementById('closeHatePopup');

// openHateButton.addEventListener('click', () => {
//   hatePopup.style.display = 'block';
// });

// closeHateButton.addEventListener('click', () => {
//   hatePopup.style.display = 'none';
// });


// const openPoliticsButton = document.getElementById('openPoliticsPopup');
// const politicsPopup = document.getElementById('politicsPopup');
// const closePoliticsButton = document.getElementById('closePoliticsPopup');

// openPoliticsButton.addEventListener('click', () => {
//   politicsPopup.style.display = 'block';
// });

// closePoliticsButton.addEventListener('click', () => {
//   politicsPopup.style.display = 'none';
// });

// const openAdsButton = document.getElementById('openAdsPopup');
// const adsPopup = document.getElementById('adsPopup');
// const closeAdsButton = document.getElementById('closeAdsPopup');

// openAdsButton.addEventListener('click', () => {
//   adsPopup.style.display = 'block';
// });

// closeAdsButton.addEventListener('click', () => {
//   adsPopup.style.display = 'none';
// });


// window.addEventListener('click', (event) => {
//   if (event.target === hatePopup) {
//       hatePopup.style.display = 'none';
//   }
//   if (event.target === politicsPopup) {
//       politicsPopup.style.display = 'none';
//   }
//   if (event.target === adsPopup) {
//       adsPopup.style.display = 'none';
//   }
// });



function showWarning() {
  document.getElementById('warning').style.display = 'flex';
}

function closeWarning() {
  document.getElementById('warning').style.display = 'none';
}


// function showWarning() {
//   document.getElementById('warning').style.display = 'flex';
// }

// function closeWarning() {
//   document.getElementById('warning').style.display = 'none';
// }


function showWarning() {
  document.getElementById('warning').style.display = 'flex';
}

function closeWarning() {
  document.getElementById('warning').style.display = 'none';
}

function closeWarning() {
  document.getElementById('warning-popup').style.display = 'none';
}

function navigate(url) {
  window.location.href = url;
}

