// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  
  const hornImg = document.querySelector('header + img');
  const hornSelection = document.getElementById('horn-select');
  const audio = document.querySelector('audio');
  const volCtrl = document.getElementById('volume');
  const volImg = document.querySelector('#volume-controls > img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti()

  hornSelection.addEventListener('change', (event) => selectHorn(event, hornImg, audio));
  volCtrl.addEventListener('input', (event) => adjustVol(event, audio, volImg));
  playButton.addEventListener('click', (event) => playHorn(event, audio, jsConfetti));

}


function selectHorn(event, img, audio)
{
  switch(event.target.value)
  {
    case 'air-horn':
      img.src = 'assets/images/air-horn.svg';
      img.alt = 'Air horn image';
      audio.src = 'assets/audio/air-horn.mp3';
      break;
    case 'car-horn':
      img.src = 'assets/images/car-horn.svg';
      img.alt = 'Car horn image';
      audio.src = 'assets/audio/car-horn.mp3';
      break;
    case 'party-horn':
      img.src = 'assets/images/party-horn.svg';
      img.alt = 'Party horn image';
      audio.src = 'assets/audio/party-horn.mp3';
      break;
    default:
      img.src = 'assets/images/no-image.png';
      img.alt = 'No image selected';
      audio.src = '';
      break;
  }
}
function adjustVol(event, audio, img)
{
  let vol = event.target.value;
  audio.volume = vol / 100;

  if( vol >= 1 && vol < 33 ) {
    img.src = 'assets/icons/volume-level-1.svg';
    img.alt = 'Volume level 1';
  }
  else if( vol >= 33 && vol < 67 ) {
    img.src = 'assets/icons/volume-level-2.svg';
    img.alt = 'Volume level 2';
  }
  else if( vol >= 67 ) {
    img.src = 'assets/icons/volume-level-3.svg';
    img.alt = 'Volume level 3';
  }
  else {
    img.src = 'assets/icons/volume-level-0.svg';
    img.alt = 'Volume level 0';
  }
}
function playHorn(event, audio, jsConfetti)
{
  if(audio.src.includes('assets/audio/party-horn.mp3')) jsConfetti.addConfetti();
  audio.play();
}