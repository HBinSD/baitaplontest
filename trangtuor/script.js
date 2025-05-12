document.querySelector('.search-button button').addEventListener('click', function () {
    const keyword = document.getElementById('input').value.toLowerCase();
    const cards = document.querySelectorAll('.tour-card');

    cards.forEach(cards => {
      const title = cards.querySelector('.tour-text').textContent.toLowerCase();

      const matchKeyword = keyword === "" || title.includes(keyword);
      cards.style.display = (matchKeyword) ? 'block' : 'none';
    });
  });

  function toggleMobileMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
    }