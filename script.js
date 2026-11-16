// Global Variables

const backToTop = document.querySelector('.back-to-top');

const reveal = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      io.unobserve(entry.target);
    } else {
      entry.target.classList.remove('active');
    }
  });
});

// Modular Functions

const showButton = (btn) => {
  btn.classList.add('show');
};

const hideButton = (btn) => {
  btn.classList.remove('show');
};

const observeElements = () => {
  reveal.forEach((element) => {
    io.observe(element);
  });
};

// Event Listeners

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    showButton(backToTop);
  } else {
    hideButton(backToTop);
  }
});

observeElements();
