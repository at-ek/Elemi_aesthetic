  window.addEventListener('DOMContentLoaded', () => {

    const dom = document;

    const header = dom.getElementById('header');
    const mainvisual = dom.getElementById('mainvisual');

    // スタートアニメーション
    function startAnimation(target) {
      setTimeout(() => {
        target.classList.add('active');
      }, 1000);
    } 

    startAnimation(header);
    startAnimation(mainvisual);
        // スタートアニメーション

    // スクロールヘッダー
    let scrollValue = 0;
    let beforeValue = 0;

    window.addEventListener('scroll', () => {
      scrollValue = window.scrollY;

      if(scrollValue > beforeValue) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }

      beforeValue = scrollValue;
    });
    // スクロールヘッダー

    // スクロールアニメーション
    const sections = dom.querySelectorAll('main > section');

    function callback(entries) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      })
    }

    const io = new IntersectionObserver(callback);

    sections.forEach(section => {
      io.observe(section);
    });
    // スクロールアニメーション

  });