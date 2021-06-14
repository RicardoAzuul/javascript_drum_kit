// Listen for keydown event on the window
window.addEventListener('keydown', function (event) {
  let audio = document.querySelector(`audio[data-key="${event.key}"]`); //keyCode is deprecated
  let key = document.querySelector(`.key[data-key="${event.key}"]`);
  if (!audio) return; // stop function from running
  audio.currentTime = 0; // rewinds audio to 0 --> this allows for keymashing, otherwise the audio won't play if it is already playing
  audio.play();
  console.log(key);
});