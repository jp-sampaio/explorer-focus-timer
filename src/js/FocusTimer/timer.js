import state from "./state.js"
import * as elements from "./elements.js"

export function updateDisplay(minutes, seconds) {
  // Nullish coalescing (??) retorna o valor da direita se o valor da esquerda for nulo e assim o contrário também.
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  // O padStart ou end preeenche o começo ou final, nesse caso com dois digitos e o primeiro como 0
  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}