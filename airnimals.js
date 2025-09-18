  const img = document.getElementById('nextLink');
  const link = document.getElementById('prevLink');

  link.addEventListener('mouseover', () => {
    img.classList.add('blink');
  });

  link.addEventListener('mouseout', () => {
    img.classList.remove('blink');
  });
