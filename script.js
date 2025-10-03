document.addEventListener("DOMContentLoaded", () => {
  const yearButtons = document.querySelectorAll(".year-btn");
  yearButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const next = btn.nextElementSibling;
      next.style.display = next.style.display === "block" ? "none" : "block";
    });
  });
});
