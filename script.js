// Animações de fade ao rolar
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

document.querySelectorAll(".fade").forEach((el) => observer.observe(el));

// Mostrar e esconder o e-mail
const btn = document.getElementById("mostrarEmail");
const email = document.getElementById("email");

btn.addEventListener("click", () => {
  email.style.display = email.style.display === "block" ? "none" : "block";
});

// Efeito suave de rolagem ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

