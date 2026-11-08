// Global Variables

const backToTop = document.querySelector('.back-to-top');

// Modular Functions

const showButton = (btn) => {
  return btn.classList.add('show');
};

const hideButton = (btn) => {
  return btn.classList.remove('show');
};

// Event Listeners

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 300) {
    showButton(backToTop);
  } else {
    hideButton(backToTop);
  }
});
