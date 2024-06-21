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

// Add a hover effect to the navigation links
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#337ab7';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#fff';
  });
});

// Add a responsive design to the roadmap
const roadmapContainer = document.querySelector('.roadmap-container');
const roadmapSteps = document.querySelectorAll('.roadmap-step');

// Add a media query for small screens
const smallScreenQuery = window.matchMedia('(max-width: 768px)');
smallScreenQuery.addEventListener('change', () => {
  if (smallScreenQuery.matches) {
    // Hide the roadmap steps on small screens
    roadmapSteps.forEach(step => {
      step.style.display = 'none';
    });
  } else {
    // Show the roadmap steps on large screens
    roadmapSteps.forEach(step => {
      step.style.display = 'block';
    });
  }
});

// Add a media query for medium screens
const mediumScreenQuery = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
mediumScreenQuery.addEventListener('change', () => {
  if (mediumScreenQuery.matches) {
    // Show the roadmap steps on medium screens
    roadmapSteps.forEach(step => {
      step.style.display = 'block';
    });
  } else {
    // Hide the roadmap steps on large screens
    roadmapSteps.forEach(step => {
      step.style.display = 'none';
    });
  }
});

// Add a media query for large screens
const largeScreenQuery = window.matchMedia('(min-width: 1025px)');
largeScreenQuery.addEventListener('change', () => {
  if (largeScreenQuery.matches) {
    // Show the roadmap steps on large screens
    roadmapSteps.forEach(step => {
      step.style.display = 'block';
    });
  } else {
    // Hide the roadmap steps on extra large screens
    roadmapSteps.forEach(step => {
      step.style.display = 'none';
    });
  }
});
