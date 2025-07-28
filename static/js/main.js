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




// YT JS https://www.youtube.com/watch?v=iXlkRhjnnpk

document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            return;
          }
          entry.target.classList.remove('in-view');
        });
      });

      const AllAnimatedElements = document.querySelectorAll('.animate');
      AllAnimatedElements.forEach((element) => observer.observe(element));
});





