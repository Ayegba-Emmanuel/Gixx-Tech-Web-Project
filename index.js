const dropdowns = document.querySelectorAll('.list > li');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
    const subNav = dropdown.querySelector('.sub-navbar');
    if (subNav) {
      subNav.style.display = 'block';
      subNav.classList.add('show');
    }
  });

  dropdown.addEventListener('mouseleave', () => {
    const subNav = dropdown.querySelector('.sub-navbar');
    if (subNav) {
      subNav.classList.remove('show');
      setTimeout(() => {
        subNav.style.display = 'none';
      }, 3000);
    }
  });
});
