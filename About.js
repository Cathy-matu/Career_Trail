// Add smooth scrolling to the navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add a hover effect to the navigation links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#337ab7';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = '#fff';
    });
  });
  
  // Add a click event listener to the "Learn More" button
  document.querySelector('.learn-more-btn').addEventListener('click', () => {
    // Open a modal window with more information about Career Trails
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
  });
  
  // Add a click event listener to the "Close" button in the modal window
  document.querySelector('.modal .close-btn').addEventListener('click', () => {
    // Close the modal window
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  });
  