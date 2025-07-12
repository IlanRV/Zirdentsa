if (typeof hasBanner !== 'undefined' && hasBanner) {
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      nav.classList.add('bg-dark');
    } else {
      nav.classList.remove('bg-dark');
    }
  });
} else {
  document.querySelector('.navbar').classList.add('bg-dark');
}
