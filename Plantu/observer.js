const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        entry.target.classList.remove('not-in-view')
      } else {
        entry.target.classList.remove('in-view')
        entry.target.classList.add('not-in-view')
      }
    })
  },
  {
    rootMargin: '0px',
    threshold: [0, 0.1, 1],
  },
)

const tags = document.querySelectorAll('.footer-plants, .hero-header')

tags.forEach((tag) => {
  observer.observe(tag)
})






window.onscroll = function(){

  var navLogo = document.querySelector(".nav-logo");
  var nav = document.querySelector(".logo")
  var navBg = document.querySelector(".nav-bg")

  if(document.body.scrollTop > 380 || document.documentElement.scrollTop > 380){
    nav.style.fontSize = "calc(2rem + 0.5vmax)";
    navLogo.style.padding = "1rem";
    navBg.style.background = "rgba(246, 242, 237, 0.98)";
  } else{
    nav.style.fontSize = "";
    navLogo.style.padding = "";
    navBg.style.background = "";
  }
}
