// explore.js

window.addEventListener('DOMContentLoaded', init);

function init()
{
  const faceImg = document.querySelector('header + img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelection = document.getElementById('voice-select');
  const button = document.querySelector('button');

  const synth = window.speechSynthesis;
  let voices = [];
  let text = '';
  let selectedVoice;

  if( synth.onvoiceschanged !== undefined )
    synth.onvoiceschanged = function() {voices = populateVoiceList(synth, voiceSelection)};

  textArea.addEventListener('input', (event) => {
    text = event.target.value;
  });
  voiceSelection.addEventListener('change', function(event) {
    const selected = event.target.options[event.target.selectedIndex];
    for(const voice of voices) {
      if(voice.name === selected.getAttribute('data-name')) {
        selectedVoice = voice;
        break;
      }
    }
  });
  button.addEventListener('click', (event) => talk(event, synth, text, selectedVoice, faceImg));
}

function populateVoiceList(synth, select)
{
  const voices = synth.getVoices();

  for(const voice of voices ) {
    const option = document.createElement('option');
    const name = voice.name;
    const lang = voice.lang;
    option.textContent = `${name} (${lang})`;
    if(voice.default)
      option.textContent += " -- DEFAULT";
    option.setAttribute('data-lang', lang );
    option.setAttribute('data-name', name );
    select.appendChild(option);
  }

  return voices;
}
function talk(event, synth, text, voice, img)
{
  const utterance = new SpeechSynthesisUtterance(text);
  const initImgSrc = img.src;
  const initImgAlt = img.alt;

  utterance.voice = voice;
  utterance.onstart = () => {
    img.src = 'assets/images/smiling-open.png';
    img.alt = 'Open smiling face';
  };
  utterance.onend = () => {
    img.src = initImgSrc;
    img.alt = initImgAlt;
  };
  synth.speak(utterance);

}