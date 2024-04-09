let splideAbout = new Splide( '.splide', {
    type: 'loop',
    perMove: 1,
    perPage: 2+((window.innerWidth>320)?1:0),
    pagination: false,
    arrows: false,
    grid: {
        rows: 2,
        cols: 1,
        gap : {
            row: '1rem',
            col: '1.5rem',
        },
    },
} ).mount(window.splide.Extensions);
document.querySelector('.about__button-cards-prev').addEventListener('click', ()=>{
    splideAbout.go('-1');
})
document.querySelector('.about__button-cards-next').addEventListener('click', ()=>{
    splideAbout.go('+1');
})
splideAbout.on('resize', () => {
    if (window.innerWidth <= 400) {
        splideAbout.options = {
            perPage: 1,
            grid: {
                rows: 4,
                cols: 1,
                gap: {
                    row: '1rem',
                    col: '8px',
                },
            },
        };
    } else if (window.innerWidth <= 640) {
        splideAbout.options = {
            perPage: 1 + ((window.innerWidth > 640) ? 1 : 0) + ((window.innerWidth > 960) ? 1 : 0),
            grid: {
                rows: 2,
                cols: 2,
                gap: {
                    row: '1rem',
                    col: '-10px', 
                },
            },
        };
    }
});




const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");

  if (hamburger.classList.contains("active")) {
    document.body.classList.add("body-scroll-lock");
  } else {
    document.body.classList.remove("body-scroll-lock");
  }
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
    document.body.classList.remove("body-scroll-lock");
  })
);
