document.addEventListener('DOMContentLoaded', function() {
  // Get the current language from local storage or set Russian as default
  let currentLanguage = localStorage.getItem('language') || 'ru';
  switchLanguage(currentLanguage);

  // Function to switch languages
  function switchLanguage(lang) {
      const elements = document.querySelectorAll('[data-lang-ru]');
      elements.forEach(element => {
          if (lang === 'cz') {
              element.textContent = element.getAttribute('data-lang-cz');
          } else {
              element.textContent = element.getAttribute('data-lang-ru');
          }
      });

      // Update placeholders
      const placeholders = document.querySelectorAll('[data-lang-ru][data-lang-cz]');
      placeholders.forEach(input => {
          if (lang === 'cz') {
              input.setAttribute('placeholder', input.getAttribute('data-lang-cz'));
          } else {
              input.setAttribute('placeholder', input.getAttribute('data-lang-ru'));
          }
      });

      // Save the current language in local storage
      localStorage.setItem('language', lang);
  }

  // Event for clicking the language switch button
  window.switchLanguage = function() {
      let newLanguage = (localStorage.getItem('language') === 'ru') ? 'cz' : 'ru';
      switchLanguage(newLanguage);
  }
});