import state from "./state.js";
import * as timer from "./timer.js";
import * as elements from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
  sounds.buttonPressAudio.play()
}

export function set() {
  elements.minutes.setAttribute("contenteditable", true);
  elements.minutes.focus();

  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function toggleMusic() {
  state.idMute = document.documentElement.classList.toggle("music-on");

  if(state.idMute) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause()
}