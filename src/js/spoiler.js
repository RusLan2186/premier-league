document.addEventListener('DOMContentLoaded', () => {
  let accordionInit = false;

  function initAccordion() {
    document.querySelectorAll('.res__head').forEach(head => {
      head.addEventListener('click', toggleAccordion);
    });

    // Открыть первый спойлер при активации
    const firstContent = document.querySelector('.res__content');
    if (firstContent) {
      firstContent.classList.add('open-spoiler');
    }

    accordionInit = true;
  }

  function destroyAccordion() {
    document.querySelectorAll('.res__head').forEach(head => {
      head.removeEventListener('click', toggleAccordion);
    });
    document.querySelectorAll('.res__content').forEach(content => {
      content.classList.remove('open-spoiler');
    });
    accordionInit = false;
  }

  function toggleAccordion(e) {
    const currentContent = e.target.closest('.res__content');

    // Закрыть все, кроме текущего
    document.querySelectorAll('.res__content.open-spoiler').forEach(content => {
      if (content !== currentContent) {
        content.classList.remove('open-spoiler');
      }
    });

    // Переключить текущий
    currentContent.classList.toggle('open-spoiler');
  }

  function checkAccordion() {
    if (window.innerWidth <= 1099.98 && !accordionInit) {
      initAccordion();
    } else if (window.innerWidth > 1099.98 && accordionInit) {
      destroyAccordion();
    }
  }

  checkAccordion();
  window.addEventListener('resize', checkAccordion);
});
