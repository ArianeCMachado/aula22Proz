// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

// ---------- VALIDAÇÃO EMAIL ---------- //
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("email-helper");

// Função para mostrar o popup "Campo obrigatório"
function mostrarPopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
    validarCampo(input);
  });
}

// Aplicando a função aos campos de username e email
mostrarPopup(usernameInput, usernameLabel);
mostrarPopup(emailInput, emailLabel);

// Validação do username
function validarCampo(input) {
  const inputValue = input.value.trim();
  const isUsername = input.id === "username";
  const isEmail = input.id === "email";

  if (isUsername && inputValue.length >= 3) {
    input.classList.remove("error");
    input.classList.add("correct");
    usernameHelper.classList.remove("visible");
  } else if (isUsername) {
    input.classList.remove("correct");
    input.classList.add("error");
    usernameHelper.textContent = "O username deve ter 3 ou mais caracteres.";
    usernameHelper.classList.add("visible");
  }

  if (isEmail && inputValue.includes("@") && inputValue.includes(".com")) {
    input.classList.remove("error");
    input.classList.add("correct");
    emailHelper.classList.remove("visible");
  } else if (isEmail) {
    input.classList.remove("correct");
    input.classList.add("error");
    emailHelper.textContent = "O email deve conter '@' e '.com'.";
    emailHelper.classList.add("visible");
  }
}

// Validar username em tempo real
usernameInput.addEventListener("input", () => validarCampo(usernameInput));

// Validar email em tempo real
emailInput.addEventListener("input", () => validarCampo(emailInput));
