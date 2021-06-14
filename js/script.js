// Listen for keydown event on the window
window.addEventListener('keydown', function (event) {
  let audio = document.querySelector(`audio[data-key="${event.key}"]`); //keyCode is deprecated
  if (!audio) return; //stop function from running
  audio.play();
});