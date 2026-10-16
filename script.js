
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + entry.target.id
        );
      });
    }
  });
}, { rootMargin: "-25% 0px -60% 0px" });

sections.forEach((section) => observer.observe(section));

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const project = document.getElementById("project").value.trim();
  const status = document.getElementById("formStatus");

  const subject = encodeURIComponent("Photography enquiry from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\n\nProject:\n" + project
  );

  status.textContent = "Opening your email application...";
  window.location.href =
    "mailto:shivamrana40912@gmail.com?subject=" + subject + "&body=" + body;
});
