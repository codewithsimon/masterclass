document.addEventListener('DOMContentLoaded', function() {
  initializeTestimonials();
});

function initializeTestimonials() {
  const testimonialSlider = document.getElementById('testimonialSlider');
  const testimonialDots = document.getElementById('testimonialDots');
  
  if (!testimonialSlider || !testimonialDots) return;
  
  // Create testimonial items
  testimonialData.forEach((testimonial, index) => {
    // Create testimonial item
    const testimonialItem = document.createElement('div');
    testimonialItem.className = `testimonial-item ${index === 0 ? 'active' : ''}`;
    testimonialItem.dataset.index = index;
    
    testimonialItem.innerHTML = `
      <div class="testimonial-quote">${testimonial.quote}</div>
      <div class="testimonial-author">
        <div class="testimonial-author-image">
          <img src="${testimonial.image}" alt="${testimonial.name}">
        </div>
        <div class="testimonial-author-name">${testimonial.name}</div>
        <div class="testimonial-author-title">${testimonial.title}</div>
      </div>
    `;
    
    testimonialSlider.appendChild(testimonialItem);
    
    // Create dot for this testimonial
    const dot = document.createElement('div');
    dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
    dot.dataset.index = index;
    
    dot.addEventListener('click', function() {
      showTestimonial(this.dataset.index);
    });
    
    testimonialDots.appendChild(dot);
  });
  
  // Auto-rotate testimonials
  let currentIndex = 0;
  setInterval(function() {
    currentIndex = (currentIndex + 1) % testimonialData.length;
    showTestimonial(currentIndex);
  }, 5000);
}

function showTestimonial(index) {
  // Update testimonial items
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  testimonialItems.forEach(item => {
    item.classList.remove('active');
  });
  
  const selectedItem = document.querySelector(`.testimonial-item[data-index="${index}"]`);
  if (selectedItem) {
    selectedItem.classList.add('active');
  }
  
  // Update dots
  const dots = document.querySelectorAll('.testimonial-dot');
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  const selectedDot = document.querySelector(`.testimonial-dot[data-index="${index}"]`);
  if (selectedDot) {
    selectedDot.classList.add('active');
  }
}