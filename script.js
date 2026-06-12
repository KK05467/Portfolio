
// ================= DARK MODE =================

const themeBtn = document.querySelector(".theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }

});



// ================= CUSTOM CURSOR =================

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    follower.animate(
        {
            left:e.clientX + "px",
            top:e.clientY + "px"
        },
        {
            duration:300,
            fill:"forwards"
        }
    );

});



// ================= NAVBAR SCROLL =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.padding = "18px 40px";
        navbar.style.background = "rgba(255,255,255,.5)";
        navbar.style.boxShadow =
        "0 15px 50px rgba(26,58,107,.1)";

    }
    else{

        navbar.style.padding = "22px 40px";
        navbar.style.boxShadow = "none";

    }

});




// ================= GSAP =================

gsap.registerPlugin(ScrollTrigger);



// HERO

gsap.from(".hero-tag",{

    y:40,
    opacity:0,
    duration:1

});


gsap.from(".hero h1",{

    y:80,
    opacity:0,
    duration:1.2,
    delay:.2

});


gsap.from(".hero-designation",{

    y:40,
    opacity:0,
    duration:1,
    delay:.4

});


gsap.from(".hero p",{

    y:40,
    opacity:0,
    duration:1,
    delay:.6

});


gsap.from(".hero-buttons",{

    y:40,
    opacity:0,
    duration:1,
    delay:.8

});


gsap.from(".profile-container",{

    scale:.7,
    opacity:0,
    duration:1.3,
    delay:.6

});




// ================= SECTION REVEAL =================

gsap.utils.toArray(".section").forEach((section)=>{

    gsap.from(section,{

        y:100,
        opacity:0,

        duration:1.2,

        scrollTrigger:{
            trigger:section,
            start:"top 80%"
        }

    });

});




// ================= PROJECT CARDS =================

// gsap.from(".project-card",{

//     y:80,

//     opacity:0,

//     stagger:.2,

//     duration:1,

//     scrollTrigger:{

//         trigger:".projects-grid",

//         start:"top 80%"

//     }

// });




// ================= ACHIEVEMENTS =================

// gsap.from(".achievement-card",{

//     y:60,

//     opacity:0,

//     stagger:.15,

//     duration:1,

//     scrollTrigger:{

//         trigger:".achievement-grid",

//         start:"top 80%"

//     }

// });




// ================= SKILLS =================

// gsap.from(".skill-category",{

//     y:80,

//     opacity:0,

//     stagger:.15,

//     duration:1,

//     scrollTrigger:{

//         trigger:".skills-container",

//         start:"top 80%"

//     }

// });




// ================= FLOATING CARDS =================

gsap.to(".top-card",{

    y:-15,

    duration:2.5,

    repeat:-1,

    yoyo:true,

    ease:"power1.inOut"

});


gsap.to(".bottom-card",{

    y:15,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"power1.inOut"

});




// ================= ACTIVE NAV LINKS =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach((section)=>{

        const sectionTop = section.offsetTop;

        if(window.scrollY >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link)=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});




// ================= BUTTON HOVER =================

const buttons = document.querySelectorAll(
".primary-btn,.secondary-btn"
);

buttons.forEach((button)=>{

    button.addEventListener("mouseenter",()=>{

        gsap.to(button,{

            scale:1.05,
            duration:.3

        });

    });


    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{

            scale:1,
            duration:.3

        });

    });

});




// ================= PARALLAX GLOW =================

document.addEventListener("mousemove",(e)=>{

    const glow = document.querySelector(".hero-glow");

    let x = e.clientX / 40;
    let y = e.clientY / 40;

    glow.style.transform =
    `translate(${x}px,${y}px)`;

});




// ================= SCROLL TO TOP =================

window.addEventListener("beforeunload",()=>{

    window.scrollTo(0,0);

});
