// This is my Finishing touch coding in this portfolio/ my project 

let menuIcons = document.querySelector("#menu-icon");// Select the menu icon and navbar elements
let navbar = document.querySelector(".navbar");// Select the menu icon and navbar elements

menuIcons.onclick = () => {   // Toggle the 'bx-x' class on the menu icon and 'active' class on the navbar when the menu icon is clicked
  menuIcons.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");   // Select all sections and navigation links
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {   // Add an event listener for the window scroll event
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {    // Check if the current scroll position is within the section
      navLinks.forEach((links) => {
        links.classList.remove("active");   // Add 'active' class to the corresponding navigation link
        document
          .querySelector("header nav a[href*=" + id + "]")  
      });
    }
  });
  let header = document.querySelector("header");  // Toggle the 'sticky' class on the header based on scroll position
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcons.classList.remove("bx-x");   // Remove 'bx-x' class from menu icon and 'active' class from navbar when scrolling
  navbar.classList.remove("active");
};

ScrollReveal({   // Initialize ScrollReveal with custom settings
  // reset: true
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });  // Apply ScrollReveal animations to specific elements
ScrollReveal().reveal(
  ".home-img, .services-conatiner, .projects-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {   // Initialize Typed.js for typing animation with the help of this html link
  strings: [
    "Frontend-Developer",
    "Backend-Developer",
    "Full Stack Developer",
    "Web-Designer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const circles = document.querySelectorAll(".circle"); // Select all elements with the class 'circle'
circles.forEach((elem) => {  // Iterate over each circle element to create the dots and mark the percentage
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;
  for (let i = 0; i < dots; i++) {   // Create the dots for the circle
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointMarked = elem.querySelectorAll(".points");  // Mark the percentage of dots
  for (let i = 0; i < percent; i++) {
    pointMarked[i].classList.add("marked");
  }
});

//This is my last coding for this project/portfolio 