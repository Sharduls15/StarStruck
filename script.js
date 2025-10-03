document.addEventListener("DOMContentLoaded", () => {
  const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
  
  // Adjust path based on folder
  const pathPrefix = window.location.pathname.includes("/years/") || window.location.pathname.includes("/categories/") ? "../" : "";

  // Load sidebar dynamically
  fetch(`${pathPrefix}sidebar.html`)
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

      // Highlight current page
      const current = window.location.pathname.split("/").pop();
      document.querySelectorAll(".sidebar a").forEach(link => {
        if (link.getAttribute("href") === current) {
          link.classList.add("active");
          const parentSubmenu = link.closest(".submenu");
          if (parentSubmenu) parentSubmenu.style.display = "block";
        }
      });
    });
});
