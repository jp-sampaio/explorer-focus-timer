let darkMode = true;
const buttonToggle = document.querySelector('.toggle-mode');

buttonToggle.addEventListener("click", event => {
  // Adiciona uma class="light" na tag html, elemento raíz.
  document.documentElement.classList.toggle("light");

  // O valor começa true e dark porque só vai ser light apartir do primeiro click no botão.
  const mode = darkMode ? "light" : "dark";
  event.currentTarget.
  querySelector("span").textContent = `${mode} mode ativado!`;

  // negando o valor atual para atualizar
  darkMode = !darkMode;
})