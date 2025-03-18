// main.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
  
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        // navMenuが表示・非表示を切り替え
        if (navMenu.style.display === 'flex') {
          navMenu.style.display = 'none';
        } else {
          navMenu.style.display = 'flex';
        }
      });
    }
  });
  