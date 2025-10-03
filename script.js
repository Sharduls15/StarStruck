document.addEventListener("DOMContentLoaded", () => {
  const sidebarPlaceholder = document.getElementById('sidebar-placeholder');

  // Load sidebar from root-relative path
  fetch('/sidebar.html')
    .then(response => response.text())
    .then(data => {
      sidebarPlaceholder.innerHTML = data;

      // Dropdown toggle
      document.querySelectorAll(".toggle-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const submenu = btn.nextElementSibling;
          submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        });
      });

      // Highlight current page and auto-expand dropdowns
      const current = window.location.pathname.split("/").pop(); // e.g., "2023.html" or "best-film.html"
      document.querySelectorAll(".sidebar a").forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop(); // get last part of href
        if (linkHref === current) {
          link.classList.add("active");

          // Auto-expand parent submenu if exists
          const parentSubmenu = link.closest(".submenu");
          if (parentSubmenu) parentSubmenu.style.display = "block";
        }
      });
    })
    .catch(err => console.error("Failed to load sidebar:", err));
});
