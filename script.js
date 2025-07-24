/*let menu = document.querySelector('.menu') ;
let cross = document.querySelector('.cross') ;
let li = document.querySelectorAll('li');
let ul = document.querySelector('header nav ul');


function menubar() {
  menu.classList.toggle('open') ;
  cross.classList.toggle('come') ;
  ul.classList.toggle('slide') ;
}

function scrollToAbout() {
      const aboutSection = document.getElementById('about');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
}

let darkmode = document.querySelector(' .dark-mode');
let mode = document.querySelector(' .mode') ;
let body = document.querySelector('body');
let section = document.querySelectorAll('section');
const sections = document.querySelectorAll('section');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let logo = document.querySelector('.logo');
let iframe = document.querySelector('iframe');
let modes = document.querySelector('.modes');
let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');
let eduline = document.querySelector('.eduline');


function modeChange(){
  mode.classList.toggle('fa-solid');
  mode.classList.toggle('fa-sun');
  mode.classList.toggle('fa-solid');
  mode.classList.toggle('fa-moon');
  ul.classList.toggle('light-ul');
  header.classList.toggle('dark-header');
  ul.classList.toggle('dark-ul');
  body.classList.toggle('dark-body');
  footer.classList.toggle('dark-footer');
  logo.classList.toggle('dark-logo');
  iframe.classList.toggle('dark-iframe');
  modes.classList.toggle('dark-modes');
  eduline.classList.toggle('dark-eduline');
  circle1.classList.toggle('dark-circle');
  circle2.classList.toggle('dark-circle');
  circle3.classList.toggle('dark-circle');
  sections.forEach(section => {
  let h2 = section.querySelector('h2');
  let hr = section.querySelector('hr');
  const firstDiv = section.querySelector('div');
  
  if (h2) {
    h2.classList.toggle('dark-h2'); // यहाँ अपनी प्रॉपर्टी सेट कर सकते हैं
  }
  
  if (hr) {
    hr.classList.toggle('dark-hr'); // यहाँ अपनी प्रॉपर्टी सेट कर सकते हैं
  }
  
  if (firstDiv) {
    firstDiv.classList.toggle('dark-div'); // यहाँ अपनी प्रॉपर्टी सेट कर सकते हैं
  }
});


}


//Shooting star


const container = document.querySelector('.shooting-stars-container');

function createShootingStar() {
  const star = document.createElement('div');
  star.classList.add('shooting-star');

  // Random starting position (anywhere in screen)
  const startX = Math.random() * window.innerWidth * 0.4;
  const startY = Math.random() * window.innerHeight * 0.8;

  star.style.left = `${startX}px`;
  star.style.top = `${startY}px`;

  // Random size
  const size = 60 + Math.random() * 60;
  star.style.width = `${size}px`;

  // Random duration between 0.8s to 2s
  const duration = 0.9 + Math.random() * 1.2;
  star.style.animationDuration = `${duration}s`;

  container.appendChild(star);

  // Remove star after animation ends
  setTimeout(() => {
    container.removeChild(star);
  }, duration * 1000 + 200);
}

// Run shooting stars forever
setInterval(() => {
  // Random number of stars between 1 to 3 at a time
  const count = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < count; i++) {
    createShootingStar();
  }
}, 500); // every 0.5s add 1–3 stars



const words = ["Web Developer", "Problem Solver", "Tech Enthusiast", "Lifelong Learner"];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const typedText = document.querySelector(".typed-text");

  function type() {
    currentWord = words[i];

    if (isDeleting) {
      typedText.textContent = currentWord.substring(0, j--);
    } else {
      typedText.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, 1500); // Pause before deleting
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  document.addEventListener("DOMContentLoaded", () => {
    type();
  });
  
  */
  
const menu = document.querySelector('.menu');
const cross = document.querySelector('.cross');
const ul = document.querySelector('header nav ul');
const mode = document.querySelector('.mode');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const logo = document.querySelector('.logo');
const iframe = document.querySelector('iframe');
const modes = document.querySelector('.modes');
const eduline = document.querySelector('.eduline');
const sections = document.querySelectorAll('section');
const circles = document.querySelectorAll('.circle1, .circle2, .circle3');
const typedText = document.querySelector(".typed-text");
const container = document.querySelector('.shooting-stars-container');

// Menu Toggle
function menubar() {
  menu.classList.toggle('open');
  cross.classList.toggle('come');
  ul.classList.toggle('slide');
}

// Scroll to About
function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// Dark Mode Toggle
function modeChange() {
  mode.classList.toggle('fa-solid');
  mode.classList.toggle('fa-sun');
  mode.classList.toggle('fa-solid');
  mode.classList.toggle('fa-moon');
  body.classList.toggle('dark-body');
  header.classList.toggle('dark-header');
  footer.classList.toggle('dark-footer');
  ul.classList.toggle('light-ul');
  ul.classList.toggle('dark-ul');
  logo.classList.toggle('dark-logo');
  iframe.classList.toggle('dark-iframe');
  modes.classList.toggle('dark-modes');
  eduline.classList.toggle('dark-eduline');
  circles.forEach(c => c.classList.toggle('dark-circle'));

  sections.forEach(section => {
    section.querySelector('h2')?.classList.toggle('dark-h2');
    section.querySelector('hr')?.classList.toggle('dark-hr');
    section.querySelector('div')?.classList.toggle('dark-div');
  });
}

// Shooting Stars
function createShootingStar() {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.left = `${Math.random() * window.innerWidth * 0.4}px`;
  star.style.top = `${Math.random() * window.innerHeight * 0.8}px`;
  star.style.width = `${60 + Math.random() * 60}px`;
  const duration = 0.9 + Math.random() * 1.2;
  star.style.animationDuration = `${duration}s`;
  container.appendChild(star);
  setTimeout(() => star.remove(), duration * 1000 + 200);
}

setInterval(() => {
  const count = Math.floor(Math.random() * 5) + 1;
  for (let i = 0; i < count; i++) createShootingStar();
}, 500);

// Typing Effect
const words = ["Web Developer", "Problem Solver", "Tech Enthusiast", "Lifelong Learner"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const word = words[i];
  typedText.textContent = isDeleting ? word.substring(0, j--) : word.substring(0, j++);

  if (!isDeleting && j === word.length + 1) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);