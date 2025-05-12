// Ví dụ: Thêm hiệu ứng active cho menu khi cuộn (nếu cần)
const sections = document.querySelectorAll('main > section');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Hoặc các hiệu ứng khác cho menu (ví dụ: menu dropdown khi hover, menu mobile)

      function toggleMobileMenu() {
      const nav = document.querySelector('.nav-links');
      nav.classList.toggle('active');
  }