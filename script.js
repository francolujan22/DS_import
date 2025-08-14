function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === "Mayorista123" || input === "Minorista123") {
    document.getElementById("login-overlay").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    alert("Contraseña incorrecta. Intenta nuevamente.");
  }
}

// Activar el ingreso con tecla Enter
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("passwordInput");
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkPassword();
    }
  });
});