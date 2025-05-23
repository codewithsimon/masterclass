document.addEventListener('DOMContentLoaded', function() {
  initializeFAQ();
});

function initializeFAQ() {
  const faqAccordion = document.getElementById('faqAccordion');
  
  if (!faqAccordion) return;
  
  // Create FAQ items
  faqData.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item reveal';
    faqItem.dataset.index = index;
    
    faqItem.innerHTML = `
      <div class="faq-question">${faq.question}</div>
      <div class="faq-answer">
        <div class="faq-answer-content">${faq.answer}</div>
      </div>
    `;
    
    faqAccordion.appendChild(faqItem);
    
    // Add click event to question
    const question = faqItem.querySelector('.faq-question');
    question.addEventListener('click', function() {
      toggleFAQ(faqItem);
    });
  });
}

function toggleFAQ(item) {
  // Get current state
  const isActive = item.classList.contains('active');
  
  // Close all FAQs
  const allFAQs = document.querySelectorAll('.faq-item');
  allFAQs.forEach(faq => {
    faq.classList.remove('active');
  });
  
  // If the clicked item wasn't active, make it active
  if (!isActive) {
    item.classList.add('active');
  }
}