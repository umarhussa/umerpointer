const customCursor = document.getElementById('customCursor');
const card = document.querySelector('.hover-card');

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.pageX}px`;
  customCursor.style.top = `${e.pageY}px`;
});

// Add hover effect to the card
card.addEventListener('mouseenter', () => {
  customCursor.classList.add('hovering');
  customCursor.classList.add('green');  // Change cursor to green
});

card.addEventListener('mouseleave', () => {
  customCursor.classList.remove('hovering');
  customCursor.classList.remove('green');  // Revert cursor to black
});
