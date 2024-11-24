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

  // Sections active class 
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other btns 
      sectBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      // hide other sections.
      sections.forEach((section) => {
        section.classList.remove('active')
      })

      const element = document.getElementById(id)
      element.classList.add('active')

    }
  })

  // Toggle theme - dark | bright
  const themeBtn = document.querySelector('.theme-btn')
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
  })

}

PageTransitions();
