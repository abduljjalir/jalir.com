// AUTO YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// HERO IMAGE & CORNER FRAME ANIMATION
const heroImage = document.getElementById("heroImage");
const cornerFrame = document.getElementById("cornerFrame");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        // fade out hero image
        heroImage.style.opacity = "0";
        cornerFrame.style.opacity = "1";

        // move corner image into navbar, shrink & make circular
        cornerFrame.style.transform = "translate(-70px, -90px) scale(0.33)";
        cornerFrame.style.border = "2px solid #00c896";
        cornerFrame.style.borderRadius = "50%";
        cornerFrame.querySelector("img").style.borderRadius = "50%";
    } else {
        // move back to corner, square
        heroImage.style.opacity = "1";
        cornerFrame.style.opacity = "0";
        cornerFrame.style.transform = "translate(0, 0) scale(1)";
        cornerFrame.style.border = "none";
        cornerFrame.style.borderRadius = "10px";
        cornerFrame.querySelector("img").style.borderRadius = "10px";
    }
});


// SKILL BAR ANIMATION
const skillItems = document.querySelectorAll(".skill-item");
let skillsAnimated = false;

function animateSkills() {
  skillItems.forEach(item => {
    const percent = parseInt(item.dataset.percent);
    const fill = item.querySelector(".skill-fill");
    const percentText = item.querySelector(".percent");

    fill.style.width = percent + "%";

    let count = 0;
    const interval = setInterval(() => {
      if (count >= percent) {
        clearInterval(interval);
      } else {
        count++;
        percentText.textContent = count + "%";
      }
    }, 15);
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const position = skillsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (!skillsAnimated && position < screenHeight - 100) {
    animateSkills();
    skillsAnimated = true;
  }
});
// DARK / LIGHT MODE TOGGLE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
});

// WHATSAPP FORM SUBMISSION
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const [name, email, service, message] = contactForm.elements;
    const url = `https://wa.me/256700417112?text=Name:${encodeURIComponent(name.value)}%0AEmail:${encodeURIComponent(email.value)}%0AService:${encodeURIComponent(service.value)}%0AMessage:${encodeURIComponent(message.value)}`;

    window.open(url, "_blank");
});
const aboutSpans = document.querySelectorAll(".about-typing span");
let aboutAnimated = false;

// Pause all spans initially
aboutSpans.forEach(span => span.style.animationPlayState = "paused");

function animateAbout() {
    const section = document.querySelector(".about-section");
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (!aboutAnimated && position < screenHeight - 100) {
        aboutSpans.forEach(span => span.style.animationPlayState = "running");
        aboutAnimated = true;
    }
}

window.addEventListener("scroll", animateAbout);
animateAbout(); // trigger on load if section already visible


// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
