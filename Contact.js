// Add smooth scrolling to the navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add a hover effect to the social media links
const socialLinks = document.querySelectorAll('.contact-social a');
socialLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#337ab7';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#fff';
  });
});

// Add a click event listener to the email link
const emailLink = document.querySelector('.contact-email a');
emailLink.addEventListener('click', () => {
  // Open the email client with the email address
  const emailClient = 'mailto:info@careertrails.com';
  window.location.href = emailClient;
});

// Add a click event listener to the social media links
socialLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Open the social media profile in a new tab
    const socialMediaProfile = link.getAttribute('href');
    window.open(socialMediaProfile, '_blank');
  });
});
