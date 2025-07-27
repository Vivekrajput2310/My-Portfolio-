const menu = document.querySelector('.menu');
const cross = document.querySelector('.cross');
const ul = document.querySelector('header nav ul');
const mode = document.querySelector('.mode');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const logo = document.querySelector(' header nav .logo');
const iframe = document.querySelector('iframe');
const modes = document.querySelector('.modes');
const eduline = document.querySelector('.eduline');
const sections = document.querySelectorAll('section');
const circles = document.querySelectorAll('.circle1, .circle2, .circle3');
const typedText = document.querySelector(".typed-text");
const container = document.querySelector('.shooting-stars-container');
const projects = document.querySelectorAll('.project-box');
const certificates = document.querySelectorAll('.certificate-box');
const greetHeading = document.querySelector('.greet h1');
const skills = document.querySelectorAll('.skills');
const li = document.querySelectorAll('ul li a , nav i');
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
  ul.classList.toggle('dark-ul');
  logo.classList.toggle('dark-logo');
  iframe.classList.toggle('dark-iframe');
  modes.classList.toggle('dark-modes');
  eduline.classList.toggle('dark-eduline');
  greetHeading.classList.toggle('dark-greetHeading');
 
  projects.forEach(p => p.classList.toggle('dark-projectBox'));
  certificates.forEach(c => c.classList.toggle('dark-certificateBox'));
  li.forEach(li => li.classList.toggle('dark-a'));
  circles.forEach(c => c.classList.toggle('dark-circle'));
  sections.forEach(section => {
    section.querySelector('h2')?.classList.toggle('dark-h2');
    section.querySelector('.scroll hr')?.classList.toggle('dark-hr');
    section.querySelector('div')?.classList.toggle('dark-div');
    section.querySelector('h3')?.classList.toggle('dark-h3');
    section.querySelectorAll('.projects .project-box .project-name')?.forEach(p => p.classList.toggle('dark-projectName'));
    section.querySelectorAll('.certificate-name')?.forEach(p => p.classList.toggle('dark-certificateName'));
    section.querySelectorAll('.skills div p ,.skills div i')?.forEach(s => s.classList.toggle('dark-skill'));
    section.querySelectorAll('.education div h3')?.forEach(e => e.classList.toggle('dark-eduHeading'));
    section.querySelectorAll('.skills div')?.forEach(s => s.classList.toggle('dark-skillBox'));
    section.querySelectorAll('.greet .entity p , .certificates .certificate-box a , .contact-box .contact-links a  ')?.forEach(a => a.classList.toggle('dark-a'));
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