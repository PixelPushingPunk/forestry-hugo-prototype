console.log('testing testing testing');

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  const element = document.querySelector('.gallery-carousel');
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')

  console.log('element', element);
  console.log('prev', prev);
  console.log('next', next);

  if (element) {
    const mySiema = new Siema({
      selector: '.gallery-carousel',
      duration: 200,
      easing: 'ease',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: true
    });
    
    prev.addEventListener('click', () => mySiema.prev());
    next.addEventListener('click', () => mySiema.next());

    setInterval(() => mySiema.next(), 3000)
  }
});

