document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  document.getElementById('scrollButton').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const observerOptions = {
    threshold: 0.75 // 75% of the element needs to be visible
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'visible-div' class to the element
        entry.target.classList.add('visible-div');
      } else {
        entry.target.classList.remove('visible-div');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.hidden-div').forEach(div => {
    observer.observe(div);
  });

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
        $target.classList.toggle('has-text-centered');
      });
    });
  }

});
