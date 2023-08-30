import state from "./state.js";
import * as elements from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function countDown() {
  if(!state.isRunning) {
    return
  }

  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.seconds.textContent);

  seconds--;

  if(seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if(minutes < 0) {
    reset();
    kitchenTimer.play()
    return;
  }

  updateDisplay(minutes, seconds)

  // SetTimeout faz com que execute depois de 1000 milissegundos, uma função que que chama outra função é chamado de callBack e quando a mesma função se chama é a recurção.
  setTimeout(() => countDown(), 1000);
}

export function updateDisplay(minutes, seconds) {
  // Nullish coalescing (??) retorna o valor da direita se o valor da esquerda for nulo e assim o contrário também.
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  // O padStart ou end preeenche o começo ou final, nesse caso com dois digitos e o primeiro como 0
  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}