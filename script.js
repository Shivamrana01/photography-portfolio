
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');

:root {
  --bg: #101010;
  --panel: #191919;
  --text: #f5f1e9;
  --muted: #aaa69f;
  --gold: #f5b847;
  --line: #ffffff20;
  --max: 1180px;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.7;
}

a { color: inherit; text-decoration: none; }
button { font: inherit; }

.header {
  height: 82px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #101010ed;
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--line);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 45px;
  height: 45px;
  border: 1px solid var(--gold);
  display: grid;
  place-items: center;
  font: 27px 'Playfair Display', serif;
  position: relative;
}

.brand-logo span {
  position: absolute;
  top: 0;
  right: 3px;
  font-size: 10px;
  color: var(--gold);
}

.brand strong {
  display: block;
  font-size: 12px;
  letter-spacing: 2px;
}

.brand small {
  display: block;
  font-size: 9px;
  letter-spacing: 2px;
  color: var(--muted);
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav a {
  font-size: 12px;
  color: #d5d0c8;
  transition: color .25s;
}

.nav a:hover { color: var(--gold); }

.nav .nav-contact {
  border: 1px solid var(--gold);
  padding: 10px 15px;
  color: var(--gold);
}

.menu-toggle {
  display: none;
  background: transparent;
  color: white;
  border: 1px solid var(--line);
  padding: 8px 12px;
  cursor: pointer;
}

.hero {
  height: min(800px, 88vh);
  min-height: 590px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-image, .hero-overlay {
  position: absolute;
  inset: 0;
}

.hero-image {
  background: url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90') center/cover;
  animation: heroZoom 18s ease-in-out infinite alternate;
}

.hero-overlay {
  background: linear-gradient(90deg, #080808ed, #080808a8 42%, #08080820 100%),
              linear-gradient(0deg, var(--bg), transparent 24%);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(var(--max), 90%);
  margin: auto;
}

.eyebrow {
  color: var(--gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 18px;
}

.hero h1, .intro h2, .section h2,
.about-content h2, .contact-content h2 {
  font: 500 clamp(42px, 6.5vw, 78px)/1.12 'Playfair Display', serif;
  letter-spacing: -1px;
  margin: 0 0 22px;
}

h1 em, h2 em {
  color: var(--gold);
  font-weight: 500;
}

.hero-description {
  max-width: 420px;
  color: #d0ccc5;
  font-size: 14px;
  margin-bottom: 28px;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.button {
  display: inline-block;
  padding: 13px 19px;
  font-size: 11px;
  font-weight: 700;
  transition: transform .25s, background .25s;
}

.button:hover { transform: translateY(-3px); }

.button-gold {
  background: var(--gold);
  color: #17130a;
}

.button-gold:hover { background: #ffd273; }

.button-outline {
  border: 1px solid #ffffff80;
  color: white;
}

.button-outline:hover { background: #ffffff12; }

.hero-side-text {
  position: absolute;
  right: 4%;
  top: 40%;
  writing-mode: vertical-rl;
  font-size: 9px;
  letter-spacing: 3px;
  color: #ddd;
}

.scroll-down {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  letter-spacing: 2px;
  color: var(--gold);
}

.section {
  max-width: var(--max);
  width: 90%;
  margin: auto;
  padding: 95px 0;
}

.intro { text-align: center; max-width: 850px; }

.intro h2 { font-size: clamp(38px, 5vw, 57px); }

.intro > p:last-child {
  max-width: 520px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 13px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 25px;
  margin-bottom: 30px;
}

.section h2, .about-content h2 {
  font-size: clamp(37px, 5vw, 55px);
}

.section-heading > p {
  font-size: 12px;
  color: var(--muted);
}

.gallery-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 25px;
}

.filter {
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 30px;
  color: #d0ccc5;
  padding: 8px 17px;
  font-size: 11px;
  cursor: pointer;
  transition: .2s;
}

.filter:hover, .filter.active {
  background: var(--gold);
  color: #17130a;
  border-color: var(--gold);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: 255px;
  gap: 14px;
}

.photo-card {
  min-width: 0;
  position: relative;
  overflow: hidden;
  background: #222;
}

.photo-tall { grid-row: span 2; }
.photo-wide { grid-column: span 2; }

.photo-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  filter: brightness(.8);
  transition: transform .6s, filter .4s;
}

.photo-card:hover img {
  transform: scale(1.07);
  filter: brightness(.55);
}

.photo-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 42px 18px 18px;
  background: linear-gradient(transparent, #000d);
  transition: padding .3s;
}

.photo-card:hover .photo-info { padding-bottom: 25px; }

.photo-info span {
  font-size: 9px;
  color: var(--gold);
  letter-spacing: 2px;
}

.photo-info h3 {
  font: 500 23px 'Playfair Display', serif;
  margin: 4px 0 0;
}

.photo-card.hidden { display: none; }

.gallery-caption {
  font-size: 10px;
  color: #777;
  margin-top: 18px;
}

.about-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 8%;
  padding: 90px 5%;
  background: #181818;
}

.about-photo {
  position: relative;
  width: 100%;
  max-width: 520px;
  height: 450px;
  justify-self: end;
}

.about-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(.8);
}

.photo-stamp {
  position: absolute;
  bottom: 20px;
  left: -15px;
  padding: 14px 20px;
  background: var(--gold);
  color: #17130a;
  font-size: 9px;
  letter-spacing: 2px;
}

.photo-stamp strong { font-size: 17px; }

.about-content { max-width: 500px; }

.about-content > p:not(.eyebrow) {
  color: var(--muted);
  font-size: 13px;
  margin: 18px 0;
}

.text-link {
  display: inline-block;
  margin-top: 10px;
  color: var(--gold);
  border-bottom: 1px solid #f5b84766;
  padding-bottom: 7px;
  font-size: 12px;
}

.about-stats {
  display: flex;
  gap: 28px;
  border-top: 1px solid var(--line);
  padding-top: 22px;
  margin-top: 35px;
}

.about-stats strong {
  display: block;
  font: 26px 'Playfair Display', serif;
  color: var(--gold);
}

.about-stats span {
  font-size: 10px;
  color: var(--muted);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;
  margin-top: 30px;
}

.service-card {
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 25px;
  min-height: 230px;
  position: relative;
  transition: transform .25s, border-color .25s;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: #f5b84788;
}

.service-number {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #777;
  font-size: 10px;
}

.service-icon {
  font-size: 30px;
  color: var(--gold);
  margin-bottom: 15px;
}

.service-card h3 {
  font: 500 22px 'Playfair Display', serif;
  margin: 0 0 10px;
}

.service-card p {
  color: var(--muted);
  font-size: 12px;
  margin: 0;
}

.contact-section {
  text-align: center;
  padding: 100px 5%;
  background: linear-gradient(#101010d9, #101010e8),
    url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=85') center/cover;
}

.contact-content { max-width: 650px; margin: auto; }

.contact-content h2 { font-size: clamp(45px, 7vw, 72px); }

.contact-content > p:not(.eyebrow) {
  color: #c6c1b8;
  font-size: 13px;
  max-width: 420px;
  margin: 20px auto 28px;
}

.contact-content small {
  display: block;
  margin-top: 18px;
  font-size: 10px;
  color: #aaa69f;
}

.footer {
  padding: 30px 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-top: 1px solid var(--line);
}

.footer > p {
  color: var(--muted);
  font-size: 11px;
}

.back-top {
  color: var(--gold);
  font-size: 9px;
  letter-spacing: 2px;
}

.footer-copy {
  width: 100%;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  color: #777;
  font-size: 9px;
}

.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .7s ease, transform .7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes heroZoom {
  from { transform: scale(1); }
  to { transform: scale(1.09); }
}

@media (max-width: 760px) {
  .header { height: 72px; }
  .brand-logo { width: 39px; height: 39px; font-size: 23px; }
  .brand strong { font-size: 10px; }
  .brand small { font-size: 8px; }

  .menu-toggle { display: block; }

  .nav {
    display: none;
    position: absolute;
    top: 71px;
    left: 0;
    right: 0;
    padding: 22px 5%;
    background: #111;
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
  }

  .nav.open { display: flex; }

  .nav .nav-contact { text-align: center; }
  .hero { height: 78vh; min-height: 550px; }
  .hero h1 { font-size: clamp(43px, 11vw, 66px); }
  .hero-description { max-width: 330px; font-size: 13px; }
  .hero-side-text { display: none; }

  .section { padding: 65px 0; }
  .section-heading { display: block; }
  .section-heading > p { margin-top: 15px; }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 190px;
    gap: 9px;
  }

  .photo-tall { grid-row: span 1; }
  .photo-wide { grid-column: span 2; }
  .photo-info { padding: 30px 11px 11px; }
  .photo-info h3 { font-size: 17px; }
  .photo-info span { font-size: 8px; }

  .about-section {
    grid-template-columns: 1fr;
    padding: 65px 5%;
    gap: 35px;
  }

  .about-photo { height: 330px; justify-self: center; }
  .about-content { max-width: none; }
  .about-stats { justify-content: space-between; gap: 12px; }

  .service-grid { grid-template-columns: 1fr; }
  .service-card { min-height: 180px; }
  .contact-section { padding: 75px 5%; }

  .footer { justify-content: center; text-align: center; }
  .footer > p { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}
