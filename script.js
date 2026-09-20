document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      if (!item) return;
      const open = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      const mark = button.querySelector("[data-mark]");
      if (mark) mark.textContent = open ? "−" : "+";
    });
  });

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");

  if (reduced || !("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("in"));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.14 });

    revealItems.forEach((el) => observer.observe(el));
  }
});