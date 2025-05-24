document.addEventListener('DOMContentLoaded', function () {
  // Simulate loading user data
  setTimeout(() => {
    const progressBars = document.querySelectorAll('.progress-ring__circle');
    progressBars.forEach(bar => {
      const circumference = 2 * Math.PI * 40;
      bar.style.strokeDasharray = `${circumference} ${circumference}`;
      bar.style.strokeDashoffset = circumference;

      const offset = circumference - 65 / 100 * circumference;
      bar.style.strokeDashoffset = offset;
    });
  }, 500);

  // Add click handlers for learning path items
  const pathItems = document.querySelectorAll('.learning-path-item');
  pathItems.forEach(item => {
    item.addEventListener('click', function () {
      console.log('Selected path:', this.querySelector('h3').textContent);
    });
  });

  // Assessment button handler
  const assessmentBtn = document.querySelector('#start-assessment');
  if (assessmentBtn) {
    assessmentBtn.addEventListener('click', function () {
      alert('Starting adaptive assessment... This would launch the assessment flow in a real application.');
    });
  }
  
  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    const menuOpenIcon = mobileMenuButton.querySelector('svg.block');
    const menuCloseIcon = mobileMenuButton.querySelector('svg.hidden');
    
    mobileMenuButton.addEventListener('click', function() {
      // Toggle the mobile menu visibility
      mobileMenu.classList.toggle('hidden');
      
      // Toggle the menu icons (hamburger/X)
      menuOpenIcon.classList.toggle('hidden');
      menuOpenIcon.classList.toggle('block');
      menuCloseIcon.classList.toggle('hidden');
      menuCloseIcon.classList.toggle('block');
      
      // Toggle aria-expanded attribute for accessibility
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    });
  }
});

// Hamburger menu toggle for mobile
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuButton && mobileMenu) {
    // Find the two SVG icons inside the button
    const menuOpenIcon = menuButton.querySelector('svg.block');
    const menuCloseIcon = menuButton.querySelector('svg.hidden');
    menuButton.addEventListener('click', function () {
      // Toggle the mobile menu visibility
      mobileMenu.classList.toggle('hidden');
      // Toggle the menu icons (hamburger/X)
      if (menuOpenIcon && menuCloseIcon) {
        menuOpenIcon.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('block');
        menuCloseIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('block');
      }
      // Toggle aria-expanded attribute for accessibility
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
    });
  }
});