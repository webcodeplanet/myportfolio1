const btnmenu = document.querySelector('.nav-menu-btn');
const navmenu = document.querySelector('.nav-menu');

function myToogleMenu() {
  btnmenu.classList.toggle('active');
  navmenu.classList.toggle('active');
}
btnmenu.addEventListener('click', ()=> {
  myToogleMenu();
})

navmenu.addEventListener('click', (e)=> {
  if (e.target.tagName === 'A') {
    myToogleMenu();
    
  }
})



/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Designer","Youtuber","Developer"],
      loop : true,
      typeSpeed : 80, 
      backSpeed : 50,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '200px',
          duration: 500,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 50})
  sr.reveal('.featured-text-info',{delay: 50})
  sr.reveal('.featured-text-btn',{delay: 50})
  sr.reveal('.social_icons',{delay: 50})
  sr.reveal('.featured-image',{delay: 50})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 50})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '200px',
    duration: 500,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 50})
  srLeft.reveal('.contact-info',{delay: 50})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '200px',
    duration: 500,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 50})
  srRight.reveal('.form-control',{delay: 50})
  

  /* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)