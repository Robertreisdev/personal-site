document.addEventListener('DOMContentLoaded', () => {


  

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  const cards = Array.prototype.slice.call(document.querySelectorAll('.card'), 0);

  var darkMode = false;
  
  const btn = document.getElementById("btn");
  const introBG = document.getElementById("intro");
  const lightDarkElements = Array.prototype.slice.call(document.querySelectorAll('.light-dark'), 0);
  const techUsed = Array.prototype.slice.call(document.querySelectorAll('.button'), 0);
  const lightDarkHeadings = Array.prototype.slice.call(document.querySelectorAll('.light-dark-heading'), 0);
  
  btn.addEventListener("click", () =>{
    document.getElementById('light-dark-btn').classList.toggle("fa-toggle-on");
    if(!darkMode){
      document.getElementById('intro').style.backgroundImage="url('assets/bgid.jpg')";
      document.getElementById('skills').style.backgroundImage="url('assets/DarkSkillsBG.png')";
      darkMode = true;
    }
    else{
      document.getElementById('intro').style.backgroundImage="url('assets/bgi.png')";
      document.getElementById('skills').style.backgroundImage="url('assets/LightSkillsBG.png')";
      darkMode = false;
    }
    lightDarkElements.forEach(el => {
      el.classList.toggle("has-background-black")
      el.classList.toggle("has-text-white")
      if(el.classList.contains("input")){
        el.classList.toggle("has-background-grey-lighter")
      }   
    })
    cards.forEach(el => {
      el.classList.toggle("dark-card")
    })
    techUsed.forEach(el => {
      el.classList.toggle("has-background-black")
      el.classList.toggle("has-text-primary")
    })
    lightDarkHeadings.forEach(el => {
      el.classList.toggle("skill-headings-light")
      el.classList.toggle("skill-headings-dark")
    })
  });

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
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


/*

function myFunction() {
  var element = document.getElementById("about");
  element.classList.toggle("has-background-black-bis");
}

*/
