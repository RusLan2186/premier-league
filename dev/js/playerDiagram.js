document.querySelectorAll('.circle__block').forEach(block => {
  const span = block.querySelector('span');
  const value = parseInt(span.textContent); 
  block.style.setProperty('--percent', value + '%');
});

