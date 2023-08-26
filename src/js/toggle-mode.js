let darkMode = true;
const buttonToggle = document.querySelector('.toggle-mode');

buttonToggle.addEventListener("click", event => {
  // adiciona uma class="light" na tag html, elemento raíz.
  document.documentElement.classList.toggle("light");

  const mode = darkMode ? "light" : "dark";
  event.currentTarget.
  querySelector("span").textContent = `${mode} mode ativado!`;

  // negando o valor atual
  darkMode = !darkMode;
})