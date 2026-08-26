document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hide'), 1000);
  }

  const navbar = document.querySelector('.navbar');
  const progressBar = document.querySelector('.progress-bar');
  const backToTop = document.querySelector('.back-to-top');
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const searchInput = document.querySelector('[data-search]');

  const updateNavbar = () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (progressBar) progressBar.style.width = `${scrollPercent}%`;
    if (backToTop) {
      backToTop.style.display = window.scrollY > 600 ? 'flex' : 'none';
    }
  };

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  const storedTheme = localStorage.getItem('temple-theme');
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('temple-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  document.querySelectorAll('.counter-value').forEach((counter) => {
    const target = Number(counter.getAttribute('data-count'));
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = Math.floor(progress * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(step);
          counterObserver.disconnect();
        }
      });
    });
    counterObserver.observe(counter);
  });

  const textTarget = document.querySelector('.typed-text');
  const typedWords = ['Divine Peace', 'Sacred Blessings', 'Eternal Grace'];
  let wordIndex = 0;
  let letterIndex = 0;
  if (textTarget) {
    const type = () => {
      textTarget.textContent = typedWords[wordIndex].slice(0, letterIndex);
      letterIndex += 1;
      if (letterIndex > typedWords[wordIndex].length) {
        setTimeout(() => {
          letterIndex = 0;
          wordIndex = (wordIndex + 1) % typedWords.length;
          type();
        }, 1200);
        return;
      }
      setTimeout(type, 90);
    };
    type();
  }

  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const open = item?.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach((faq) => faq.classList.remove('active'));
      if (!open) item?.classList.add('active');
    });
  });

  document.querySelectorAll('.amount-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.amount-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const field = document.querySelector('#customAmount');
      if (field) field.value = btn.dataset.amount || '';
    });
  });

  document.querySelectorAll('.lightbox-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const overlay = document.querySelector('.lightbox-overlay');
      const image = document.querySelector('.lightbox-image');
      if (overlay && image) {
        image.src = trigger.dataset.src;
        overlay.classList.add('show');
      }
    });
  });

  document.querySelector('.lightbox-close')?.addEventListener('click', () => {
    document.querySelector('.lightbox-overlay')?.classList.remove('show');
  });

  document.querySelector('.lightbox-overlay')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-overlay')) {
      e.target.classList.remove('show');
    }
  });

  const liveFrame = document.querySelector('[data-live-darshan-iframe]');
  const liveFallback = document.querySelector('[data-live-darshan-fallback]');
  if (liveFrame && liveFallback) {
    liveFrame.addEventListener('error', () => {
      liveFrame.style.display = 'none';
      liveFallback.classList.remove('d-none');
    });
    liveFrame.addEventListener('load', () => {
      if (liveFrame.contentWindow?.location?.href?.includes('youtube')) {
        liveFallback.classList.add('d-none');
        liveFrame.style.display = 'block';
      }
    });
  }

  const countdownTarget = document.querySelector('[data-countdown]');
  if (countdownTarget) {
    const targetDate = new Date(countdownTarget.dataset.countdown).getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);
      document.querySelector('[data-days]')?.replaceChildren(days);
      document.querySelector('[data-hours]')?.replaceChildren(hours);
      document.querySelector('[data-mins]')?.replaceChildren(mins);
      document.querySelector('[data-secs]')?.replaceChildren(secs);
    };
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  searchInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const keyword = searchInput.value.trim().toLowerCase();
      const targets = {
        darshan: document.querySelector('#darshan'),
        festival: document.querySelector('#festivals'),
        seva: document.querySelector('#seva'),
        contact: document.querySelector('#contact')
      };
      const target = targets[keyword] || document.querySelector('#contact');
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  AOS.init({ duration: 900, once: true, offset: 80 });

  new Swiper('.testimonial-slider', {
    loop: true,
    autoplay: { delay: 5000 },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: { 768: { slidesPerView: 2 } }
  });
});
const cube = document.getElementById('imageCube');
let isDragging = false;
let startX, startY;
let currentX = -20; // Initial angle
let currentY = 20;  // Initial angle
let autoSpin = true;

// Initial position set karein
cube.style.transform = `translateZ(-110px) rotateX(${currentY}deg) rotateY(${currentX}deg)`;

// Drag Start (Mouse / Touch)
function dragStart(e) {
    isDragging = true;
    autoSpin = false; // Drag karte hi auto-spin ruk jayega
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
}

// Drag Move
function dragMove(e) {
    if (!isDragging) return;
    const x = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const y = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    
    const deltaX = x - startX;
    const deltaY = y - startY;
    
    currentX += deltaX * 0.6;
    currentY -= deltaY * 0.6;
    
    cube.style.transform = `translateZ(-110px) rotateX(${currentY}deg) rotateY(${currentX}deg)`;
    
    startX = x;
    startY = y;
}

// Drag End
function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    // Kuch der baad wapas auto-spin shuru karne ke liye (optional)
    setTimeout(() => { autoSpin = true; }, 4000);
}

// Auto Right-to-Left Spin Loop
function animateCube() {
    if (autoSpin && !isDragging) {
        currentX -= 0.5; // Speed control
        cube.style.transform = `translateZ(-110px) rotateX(${currentY}deg) rotateY(${currentX}deg)`;
    }
    requestAnimationFrame(animateCube);
}
animateCube();

// Event Listeners
cube.addEventListener('mousedown', dragStart);
window.addEventListener('mousemove', dragMove);
window.addEventListener('mouseup', dragEnd);

cube.addEventListener('touchstart', dragStart);
window.addEventListener('touchmove', dragMove);
window.addEventListener('touchend', dragEnd);
