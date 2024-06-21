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

// Add a click event listener to the category links
const categoryLinks = document.querySelectorAll('.explorer-categories a');
categoryLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add a click event listener to the job links
const jobLinks = document.querySelectorAll('.explorer-jobs a');
jobLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add a search functionality
const searchInput = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const categoryItems = document.querySelectorAll('.explorer-categories li');
  const jobItems = document.querySelectorAll('.explorer-jobs li');

  searchResults.innerHTML = '';

  categoryItems.forEach(item => {
    const link = item.querySelector('a');
    if (link.textContent.toLowerCase().includes(searchTerm)) {
      const resultItem = document.createElement('li');
      resultItem.innerHTML = `<a href="${link.getAttribute('href')}">${link.textContent}</a>`;
      searchResults.appendChild(resultItem);
    }
  });

  jobItems.forEach(item => {
    const link = item.querySelector('a');
    if (link.textContent.toLowerCase().includes(searchTerm)) {
      const resultItem = document.createElement('li');
      resultItem.innerHTML = `<a href="${link.getAttribute('href')}">${link.textContent}</a>`;
      searchResults.appendChild(resultItem);
    }
  });
});
