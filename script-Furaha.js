let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// 
document.addEventListener('DOMContentLoaded', function() {
  const getStartedBtn = document.getElementById('get-started-btn');
  getStartedBtn.addEventListener('click', () => {
      window.location.href = 'Dashboard.html';
  });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const file = document.getElementById('file').files[0];

  if (!name || !email || !phone || !message) {
      alert('Please fill out all required fields.');
      return;
  }

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('message', message);
  if (file) {
      formData.append('file', file);
  }

  fetch('YOUR_SERVER_ENDPOINT', {
      method: 'POST',
      body: formData,
  })
  .then(response => response.json())
  .then(data => {
      alert('Message sent successfully!');
  })
  .catch(error => {
      alert('There was an error sending your message.');
      console.error('Error:', error);
  });
});



// Form Validation
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Validate form fields
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email address.');
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter your message.');
    return;
  }

  // Submit the form
  contactForm.submit();
});

// Smooth Scrolling for Roadmap
const roadmapLink = document.querySelector('#roadmap a');
roadmapLink.addEventListener('click', (event) => {
  event.preventDefault();
  const targetElement = document.querySelector('#roadmap .roadmap-container');
  targetElement.scrollIntoView({ behavior: 'smooth' });
});

  