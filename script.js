document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar-custom');
  const toggler = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section');

  // Update active link based on scroll
  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80; // offset for navbar height
      if(window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  }

  // Initial call
  updateActiveLink();

  // Scroll events
  window.addEventListener('scroll', () => {
    // Navbar shadow
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active link
    updateActiveLink();
  });

  // Burger toggle X
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('collapsed');
  });
});


