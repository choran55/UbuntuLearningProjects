
function setupMobileMenu(buttonId, navId) {
  const button = document.getElementById(buttonId);
  const nav = document.getElementById(navId);

  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.contains("show");
    nav.classList.toggle("show");
    button.setAttribute("aria-expanded", !isOpen);
  });
}

// Initialize for all pages
setupMobileMenu("navToggle", "mainNav");
setupMobileMenu("navToggleAbout", "mainNavAbout");
setupMobileMenu("navToggleServices", "mainNavServices");
setupMobileMenu("navToggleGallery", "mainNavGallery");
setupMobileMenu("navToggleContact", "mainNavContact");
setupMobileMenu("navToggleEnquiry", "mainNavEnquiry");
setupMobileMenu("navToggleTeam", "mainNavTeam");

console.log("Navigation initialized.");


function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-ZA', {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const clock = document.getElementById("liveClock");
  if (clock) clock.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // initial load


document.querySelectorAll('.acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));

    const panel = btn.nextElementSibling;

    if (!expanded) {
      panel.hidden = false;
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.style.maxHeight = 0;
      setTimeout(() => panel.hidden = true, 300);
    }
  });
});
setupDesktopMenu("mainNav");
setupDesktopMenu("mainNavAbout");
setupDesktopMenu("mainNavServices");
setupDesktopMenu("mainNavGallery");
setupDesktopMenu("mainNavContact");
setupDesktopMenu("mainNavEnquiry");
setupDesktopMenu("mainNavTeam");
