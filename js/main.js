document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initializeHeader();
  renderMasterclasses();
  renderExperts();
  initializeScrollAnimation();
  initializeNewsletterForm();
  
  // Add scroll event listener for revealing elements
  window.addEventListener('scroll', function() {
    revealElementsOnScroll();
    updateHeaderOnScroll();
  });
});

// Header functionality
function initializeHeader() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a link
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
}

// Update header on scroll
function updateHeaderOnScroll() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Render masterclass cards
function renderMasterclasses() {
  const masterclassGrid = document.getElementById('masterclassGrid');
  
  if (!masterclassGrid) return;
  
  masterclassData.forEach(masterclass => {
    const masterclassCard = document.createElement('div');
    masterclassCard.className = 'masterclass-card reveal';
    
    // Format benefits as list items
    const benefitsList = masterclass.benefits.map(benefit => 
      `<div class="benefit-item">${benefit}</div>`
    ).join('');
    
    masterclassCard.innerHTML = `
      <div class="masterclass-image">
        <span class="masterclass-category">${masterclass.category}</span>
        <img src="${masterclass.image}" alt="${masterclass.title}">
      </div>
      <div class="masterclass-content">
        <h3>${masterclass.title}</h3>
        <p>${masterclass.description}</p>
        <div class="masterclass-details">
          <div class="masterclass-detail">
            <span>${masterclass.duration}</span>
          </div>
          <div class="masterclass-detail">
            <span>${masterclass.format}</span>
          </div>
        </div>
        <div class="masterclass-benefits">
          <h4>What You'll Gain:</h4>
          ${benefitsList}
        </div>
        <div class="masterclass-footer">
          <div class="masterclass-price">${masterclass.price}</div>
          <a href="#" class="btn btn-primary">Reserve Your Seat</a>
        </div>
      </div>
    `;
    
    masterclassGrid.appendChild(masterclassCard);
  });
}

// Render experts slider
function renderExperts() {
  const expertsSlider = document.getElementById('expertsSlider');
  
  if (!expertsSlider) return;
  
  expertData.forEach(expert => {
    const expertCard = document.createElement('div');
    expertCard.className = 'expert-card reveal';
    
    expertCard.innerHTML = `
      <div class="expert-image">
        <img src="${expert.image}" alt="${expert.name}">
      </div>
      <div class="expert-content">
        <h3>${expert.name}</h3>
        <p class="expert-title">${expert.title}</p>
        <p class="expert-bio">${expert.bio}</p>
      </div>
    `;
    
    expertsSlider.appendChild(expertCard);
  });
}

// Scroll animation
function initializeScrollAnimation() {
  // Add reveal classes to elements
  document.querySelectorAll('section').forEach(section => {
    if (!section.classList.contains('hero')) {
      section.classList.add('reveal');
    }
  });
  
  // Initial check for elements in viewport
  revealElementsOnScroll();
}

// Reveal elements on scroll
function revealElementsOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const revealPoint = 150;
  
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
}

// Newsletter form handling
function initializeNewsletterForm() {
  const newsletterForm = document.getElementById('newsletterForm');
  const formMessage = document.getElementById('formMessage');
  
  if (!newsletterForm) return;
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    // Simple email validation
    if (!email || !isValidEmail(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.className = 'form-message error';
      return;
    }
    
    // Simulate form submission
    formMessage.textContent = 'Thank you for subscribing! We\'ll keep you updated on future masterclasses.';
    formMessage.className = 'form-message success';
    emailInput.value = '';
    
    // Reset message after delay
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.className = 'form-message';
    }, 5000);
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}