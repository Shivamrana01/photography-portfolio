
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile navigation
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Footer year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Gallery filters
const filterButtons = document.querySelectorAll(".filter-btn");
const photoCards = Array.from(document.querySelectorAll(".photo-card"));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    photoCards.forEach((card) => {
      const matches =
        filter === "all" || card.dataset.category === filter;

      card.hidden = !matches;
    });
  });
});

// Photo lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("lightboxClose");
const prevButton = document.getElementById("lightboxPrev");
const nextButton = document.getElementById("lightboxNext");

let currentIndex = 0;

function visiblePhotos() {
  return photoCards.filter((card) => !card.hidden);
}

function showPhoto(index) {
  const photos = visiblePhotos();

  if (!photos.length) return;

  currentIndex = (index + photos.length) % photos.length;

  const card = photos[currentIndex];
  const image = card.querySelector("img");

  lightboxImage.src = card.dataset.full || image.src;
  lightboxImage.alt = image.alt;

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

photoCards.forEach((card) => {
  card.addEventListener("click", () => {
    const photos = visiblePhotos();
    showPhoto(photos.indexOf(card));
  });
});

if (closeButton) {
  closeButton.addEventListener("click", closeLightbox);
}

if (prevButton) {
  prevButton.addEventListener("click", () => {
    showPhoto(currentIndex - 1);
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    showPhoto(currentIndex + 1);
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (!lightbox || !lightbox.classList.contains("open")) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showPhoto(currentIndex - 1);
  if (event.key === "ArrowRight") showPhoto(currentIndex + 1);
});
