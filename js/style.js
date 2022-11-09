  window.addEventListener('DOMContentLoaded', () => {

    const dom = document;

    const scrollTop = dom.getElementById('scroll-top');
    let scrollV = 0;
    let beforeV = 0;

    window.addEventListener('scroll', () => {
      scrollV = window.scrollY;
      if(scrollV > beforeV) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }

      beforeV = scrollV;
    });
  });