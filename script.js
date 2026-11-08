// Global Variables

const backToTop = document.querySelector('.back-to-top');

// Modular Functions

const showButton = (btn) => {
  btn.classList.add('show');
};

const hideButton = (btn) => {
  btn.classList.remove('show');
};

// Event Listeners

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    showButton(backToTop);
  } else {
    hideButton(backToTop);
  }
});
