(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('section[id]');
  var yearEl = document.getElementById('year');
  var themeToggle = document.getElementById('theme-toggle');
  var root = document.documentElement;
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function applyTheme(theme, persist) {
    var isDark = theme === 'dark';
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    if (themeMeta) themeMeta.setAttribute('content', isDark ? '#0e141d' : '#ffffff');
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    if (persist) {
      try {
        localStorage.setItem('theme', theme);
      } catch (e) {}
    }
  }

  function toggleTheme() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) root.classList.add('theme-transition');
    applyTheme(next, true);
    window.setTimeout(function () {
      root.classList.remove('theme-transition');
    }, 320);
  }

  applyTheme(currentTheme(), false);

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  /* Sticky header shadow on scroll */
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightNav();
  }

  /* Mobile menu toggle */
  function toggleMenu() {
    var isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* Active nav link based on scroll position */
  function highlightNav() {
    if (!header || !sections.length) return;
    var scrollPos = window.scrollY + header.offsetHeight + 40;
    var current = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      var href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  if (sections.length) onScroll();

  /* Contact form — opens mail app with pre-filled message */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var nameEl = document.getElementById('contact-name');
      var emailEl = document.getElementById('contact-email');
      var messageEl = document.getElementById('contact-message');
      var recipient = contactForm.dataset.email;

      var name = nameEl.value.trim();
      var email = emailEl.value.trim();
      var message = messageEl.value.trim();

      if (!name || !email || !message) {
        contactForm.reportValidity();
        return;
      }

      var subject = 'Portfolio contact from ' + name;
      var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;

      window.location.href =
        'mailto:' + recipient +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }
})();
