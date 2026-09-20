document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));
  }

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      item.classList.toggle("open");
      const mark = button.querySelector("[data-mark]");
      if (mark) mark.textContent = item.classList.contains("open") ? "−" : "+";
    });
  });
});