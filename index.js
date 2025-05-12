document.getElementById('current-year').textContent = new Date().getFullYear();

  function toggleMobileMenu() {
      const nav = document.querySelector('.nav-links');
      nav.classList.toggle('active');
  }