document.addEventListener("DOMContentLoaded", () => {
  // Dropdown toggle
  document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
  });

  // Highlight + auto-expand
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll(".sidebar a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
      const parentSubmenu = link.closest(".submenu");
      if (parentSubmenu) parentSubmenu.style.display = "block";
    }
  });
});
