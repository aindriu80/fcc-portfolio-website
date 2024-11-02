const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control'); // Corrected this line
const allSections = document.querySelector('.main-content');

function PageTransitions() {
  for (let i = 0; i < sectBtns.length; i++) { // Changed sectBtn to sectBtns
    sectBtns[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].classList.remove('active-btn'); // Use classList.remove for better practice
      this.classList.add('active-btn'); // Use classList.add for better practice
    });
  }
}

PageTransitions();
